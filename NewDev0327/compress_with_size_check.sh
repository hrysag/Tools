#!/bin/bash
# 腳本名稱: compress_with_size_check.sh
# 描述: 遞迴壓縮指定目錄下，指定類型且大於 1KB 的檔案。相容於 Linux 與 macOS。

# --- 參數設定 ---
MIN_SIZE_BYTES=1024  # 1 KB
EXT_REGEX=".*\.(astc|json|js|css|html)$"
TARGET_DIR="$1"
# --- 參數設定 ---

# 檢查是否提供了目標目錄
if [ -z "$TARGET_DIR" ]; then
    echo "錯誤: 請提供要壓縮的目標目錄路徑 (e.g., ./compress.sh /var/www/html/h5_game/)"
    exit 1
fi

# 確保路徑存在
if [ ! -d "$TARGET_DIR" ]; then
    echo "錯誤: 找不到目錄 $TARGET_DIR"
    exit 1
fi

echo "=== Gzip 靜態壓縮開始 (目標: $TARGET_DIR | 閾值: $MIN_SIZE_BYTES Bytes) ==="

# 偵測作業系統 (相容於不同 Shell)
OS_TYPE="$(uname)"

# 判斷作業系統類型以調整 find 指令
if [[ "$OS_TYPE" == "Darwin" ]]; then
    # macOS (BSD find) 使用 -E 參數啟動擴展正則
    FIND_CMD="find -E \"$TARGET_DIR\" -type f -regex \"$EXT_REGEX\" -print0"
else
    # Linux (GNU find)
    FIND_CMD="find \"$TARGET_DIR\" -type f -regextype posix-egrep -regex \"$EXT_REGEX\" -print0"
fi

# 執行尋找並處理檔案
eval "$FIND_CMD" | while IFS= read -r -d $'\0' file; do
    
    # macOS 的 stat 參數與 Linux 不同
    if [[ "$OS_TYPE" == "Darwin" ]]; then
        file_size=$(stat -f%z "$file")
    else
        file_size=$(stat -c%s "$file")
    fi
    
    # 1. 檢查是否已存在 .gz 檔案
    if [ -f "$file.gz" ]; then
        continue
    fi

    # 2. 檢查檔案大小
    if [ "$file_size" -ge "$MIN_SIZE_BYTES" ]; then
        # 執行壓縮
        gzip -k -9 -f "$file"
        
        # 顯示壓縮成功的訊息
        kb_size=$(awk "BEGIN {printf \"%.2f\", $file_size/1024}")
        echo "   [✓ 壓縮] ${kb_size}KB: $file"
    else
        # 顯示跳過小檔案的訊息 (已註釋，保持簡潔)
        # kb_size=$(awk "BEGIN {printf \"%.2f\", $file_size/1024}")
        # echo "   [跳過] ${kb_size}KB: $file"
        continue
    fi
done

echo "=== Gzip 靜態壓縮完成 ==="
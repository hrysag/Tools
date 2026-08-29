
function slotDataParserXXX(base64Str, bet, featureRatio) {
    let realBet = (bet / featureRatio).fixed();;
    return MyLib.historyParser(base64Str, realBet);
}
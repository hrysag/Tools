abstract class InstanceBase {
	static instance<T extends new (...args_as: any[]) => any>(this: T, ...args_as_: ConstructorParameters<T>): InstanceType<T> {
		const self = this as any;

		if (!self._instance) {
			self._instance = new self(...args_as_);
		}

		return self._instance;
	}
}

export default InstanceBase;

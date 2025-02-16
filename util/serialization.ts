//@ts-ignore
export function deserialize<T>(cls: new () => T, serializedObj: SerializeObject<T>): T {
	// @ts-ignore
	return Object.assign(new cls(), serializedObj);
}

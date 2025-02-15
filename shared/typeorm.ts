const isServer = typeof window === 'undefined';

let typeorm: any = {};
if (isServer) {
	import('typeorm').then((typeormModule) => {
		typeorm = typeormModule;
	});
}

export const BaseEntity = isServer ? typeorm.BaseEntity : class {
  static find() { throw new Error('Not available in frontend') }
  static findOne() { throw new Error('Not available in frontend') }
  save() { throw new Error('Not available in frontend') }
  remove() { throw new Error('Not available in frontend') }
};

export const Entity = isServer ? typeorm.Entity : () => () => {};
export const Column = isServer ? typeorm.Column : () => () => {};
export const PrimaryGeneratedColumn = isServer ? typeorm.PrimaryGeneratedColumn : () => () => {};
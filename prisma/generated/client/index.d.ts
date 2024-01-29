
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Collaborator
 * 
 */
export type Collaborator = $Result.DefaultSelection<Prisma.$CollaboratorPayload>
/**
 * Model Computer
 * 
 */
export type Computer = $Result.DefaultSelection<Prisma.$ComputerPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PADRAO: 'PADRAO',
  ADMINISTRADOR: 'ADMINISTRADOR',
  TECNICO: 'TECNICO',
  TRIAGEM: 'TRIAGEM'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.collaborator`: Exposes CRUD operations for the **Collaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborators
    * const collaborators = await prisma.collaborator.findMany()
    * ```
    */
  get collaborator(): Prisma.CollaboratorDelegate<ExtArgs>;

  /**
   * `prisma.computer`: Exposes CRUD operations for the **Computer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Computers
    * const computers = await prisma.computer.findMany()
    * ```
    */
  get computer(): Prisma.ComputerDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.0
   * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Collaborator: 'Collaborator',
    Computer: 'Computer',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'collaborator' | 'computer' | 'order'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Collaborator: {
        payload: Prisma.$CollaboratorPayload<ExtArgs>
        fields: Prisma.CollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaboratorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaboratorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findFirst: {
            args: Prisma.CollaboratorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaboratorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          findMany: {
            args: Prisma.CollaboratorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>[]
          }
          create: {
            args: Prisma.CollaboratorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          createMany: {
            args: Prisma.CollaboratorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CollaboratorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          update: {
            args: Prisma.CollaboratorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.CollaboratorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CollaboratorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CollaboratorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollaboratorPayload>
          }
          aggregate: {
            args: Prisma.CollaboratorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCollaborator>
          }
          groupBy: {
            args: Prisma.CollaboratorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaboratorCountArgs<ExtArgs>,
            result: $Utils.Optional<CollaboratorCountAggregateOutputType> | number
          }
        }
      }
      Computer: {
        payload: Prisma.$ComputerPayload<ExtArgs>
        fields: Prisma.ComputerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComputerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComputerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          findFirst: {
            args: Prisma.ComputerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComputerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          findMany: {
            args: Prisma.ComputerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>[]
          }
          create: {
            args: Prisma.ComputerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          createMany: {
            args: Prisma.ComputerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ComputerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          update: {
            args: Prisma.ComputerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          deleteMany: {
            args: Prisma.ComputerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ComputerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ComputerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComputerPayload>
          }
          aggregate: {
            args: Prisma.ComputerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComputer>
          }
          groupBy: {
            args: Prisma.ComputerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ComputerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComputerCountArgs<ExtArgs>,
            result: $Utils.Optional<ComputerCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ComputerCountOutputType
   */

  export type ComputerCountOutputType = {
    chamado: number
  }

  export type ComputerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamado?: boolean | ComputerCountOutputTypeCountChamadoArgs
  }

  // Custom InputTypes

  /**
   * ComputerCountOutputType without action
   */
  export type ComputerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerCountOutputType
     */
    select?: ComputerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ComputerCountOutputType without action
   */
  export type ComputerCountOutputTypeCountChamadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Collaborator
   */

  export type AggregateCollaborator = {
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  export type CollaboratorMinAggregateOutputType = {
    matricula: string | null
    nome: string | null
    email: string | null
    setor: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type CollaboratorMaxAggregateOutputType = {
    matricula: string | null
    nome: string | null
    email: string | null
    setor: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type CollaboratorCountAggregateOutputType = {
    matricula: number
    nome: number
    email: number
    setor: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type CollaboratorMinAggregateInputType = {
    matricula?: true
    nome?: true
    email?: true
    setor?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type CollaboratorMaxAggregateInputType = {
    matricula?: true
    nome?: true
    email?: true
    setor?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type CollaboratorCountAggregateInputType = {
    matricula?: true
    nome?: true
    email?: true
    setor?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type CollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborator to aggregate.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborators
    **/
    _count?: true | CollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaboratorMaxAggregateInputType
  }

  export type GetCollaboratorAggregateType<T extends CollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaborator[P]>
      : GetScalarType<T[P], AggregateCollaborator[P]>
  }




  export type CollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaboratorWhereInput
    orderBy?: CollaboratorOrderByWithAggregationInput | CollaboratorOrderByWithAggregationInput[]
    by: CollaboratorScalarFieldEnum[] | CollaboratorScalarFieldEnum
    having?: CollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaboratorCountAggregateInputType | true
    _min?: CollaboratorMinAggregateInputType
    _max?: CollaboratorMaxAggregateInputType
  }

  export type CollaboratorGroupByOutputType = {
    matricula: string
    nome: string
    email: string | null
    setor: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: CollaboratorCountAggregateOutputType | null
    _min: CollaboratorMinAggregateOutputType | null
    _max: CollaboratorMaxAggregateOutputType | null
  }

  type GetCollaboratorGroupByPayload<T extends CollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], CollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type CollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matricula?: boolean
    nome?: boolean
    email?: boolean
    setor?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectScalar = {
    matricula?: boolean
    nome?: boolean
    email?: boolean
    setor?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }


  export type $CollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaborator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      matricula: string
      nome: string
      email: string | null
      setor: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["collaborator"]>
    composites: {}
  }


  type CollaboratorGetPayload<S extends boolean | null | undefined | CollaboratorDefaultArgs> = $Result.GetResult<Prisma.$CollaboratorPayload, S>

  type CollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollaboratorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CollaboratorCountAggregateInputType | true
    }

  export interface CollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaborator'], meta: { name: 'Collaborator' } }
    /**
     * Find zero or one Collaborator that matches the filter.
     * @param {CollaboratorFindUniqueArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CollaboratorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CollaboratorFindUniqueArgs<ExtArgs>>
    ): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Collaborator that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CollaboratorFindUniqueOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CollaboratorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaboratorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Collaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CollaboratorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaboratorFindFirstArgs<ExtArgs>>
    ): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Collaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindFirstOrThrowArgs} args - Arguments to find a Collaborator
     * @example
     * // Get one Collaborator
     * const collaborator = await prisma.collaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CollaboratorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaboratorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Collaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborators
     * const collaborators = await prisma.collaborator.findMany()
     * 
     * // Get first 10 Collaborators
     * const collaborators = await prisma.collaborator.findMany({ take: 10 })
     * 
     * // Only select the `matricula`
     * const collaboratorWithMatriculaOnly = await prisma.collaborator.findMany({ select: { matricula: true } })
     * 
    **/
    findMany<T extends CollaboratorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaboratorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Collaborator.
     * @param {CollaboratorCreateArgs} args - Arguments to create a Collaborator.
     * @example
     * // Create one Collaborator
     * const Collaborator = await prisma.collaborator.create({
     *   data: {
     *     // ... data to create a Collaborator
     *   }
     * })
     * 
    **/
    create<T extends CollaboratorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CollaboratorCreateArgs<ExtArgs>>
    ): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Collaborators.
     *     @param {CollaboratorCreateManyArgs} args - Arguments to create many Collaborators.
     *     @example
     *     // Create many Collaborators
     *     const collaborator = await prisma.collaborator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CollaboratorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaboratorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collaborator.
     * @param {CollaboratorDeleteArgs} args - Arguments to delete one Collaborator.
     * @example
     * // Delete one Collaborator
     * const Collaborator = await prisma.collaborator.delete({
     *   where: {
     *     // ... filter to delete one Collaborator
     *   }
     * })
     * 
    **/
    delete<T extends CollaboratorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CollaboratorDeleteArgs<ExtArgs>>
    ): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Collaborator.
     * @param {CollaboratorUpdateArgs} args - Arguments to update one Collaborator.
     * @example
     * // Update one Collaborator
     * const collaborator = await prisma.collaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CollaboratorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CollaboratorUpdateArgs<ExtArgs>>
    ): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Collaborators.
     * @param {CollaboratorDeleteManyArgs} args - Arguments to filter Collaborators to delete.
     * @example
     * // Delete a few Collaborators
     * const { count } = await prisma.collaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CollaboratorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollaboratorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborators
     * const collaborator = await prisma.collaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CollaboratorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CollaboratorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collaborator.
     * @param {CollaboratorUpsertArgs} args - Arguments to update or create a Collaborator.
     * @example
     * // Update or create a Collaborator
     * const collaborator = await prisma.collaborator.upsert({
     *   create: {
     *     // ... data to create a Collaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaborator we want to update
     *   }
     * })
    **/
    upsert<T extends CollaboratorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CollaboratorUpsertArgs<ExtArgs>>
    ): Prisma__CollaboratorClient<$Result.GetResult<Prisma.$CollaboratorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Collaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorCountArgs} args - Arguments to filter Collaborators to count.
     * @example
     * // Count the number of Collaborators
     * const count = await prisma.collaborator.count({
     *   where: {
     *     // ... the filter for the Collaborators we want to count
     *   }
     * })
    **/
    count<T extends CollaboratorCountArgs>(
      args?: Subset<T, CollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollaboratorAggregateArgs>(args: Subset<T, CollaboratorAggregateArgs>): Prisma.PrismaPromise<GetCollaboratorAggregateType<T>>

    /**
     * Group by Collaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaboratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: CollaboratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaborator model
   */
  readonly fields: CollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Collaborator model
   */ 
  interface CollaboratorFieldRefs {
    readonly matricula: FieldRef<"Collaborator", 'String'>
    readonly nome: FieldRef<"Collaborator", 'String'>
    readonly email: FieldRef<"Collaborator", 'String'>
    readonly setor: FieldRef<"Collaborator", 'String'>
    readonly criadoEm: FieldRef<"Collaborator", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Collaborator", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Collaborator findUnique
   */
  export type CollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }


  /**
   * Collaborator findUniqueOrThrow
   */
  export type CollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where: CollaboratorWhereUniqueInput
  }


  /**
   * Collaborator findFirst
   */
  export type CollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }


  /**
   * Collaborator findFirstOrThrow
   */
  export type CollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Filter, which Collaborator to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborators.
     */
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }


  /**
   * Collaborator findMany
   */
  export type CollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Filter, which Collaborators to fetch.
     */
    where?: CollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborators to fetch.
     */
    orderBy?: CollaboratorOrderByWithRelationInput | CollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborators.
     */
    cursor?: CollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborators.
     */
    skip?: number
    distinct?: CollaboratorScalarFieldEnum | CollaboratorScalarFieldEnum[]
  }


  /**
   * Collaborator create
   */
  export type CollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * The data needed to create a Collaborator.
     */
    data: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
  }


  /**
   * Collaborator createMany
   */
  export type CollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborators.
     */
    data: CollaboratorCreateManyInput | CollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Collaborator update
   */
  export type CollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * The data needed to update a Collaborator.
     */
    data: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
    /**
     * Choose, which Collaborator to update.
     */
    where: CollaboratorWhereUniqueInput
  }


  /**
   * Collaborator updateMany
   */
  export type CollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborators.
     */
    data: XOR<CollaboratorUpdateManyMutationInput, CollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which Collaborators to update
     */
    where?: CollaboratorWhereInput
  }


  /**
   * Collaborator upsert
   */
  export type CollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * The filter to search for the Collaborator to update in case it exists.
     */
    where: CollaboratorWhereUniqueInput
    /**
     * In case the Collaborator found by the `where` argument doesn't exist, create a new Collaborator with this data.
     */
    create: XOR<CollaboratorCreateInput, CollaboratorUncheckedCreateInput>
    /**
     * In case the Collaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaboratorUpdateInput, CollaboratorUncheckedUpdateInput>
  }


  /**
   * Collaborator delete
   */
  export type CollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Filter which Collaborator to delete.
     */
    where: CollaboratorWhereUniqueInput
  }


  /**
   * Collaborator deleteMany
   */
  export type CollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborators to delete
     */
    where?: CollaboratorWhereInput
  }


  /**
   * Collaborator without action
   */
  export type CollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
  }



  /**
   * Model Computer
   */

  export type AggregateComputer = {
    _count: ComputerCountAggregateOutputType | null
    _avg: ComputerAvgAggregateOutputType | null
    _sum: ComputerSumAggregateOutputType | null
    _min: ComputerMinAggregateOutputType | null
    _max: ComputerMaxAggregateOutputType | null
  }

  export type ComputerAvgAggregateOutputType = {
    id: number | null
  }

  export type ComputerSumAggregateOutputType = {
    id: number | null
  }

  export type ComputerMinAggregateOutputType = {
    id: number | null
    tombamento: string | null
    marca: string | null
    gpu: string | null
    sistema_operacional: string | null
    placa_video: string | null
    ram: string | null
    memoria: string | null
    tipo_hd: string | null
    volume_hd: string | null
    tipo: string | null
    nome_colaborador: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ComputerMaxAggregateOutputType = {
    id: number | null
    tombamento: string | null
    marca: string | null
    gpu: string | null
    sistema_operacional: string | null
    placa_video: string | null
    ram: string | null
    memoria: string | null
    tipo_hd: string | null
    volume_hd: string | null
    tipo: string | null
    nome_colaborador: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ComputerCountAggregateOutputType = {
    id: number
    tombamento: number
    marca: number
    gpu: number
    sistema_operacional: number
    placa_video: number
    ram: number
    memoria: number
    tipo_hd: number
    volume_hd: number
    tipo: number
    nome_colaborador: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ComputerAvgAggregateInputType = {
    id?: true
  }

  export type ComputerSumAggregateInputType = {
    id?: true
  }

  export type ComputerMinAggregateInputType = {
    id?: true
    tombamento?: true
    marca?: true
    gpu?: true
    sistema_operacional?: true
    placa_video?: true
    ram?: true
    memoria?: true
    tipo_hd?: true
    volume_hd?: true
    tipo?: true
    nome_colaborador?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ComputerMaxAggregateInputType = {
    id?: true
    tombamento?: true
    marca?: true
    gpu?: true
    sistema_operacional?: true
    placa_video?: true
    ram?: true
    memoria?: true
    tipo_hd?: true
    volume_hd?: true
    tipo?: true
    nome_colaborador?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ComputerCountAggregateInputType = {
    id?: true
    tombamento?: true
    marca?: true
    gpu?: true
    sistema_operacional?: true
    placa_video?: true
    ram?: true
    memoria?: true
    tipo_hd?: true
    volume_hd?: true
    tipo?: true
    nome_colaborador?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ComputerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Computer to aggregate.
     */
    where?: ComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Computers to fetch.
     */
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Computers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Computers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Computers
    **/
    _count?: true | ComputerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComputerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComputerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComputerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComputerMaxAggregateInputType
  }

  export type GetComputerAggregateType<T extends ComputerAggregateArgs> = {
        [P in keyof T & keyof AggregateComputer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComputer[P]>
      : GetScalarType<T[P], AggregateComputer[P]>
  }




  export type ComputerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComputerWhereInput
    orderBy?: ComputerOrderByWithAggregationInput | ComputerOrderByWithAggregationInput[]
    by: ComputerScalarFieldEnum[] | ComputerScalarFieldEnum
    having?: ComputerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComputerCountAggregateInputType | true
    _avg?: ComputerAvgAggregateInputType
    _sum?: ComputerSumAggregateInputType
    _min?: ComputerMinAggregateInputType
    _max?: ComputerMaxAggregateInputType
  }

  export type ComputerGroupByOutputType = {
    id: number
    tombamento: string
    marca: string
    gpu: string
    sistema_operacional: string
    placa_video: string
    ram: string
    memoria: string
    tipo_hd: string
    volume_hd: string
    tipo: string
    nome_colaborador: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: ComputerCountAggregateOutputType | null
    _avg: ComputerAvgAggregateOutputType | null
    _sum: ComputerSumAggregateOutputType | null
    _min: ComputerMinAggregateOutputType | null
    _max: ComputerMaxAggregateOutputType | null
  }

  type GetComputerGroupByPayload<T extends ComputerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComputerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComputerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComputerGroupByOutputType[P]>
            : GetScalarType<T[P], ComputerGroupByOutputType[P]>
        }
      >
    >


  export type ComputerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tombamento?: boolean
    marca?: boolean
    gpu?: boolean
    sistema_operacional?: boolean
    placa_video?: boolean
    ram?: boolean
    memoria?: boolean
    tipo_hd?: boolean
    volume_hd?: boolean
    tipo?: boolean
    nome_colaborador?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    chamado?: boolean | Computer$chamadoArgs<ExtArgs>
    _count?: boolean | ComputerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["computer"]>

  export type ComputerSelectScalar = {
    id?: boolean
    tombamento?: boolean
    marca?: boolean
    gpu?: boolean
    sistema_operacional?: boolean
    placa_video?: boolean
    ram?: boolean
    memoria?: boolean
    tipo_hd?: boolean
    volume_hd?: boolean
    tipo?: boolean
    nome_colaborador?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ComputerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chamado?: boolean | Computer$chamadoArgs<ExtArgs>
    _count?: boolean | ComputerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ComputerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Computer"
    objects: {
      chamado: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tombamento: string
      marca: string
      gpu: string
      sistema_operacional: string
      placa_video: string
      ram: string
      memoria: string
      tipo_hd: string
      volume_hd: string
      tipo: string
      nome_colaborador: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["computer"]>
    composites: {}
  }


  type ComputerGetPayload<S extends boolean | null | undefined | ComputerDefaultArgs> = $Result.GetResult<Prisma.$ComputerPayload, S>

  type ComputerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ComputerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ComputerCountAggregateInputType | true
    }

  export interface ComputerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Computer'], meta: { name: 'Computer' } }
    /**
     * Find zero or one Computer that matches the filter.
     * @param {ComputerFindUniqueArgs} args - Arguments to find a Computer
     * @example
     * // Get one Computer
     * const computer = await prisma.computer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ComputerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ComputerFindUniqueArgs<ExtArgs>>
    ): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Computer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ComputerFindUniqueOrThrowArgs} args - Arguments to find a Computer
     * @example
     * // Get one Computer
     * const computer = await prisma.computer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ComputerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ComputerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Computer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerFindFirstArgs} args - Arguments to find a Computer
     * @example
     * // Get one Computer
     * const computer = await prisma.computer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ComputerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ComputerFindFirstArgs<ExtArgs>>
    ): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Computer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerFindFirstOrThrowArgs} args - Arguments to find a Computer
     * @example
     * // Get one Computer
     * const computer = await prisma.computer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ComputerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ComputerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Computers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Computers
     * const computers = await prisma.computer.findMany()
     * 
     * // Get first 10 Computers
     * const computers = await prisma.computer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const computerWithIdOnly = await prisma.computer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ComputerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComputerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Computer.
     * @param {ComputerCreateArgs} args - Arguments to create a Computer.
     * @example
     * // Create one Computer
     * const Computer = await prisma.computer.create({
     *   data: {
     *     // ... data to create a Computer
     *   }
     * })
     * 
    **/
    create<T extends ComputerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ComputerCreateArgs<ExtArgs>>
    ): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Computers.
     *     @param {ComputerCreateManyArgs} args - Arguments to create many Computers.
     *     @example
     *     // Create many Computers
     *     const computer = await prisma.computer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ComputerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComputerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Computer.
     * @param {ComputerDeleteArgs} args - Arguments to delete one Computer.
     * @example
     * // Delete one Computer
     * const Computer = await prisma.computer.delete({
     *   where: {
     *     // ... filter to delete one Computer
     *   }
     * })
     * 
    **/
    delete<T extends ComputerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ComputerDeleteArgs<ExtArgs>>
    ): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Computer.
     * @param {ComputerUpdateArgs} args - Arguments to update one Computer.
     * @example
     * // Update one Computer
     * const computer = await prisma.computer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ComputerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ComputerUpdateArgs<ExtArgs>>
    ): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Computers.
     * @param {ComputerDeleteManyArgs} args - Arguments to filter Computers to delete.
     * @example
     * // Delete a few Computers
     * const { count } = await prisma.computer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ComputerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComputerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Computers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Computers
     * const computer = await prisma.computer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ComputerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ComputerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Computer.
     * @param {ComputerUpsertArgs} args - Arguments to update or create a Computer.
     * @example
     * // Update or create a Computer
     * const computer = await prisma.computer.upsert({
     *   create: {
     *     // ... data to create a Computer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Computer we want to update
     *   }
     * })
    **/
    upsert<T extends ComputerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ComputerUpsertArgs<ExtArgs>>
    ): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Computers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerCountArgs} args - Arguments to filter Computers to count.
     * @example
     * // Count the number of Computers
     * const count = await prisma.computer.count({
     *   where: {
     *     // ... the filter for the Computers we want to count
     *   }
     * })
    **/
    count<T extends ComputerCountArgs>(
      args?: Subset<T, ComputerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComputerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Computer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComputerAggregateArgs>(args: Subset<T, ComputerAggregateArgs>): Prisma.PrismaPromise<GetComputerAggregateType<T>>

    /**
     * Group by Computer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComputerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComputerGroupByArgs['orderBy'] }
        : { orderBy?: ComputerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComputerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComputerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Computer model
   */
  readonly fields: ComputerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Computer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComputerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chamado<T extends Computer$chamadoArgs<ExtArgs> = {}>(args?: Subset<T, Computer$chamadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Computer model
   */ 
  interface ComputerFieldRefs {
    readonly id: FieldRef<"Computer", 'Int'>
    readonly tombamento: FieldRef<"Computer", 'String'>
    readonly marca: FieldRef<"Computer", 'String'>
    readonly gpu: FieldRef<"Computer", 'String'>
    readonly sistema_operacional: FieldRef<"Computer", 'String'>
    readonly placa_video: FieldRef<"Computer", 'String'>
    readonly ram: FieldRef<"Computer", 'String'>
    readonly memoria: FieldRef<"Computer", 'String'>
    readonly tipo_hd: FieldRef<"Computer", 'String'>
    readonly volume_hd: FieldRef<"Computer", 'String'>
    readonly tipo: FieldRef<"Computer", 'String'>
    readonly nome_colaborador: FieldRef<"Computer", 'String'>
    readonly criadoEm: FieldRef<"Computer", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Computer", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Computer findUnique
   */
  export type ComputerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computer to fetch.
     */
    where: ComputerWhereUniqueInput
  }


  /**
   * Computer findUniqueOrThrow
   */
  export type ComputerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computer to fetch.
     */
    where: ComputerWhereUniqueInput
  }


  /**
   * Computer findFirst
   */
  export type ComputerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computer to fetch.
     */
    where?: ComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Computers to fetch.
     */
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Computers.
     */
    cursor?: ComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Computers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Computers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Computers.
     */
    distinct?: ComputerScalarFieldEnum | ComputerScalarFieldEnum[]
  }


  /**
   * Computer findFirstOrThrow
   */
  export type ComputerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computer to fetch.
     */
    where?: ComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Computers to fetch.
     */
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Computers.
     */
    cursor?: ComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Computers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Computers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Computers.
     */
    distinct?: ComputerScalarFieldEnum | ComputerScalarFieldEnum[]
  }


  /**
   * Computer findMany
   */
  export type ComputerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter, which Computers to fetch.
     */
    where?: ComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Computers to fetch.
     */
    orderBy?: ComputerOrderByWithRelationInput | ComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Computers.
     */
    cursor?: ComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Computers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Computers.
     */
    skip?: number
    distinct?: ComputerScalarFieldEnum | ComputerScalarFieldEnum[]
  }


  /**
   * Computer create
   */
  export type ComputerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * The data needed to create a Computer.
     */
    data: XOR<ComputerCreateInput, ComputerUncheckedCreateInput>
  }


  /**
   * Computer createMany
   */
  export type ComputerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Computers.
     */
    data: ComputerCreateManyInput | ComputerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Computer update
   */
  export type ComputerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * The data needed to update a Computer.
     */
    data: XOR<ComputerUpdateInput, ComputerUncheckedUpdateInput>
    /**
     * Choose, which Computer to update.
     */
    where: ComputerWhereUniqueInput
  }


  /**
   * Computer updateMany
   */
  export type ComputerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Computers.
     */
    data: XOR<ComputerUpdateManyMutationInput, ComputerUncheckedUpdateManyInput>
    /**
     * Filter which Computers to update
     */
    where?: ComputerWhereInput
  }


  /**
   * Computer upsert
   */
  export type ComputerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * The filter to search for the Computer to update in case it exists.
     */
    where: ComputerWhereUniqueInput
    /**
     * In case the Computer found by the `where` argument doesn't exist, create a new Computer with this data.
     */
    create: XOR<ComputerCreateInput, ComputerUncheckedCreateInput>
    /**
     * In case the Computer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComputerUpdateInput, ComputerUncheckedUpdateInput>
  }


  /**
   * Computer delete
   */
  export type ComputerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    /**
     * Filter which Computer to delete.
     */
    where: ComputerWhereUniqueInput
  }


  /**
   * Computer deleteMany
   */
  export type ComputerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Computers to delete
     */
    where?: ComputerWhereInput
  }


  /**
   * Computer.chamado
   */
  export type Computer$chamadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Computer without action
   */
  export type ComputerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    solicitante: string | null
    descricao: string | null
    setor: string | null
    solucao: string | null
    status: number | null
    tombamentoComputador: string | null
    responsavel: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    solicitante: string | null
    descricao: string | null
    setor: string | null
    solucao: string | null
    status: number | null
    tombamentoComputador: string | null
    responsavel: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    tipo: number
    solicitante: number
    descricao: number
    setor: number
    solucao: number
    status: number
    tombamentoComputador: number
    responsavel: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    tipo?: true
    solicitante?: true
    descricao?: true
    setor?: true
    solucao?: true
    status?: true
    tombamentoComputador?: true
    responsavel?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    tipo?: true
    solicitante?: true
    descricao?: true
    setor?: true
    solucao?: true
    status?: true
    tombamentoComputador?: true
    responsavel?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    tipo?: true
    solicitante?: true
    descricao?: true
    setor?: true
    solucao?: true
    status?: true
    tombamentoComputador?: true
    responsavel?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    tipo: string
    solicitante: string
    descricao: string | null
    setor: string
    solucao: string | null
    status: number
    tombamentoComputador: string | null
    responsavel: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    solicitante?: boolean
    descricao?: boolean
    setor?: boolean
    solucao?: boolean
    status?: boolean
    tombamentoComputador?: boolean
    responsavel?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    computador?: boolean | Order$computadorArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    tipo?: boolean
    solicitante?: boolean
    descricao?: boolean
    setor?: boolean
    solucao?: boolean
    status?: boolean
    tombamentoComputador?: boolean
    responsavel?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    computador?: boolean | Order$computadorArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      computador: Prisma.$ComputerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      solicitante: string
      descricao: string | null
      setor: string
      solucao: string | null
      status: number
      tombamentoComputador: string | null
      responsavel: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    computador<T extends Order$computadorArgs<ExtArgs> = {}>(args?: Subset<T, Order$computadorArgs<ExtArgs>>): Prisma__ComputerClient<$Result.GetResult<Prisma.$ComputerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly tipo: FieldRef<"Order", 'String'>
    readonly solicitante: FieldRef<"Order", 'String'>
    readonly descricao: FieldRef<"Order", 'String'>
    readonly setor: FieldRef<"Order", 'String'>
    readonly solucao: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'Int'>
    readonly tombamentoComputador: FieldRef<"Order", 'String'>
    readonly responsavel: FieldRef<"Order", 'String'>
    readonly criadoEm: FieldRef<"Order", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.computador
   */
  export type Order$computadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Computer
     */
    select?: ComputerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ComputerInclude<ExtArgs> | null
    where?: ComputerWhereInput
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CollaboratorScalarFieldEnum: {
    matricula: 'matricula',
    nome: 'nome',
    email: 'email',
    setor: 'setor',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type CollaboratorScalarFieldEnum = (typeof CollaboratorScalarFieldEnum)[keyof typeof CollaboratorScalarFieldEnum]


  export const ComputerScalarFieldEnum: {
    id: 'id',
    tombamento: 'tombamento',
    marca: 'marca',
    gpu: 'gpu',
    sistema_operacional: 'sistema_operacional',
    placa_video: 'placa_video',
    ram: 'ram',
    memoria: 'memoria',
    tipo_hd: 'tipo_hd',
    volume_hd: 'volume_hd',
    tipo: 'tipo',
    nome_colaborador: 'nome_colaborador',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ComputerScalarFieldEnum = (typeof ComputerScalarFieldEnum)[keyof typeof ComputerScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    solicitante: 'solicitante',
    descricao: 'descricao',
    setor: 'setor',
    solucao: 'solucao',
    status: 'status',
    tombamentoComputador: 'tombamentoComputador',
    responsavel: 'responsavel',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type CollaboratorWhereInput = {
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    matricula?: StringFilter<"Collaborator"> | string
    nome?: StringFilter<"Collaborator"> | string
    email?: StringNullableFilter<"Collaborator"> | string | null
    setor?: StringNullableFilter<"Collaborator"> | string | null
    criadoEm?: DateTimeFilter<"Collaborator"> | Date | string
    atualizadoEm?: DateTimeFilter<"Collaborator"> | Date | string
  }

  export type CollaboratorOrderByWithRelationInput = {
    matricula?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    setor?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CollaboratorWhereUniqueInput = Prisma.AtLeast<{
    matricula?: string
    email?: string
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    nome?: StringFilter<"Collaborator"> | string
    setor?: StringNullableFilter<"Collaborator"> | string | null
    criadoEm?: DateTimeFilter<"Collaborator"> | Date | string
    atualizadoEm?: DateTimeFilter<"Collaborator"> | Date | string
  }, "matricula" | "email">

  export type CollaboratorOrderByWithAggregationInput = {
    matricula?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    setor?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: CollaboratorCountOrderByAggregateInput
    _max?: CollaboratorMaxOrderByAggregateInput
    _min?: CollaboratorMinOrderByAggregateInput
  }

  export type CollaboratorScalarWhereWithAggregatesInput = {
    AND?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    OR?: CollaboratorScalarWhereWithAggregatesInput[]
    NOT?: CollaboratorScalarWhereWithAggregatesInput | CollaboratorScalarWhereWithAggregatesInput[]
    matricula?: StringWithAggregatesFilter<"Collaborator"> | string
    nome?: StringWithAggregatesFilter<"Collaborator"> | string
    email?: StringNullableWithAggregatesFilter<"Collaborator"> | string | null
    setor?: StringNullableWithAggregatesFilter<"Collaborator"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Collaborator"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Collaborator"> | Date | string
  }

  export type ComputerWhereInput = {
    AND?: ComputerWhereInput | ComputerWhereInput[]
    OR?: ComputerWhereInput[]
    NOT?: ComputerWhereInput | ComputerWhereInput[]
    id?: IntFilter<"Computer"> | number
    tombamento?: StringFilter<"Computer"> | string
    marca?: StringFilter<"Computer"> | string
    gpu?: StringFilter<"Computer"> | string
    sistema_operacional?: StringFilter<"Computer"> | string
    placa_video?: StringFilter<"Computer"> | string
    ram?: StringFilter<"Computer"> | string
    memoria?: StringFilter<"Computer"> | string
    tipo_hd?: StringFilter<"Computer"> | string
    volume_hd?: StringFilter<"Computer"> | string
    tipo?: StringFilter<"Computer"> | string
    nome_colaborador?: StringNullableFilter<"Computer"> | string | null
    criadoEm?: DateTimeFilter<"Computer"> | Date | string
    atualizadoEm?: DateTimeFilter<"Computer"> | Date | string
    chamado?: OrderListRelationFilter
  }

  export type ComputerOrderByWithRelationInput = {
    id?: SortOrder
    tombamento?: SortOrder
    marca?: SortOrder
    gpu?: SortOrder
    sistema_operacional?: SortOrder
    placa_video?: SortOrder
    ram?: SortOrder
    memoria?: SortOrder
    tipo_hd?: SortOrder
    volume_hd?: SortOrder
    tipo?: SortOrder
    nome_colaborador?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    chamado?: OrderOrderByRelationAggregateInput
  }

  export type ComputerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tombamento?: string
    AND?: ComputerWhereInput | ComputerWhereInput[]
    OR?: ComputerWhereInput[]
    NOT?: ComputerWhereInput | ComputerWhereInput[]
    marca?: StringFilter<"Computer"> | string
    gpu?: StringFilter<"Computer"> | string
    sistema_operacional?: StringFilter<"Computer"> | string
    placa_video?: StringFilter<"Computer"> | string
    ram?: StringFilter<"Computer"> | string
    memoria?: StringFilter<"Computer"> | string
    tipo_hd?: StringFilter<"Computer"> | string
    volume_hd?: StringFilter<"Computer"> | string
    tipo?: StringFilter<"Computer"> | string
    nome_colaborador?: StringNullableFilter<"Computer"> | string | null
    criadoEm?: DateTimeFilter<"Computer"> | Date | string
    atualizadoEm?: DateTimeFilter<"Computer"> | Date | string
    chamado?: OrderListRelationFilter
  }, "id" | "tombamento">

  export type ComputerOrderByWithAggregationInput = {
    id?: SortOrder
    tombamento?: SortOrder
    marca?: SortOrder
    gpu?: SortOrder
    sistema_operacional?: SortOrder
    placa_video?: SortOrder
    ram?: SortOrder
    memoria?: SortOrder
    tipo_hd?: SortOrder
    volume_hd?: SortOrder
    tipo?: SortOrder
    nome_colaborador?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ComputerCountOrderByAggregateInput
    _avg?: ComputerAvgOrderByAggregateInput
    _max?: ComputerMaxOrderByAggregateInput
    _min?: ComputerMinOrderByAggregateInput
    _sum?: ComputerSumOrderByAggregateInput
  }

  export type ComputerScalarWhereWithAggregatesInput = {
    AND?: ComputerScalarWhereWithAggregatesInput | ComputerScalarWhereWithAggregatesInput[]
    OR?: ComputerScalarWhereWithAggregatesInput[]
    NOT?: ComputerScalarWhereWithAggregatesInput | ComputerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Computer"> | number
    tombamento?: StringWithAggregatesFilter<"Computer"> | string
    marca?: StringWithAggregatesFilter<"Computer"> | string
    gpu?: StringWithAggregatesFilter<"Computer"> | string
    sistema_operacional?: StringWithAggregatesFilter<"Computer"> | string
    placa_video?: StringWithAggregatesFilter<"Computer"> | string
    ram?: StringWithAggregatesFilter<"Computer"> | string
    memoria?: StringWithAggregatesFilter<"Computer"> | string
    tipo_hd?: StringWithAggregatesFilter<"Computer"> | string
    volume_hd?: StringWithAggregatesFilter<"Computer"> | string
    tipo?: StringWithAggregatesFilter<"Computer"> | string
    nome_colaborador?: StringNullableWithAggregatesFilter<"Computer"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Computer"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Computer"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    tipo?: StringFilter<"Order"> | string
    solicitante?: StringFilter<"Order"> | string
    descricao?: StringNullableFilter<"Order"> | string | null
    setor?: StringFilter<"Order"> | string
    solucao?: StringNullableFilter<"Order"> | string | null
    status?: IntFilter<"Order"> | number
    tombamentoComputador?: StringNullableFilter<"Order"> | string | null
    responsavel?: StringNullableFilter<"Order"> | string | null
    criadoEm?: DateTimeFilter<"Order"> | Date | string
    atualizadoEm?: DateTimeFilter<"Order"> | Date | string
    computador?: XOR<ComputerNullableRelationFilter, ComputerWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    solicitante?: SortOrder
    descricao?: SortOrderInput | SortOrder
    setor?: SortOrder
    solucao?: SortOrderInput | SortOrder
    status?: SortOrder
    tombamentoComputador?: SortOrderInput | SortOrder
    responsavel?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    computador?: ComputerOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    tipo?: StringFilter<"Order"> | string
    solicitante?: StringFilter<"Order"> | string
    descricao?: StringNullableFilter<"Order"> | string | null
    setor?: StringFilter<"Order"> | string
    solucao?: StringNullableFilter<"Order"> | string | null
    status?: IntFilter<"Order"> | number
    tombamentoComputador?: StringNullableFilter<"Order"> | string | null
    responsavel?: StringNullableFilter<"Order"> | string | null
    criadoEm?: DateTimeFilter<"Order"> | Date | string
    atualizadoEm?: DateTimeFilter<"Order"> | Date | string
    computador?: XOR<ComputerNullableRelationFilter, ComputerWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    solicitante?: SortOrder
    descricao?: SortOrderInput | SortOrder
    setor?: SortOrder
    solucao?: SortOrderInput | SortOrder
    status?: SortOrder
    tombamentoComputador?: SortOrderInput | SortOrder
    responsavel?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    tipo?: StringWithAggregatesFilter<"Order"> | string
    solicitante?: StringWithAggregatesFilter<"Order"> | string
    descricao?: StringNullableWithAggregatesFilter<"Order"> | string | null
    setor?: StringWithAggregatesFilter<"Order"> | string
    solucao?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: IntWithAggregatesFilter<"Order"> | number
    tombamentoComputador?: StringNullableWithAggregatesFilter<"Order"> | string | null
    responsavel?: StringNullableWithAggregatesFilter<"Order"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type UserCreateInput = {
    nome: string
    email: string
    senha: string
    role?: $Enums.UserRole
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.UserRole
  }

  export type UserUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type CollaboratorCreateInput = {
    matricula: string
    nome: string
    email?: string | null
    setor?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CollaboratorUncheckedCreateInput = {
    matricula: string
    nome: string
    email?: string | null
    setor?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CollaboratorUpdateInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUncheckedUpdateInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorCreateManyInput = {
    matricula: string
    nome: string
    email?: string | null
    setor?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CollaboratorUpdateManyMutationInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaboratorUncheckedUpdateManyInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComputerCreateInput = {
    tombamento: string
    marca: string
    gpu: string
    sistema_operacional: string
    placa_video: string
    ram: string
    memoria: string
    tipo_hd: string
    volume_hd: string
    tipo: string
    nome_colaborador?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    chamado?: OrderCreateNestedManyWithoutComputadorInput
  }

  export type ComputerUncheckedCreateInput = {
    id?: number
    tombamento: string
    marca: string
    gpu: string
    sistema_operacional: string
    placa_video: string
    ram: string
    memoria: string
    tipo_hd: string
    volume_hd: string
    tipo: string
    nome_colaborador?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    chamado?: OrderUncheckedCreateNestedManyWithoutComputadorInput
  }

  export type ComputerUpdateInput = {
    tombamento?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    sistema_operacional?: StringFieldUpdateOperationsInput | string
    placa_video?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    memoria?: StringFieldUpdateOperationsInput | string
    tipo_hd?: StringFieldUpdateOperationsInput | string
    volume_hd?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome_colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    chamado?: OrderUpdateManyWithoutComputadorNestedInput
  }

  export type ComputerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tombamento?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    sistema_operacional?: StringFieldUpdateOperationsInput | string
    placa_video?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    memoria?: StringFieldUpdateOperationsInput | string
    tipo_hd?: StringFieldUpdateOperationsInput | string
    volume_hd?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome_colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    chamado?: OrderUncheckedUpdateManyWithoutComputadorNestedInput
  }

  export type ComputerCreateManyInput = {
    id?: number
    tombamento: string
    marca: string
    gpu: string
    sistema_operacional: string
    placa_video: string
    ram: string
    memoria: string
    tipo_hd: string
    volume_hd: string
    tipo: string
    nome_colaborador?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComputerUpdateManyMutationInput = {
    tombamento?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    sistema_operacional?: StringFieldUpdateOperationsInput | string
    placa_video?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    memoria?: StringFieldUpdateOperationsInput | string
    tipo_hd?: StringFieldUpdateOperationsInput | string
    volume_hd?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome_colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComputerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tombamento?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    sistema_operacional?: StringFieldUpdateOperationsInput | string
    placa_video?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    memoria?: StringFieldUpdateOperationsInput | string
    tipo_hd?: StringFieldUpdateOperationsInput | string
    volume_hd?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome_colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    tipo: string
    solicitante: string
    descricao?: string | null
    setor: string
    solucao?: string | null
    status?: number
    responsavel?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    computador?: ComputerCreateNestedOneWithoutChamadoInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    tipo: string
    solicitante: string
    descricao?: string | null
    setor: string
    solucao?: string | null
    status?: number
    tombamentoComputador?: string | null
    responsavel?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type OrderUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    solicitante?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: StringFieldUpdateOperationsInput | string
    solucao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    computador?: ComputerUpdateOneWithoutChamadoNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    solicitante?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: StringFieldUpdateOperationsInput | string
    solucao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    tombamentoComputador?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    tipo: string
    solicitante: string
    descricao?: string | null
    setor: string
    solucao?: string | null
    status?: number
    tombamentoComputador?: string | null
    responsavel?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    solicitante?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: StringFieldUpdateOperationsInput | string
    solucao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    solicitante?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: StringFieldUpdateOperationsInput | string
    solucao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    tombamentoComputador?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CollaboratorCountOrderByAggregateInput = {
    matricula?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    setor?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CollaboratorMaxOrderByAggregateInput = {
    matricula?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    setor?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CollaboratorMinOrderByAggregateInput = {
    matricula?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    setor?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComputerCountOrderByAggregateInput = {
    id?: SortOrder
    tombamento?: SortOrder
    marca?: SortOrder
    gpu?: SortOrder
    sistema_operacional?: SortOrder
    placa_video?: SortOrder
    ram?: SortOrder
    memoria?: SortOrder
    tipo_hd?: SortOrder
    volume_hd?: SortOrder
    tipo?: SortOrder
    nome_colaborador?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ComputerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ComputerMaxOrderByAggregateInput = {
    id?: SortOrder
    tombamento?: SortOrder
    marca?: SortOrder
    gpu?: SortOrder
    sistema_operacional?: SortOrder
    placa_video?: SortOrder
    ram?: SortOrder
    memoria?: SortOrder
    tipo_hd?: SortOrder
    volume_hd?: SortOrder
    tipo?: SortOrder
    nome_colaborador?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ComputerMinOrderByAggregateInput = {
    id?: SortOrder
    tombamento?: SortOrder
    marca?: SortOrder
    gpu?: SortOrder
    sistema_operacional?: SortOrder
    placa_video?: SortOrder
    ram?: SortOrder
    memoria?: SortOrder
    tipo_hd?: SortOrder
    volume_hd?: SortOrder
    tipo?: SortOrder
    nome_colaborador?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ComputerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ComputerNullableRelationFilter = {
    is?: ComputerWhereInput | null
    isNot?: ComputerWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    solicitante?: SortOrder
    descricao?: SortOrder
    setor?: SortOrder
    solucao?: SortOrder
    status?: SortOrder
    tombamentoComputador?: SortOrder
    responsavel?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    solicitante?: SortOrder
    descricao?: SortOrder
    setor?: SortOrder
    solucao?: SortOrder
    status?: SortOrder
    tombamentoComputador?: SortOrder
    responsavel?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    solicitante?: SortOrder
    descricao?: SortOrder
    setor?: SortOrder
    solucao?: SortOrder
    status?: SortOrder
    tombamentoComputador?: SortOrder
    responsavel?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderCreateNestedManyWithoutComputadorInput = {
    create?: XOR<OrderCreateWithoutComputadorInput, OrderUncheckedCreateWithoutComputadorInput> | OrderCreateWithoutComputadorInput[] | OrderUncheckedCreateWithoutComputadorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutComputadorInput | OrderCreateOrConnectWithoutComputadorInput[]
    createMany?: OrderCreateManyComputadorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutComputadorInput = {
    create?: XOR<OrderCreateWithoutComputadorInput, OrderUncheckedCreateWithoutComputadorInput> | OrderCreateWithoutComputadorInput[] | OrderUncheckedCreateWithoutComputadorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutComputadorInput | OrderCreateOrConnectWithoutComputadorInput[]
    createMany?: OrderCreateManyComputadorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutComputadorNestedInput = {
    create?: XOR<OrderCreateWithoutComputadorInput, OrderUncheckedCreateWithoutComputadorInput> | OrderCreateWithoutComputadorInput[] | OrderUncheckedCreateWithoutComputadorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutComputadorInput | OrderCreateOrConnectWithoutComputadorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutComputadorInput | OrderUpsertWithWhereUniqueWithoutComputadorInput[]
    createMany?: OrderCreateManyComputadorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutComputadorInput | OrderUpdateWithWhereUniqueWithoutComputadorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutComputadorInput | OrderUpdateManyWithWhereWithoutComputadorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutComputadorNestedInput = {
    create?: XOR<OrderCreateWithoutComputadorInput, OrderUncheckedCreateWithoutComputadorInput> | OrderCreateWithoutComputadorInput[] | OrderUncheckedCreateWithoutComputadorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutComputadorInput | OrderCreateOrConnectWithoutComputadorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutComputadorInput | OrderUpsertWithWhereUniqueWithoutComputadorInput[]
    createMany?: OrderCreateManyComputadorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutComputadorInput | OrderUpdateWithWhereUniqueWithoutComputadorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutComputadorInput | OrderUpdateManyWithWhereWithoutComputadorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ComputerCreateNestedOneWithoutChamadoInput = {
    create?: XOR<ComputerCreateWithoutChamadoInput, ComputerUncheckedCreateWithoutChamadoInput>
    connectOrCreate?: ComputerCreateOrConnectWithoutChamadoInput
    connect?: ComputerWhereUniqueInput
  }

  export type ComputerUpdateOneWithoutChamadoNestedInput = {
    create?: XOR<ComputerCreateWithoutChamadoInput, ComputerUncheckedCreateWithoutChamadoInput>
    connectOrCreate?: ComputerCreateOrConnectWithoutChamadoInput
    upsert?: ComputerUpsertWithoutChamadoInput
    disconnect?: ComputerWhereInput | boolean
    delete?: ComputerWhereInput | boolean
    connect?: ComputerWhereUniqueInput
    update?: XOR<XOR<ComputerUpdateToOneWithWhereWithoutChamadoInput, ComputerUpdateWithoutChamadoInput>, ComputerUncheckedUpdateWithoutChamadoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrderCreateWithoutComputadorInput = {
    tipo: string
    solicitante: string
    descricao?: string | null
    setor: string
    solucao?: string | null
    status?: number
    responsavel?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type OrderUncheckedCreateWithoutComputadorInput = {
    id?: number
    tipo: string
    solicitante: string
    descricao?: string | null
    setor: string
    solucao?: string | null
    status?: number
    responsavel?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type OrderCreateOrConnectWithoutComputadorInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutComputadorInput, OrderUncheckedCreateWithoutComputadorInput>
  }

  export type OrderCreateManyComputadorInputEnvelope = {
    data: OrderCreateManyComputadorInput | OrderCreateManyComputadorInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutComputadorInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutComputadorInput, OrderUncheckedUpdateWithoutComputadorInput>
    create: XOR<OrderCreateWithoutComputadorInput, OrderUncheckedCreateWithoutComputadorInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutComputadorInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutComputadorInput, OrderUncheckedUpdateWithoutComputadorInput>
  }

  export type OrderUpdateManyWithWhereWithoutComputadorInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutComputadorInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    tipo?: StringFilter<"Order"> | string
    solicitante?: StringFilter<"Order"> | string
    descricao?: StringNullableFilter<"Order"> | string | null
    setor?: StringFilter<"Order"> | string
    solucao?: StringNullableFilter<"Order"> | string | null
    status?: IntFilter<"Order"> | number
    tombamentoComputador?: StringNullableFilter<"Order"> | string | null
    responsavel?: StringNullableFilter<"Order"> | string | null
    criadoEm?: DateTimeFilter<"Order"> | Date | string
    atualizadoEm?: DateTimeFilter<"Order"> | Date | string
  }

  export type ComputerCreateWithoutChamadoInput = {
    tombamento: string
    marca: string
    gpu: string
    sistema_operacional: string
    placa_video: string
    ram: string
    memoria: string
    tipo_hd: string
    volume_hd: string
    tipo: string
    nome_colaborador?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComputerUncheckedCreateWithoutChamadoInput = {
    id?: number
    tombamento: string
    marca: string
    gpu: string
    sistema_operacional: string
    placa_video: string
    ram: string
    memoria: string
    tipo_hd: string
    volume_hd: string
    tipo: string
    nome_colaborador?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComputerCreateOrConnectWithoutChamadoInput = {
    where: ComputerWhereUniqueInput
    create: XOR<ComputerCreateWithoutChamadoInput, ComputerUncheckedCreateWithoutChamadoInput>
  }

  export type ComputerUpsertWithoutChamadoInput = {
    update: XOR<ComputerUpdateWithoutChamadoInput, ComputerUncheckedUpdateWithoutChamadoInput>
    create: XOR<ComputerCreateWithoutChamadoInput, ComputerUncheckedCreateWithoutChamadoInput>
    where?: ComputerWhereInput
  }

  export type ComputerUpdateToOneWithWhereWithoutChamadoInput = {
    where?: ComputerWhereInput
    data: XOR<ComputerUpdateWithoutChamadoInput, ComputerUncheckedUpdateWithoutChamadoInput>
  }

  export type ComputerUpdateWithoutChamadoInput = {
    tombamento?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    sistema_operacional?: StringFieldUpdateOperationsInput | string
    placa_video?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    memoria?: StringFieldUpdateOperationsInput | string
    tipo_hd?: StringFieldUpdateOperationsInput | string
    volume_hd?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome_colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComputerUncheckedUpdateWithoutChamadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tombamento?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    gpu?: StringFieldUpdateOperationsInput | string
    sistema_operacional?: StringFieldUpdateOperationsInput | string
    placa_video?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    memoria?: StringFieldUpdateOperationsInput | string
    tipo_hd?: StringFieldUpdateOperationsInput | string
    volume_hd?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome_colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyComputadorInput = {
    id?: number
    tipo: string
    solicitante: string
    descricao?: string | null
    setor: string
    solucao?: string | null
    status?: number
    responsavel?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type OrderUpdateWithoutComputadorInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    solicitante?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: StringFieldUpdateOperationsInput | string
    solucao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutComputadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    solicitante?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: StringFieldUpdateOperationsInput | string
    solucao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutComputadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    solicitante?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    setor?: StringFieldUpdateOperationsInput | string
    solucao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ComputerCountOutputTypeDefaultArgs instead
     */
    export type ComputerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ComputerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollaboratorDefaultArgs instead
     */
    export type CollaboratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollaboratorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ComputerDefaultArgs instead
     */
    export type ComputerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ComputerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
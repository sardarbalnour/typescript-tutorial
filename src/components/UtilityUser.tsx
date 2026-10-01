type User = {
  id: number;
  username: string;
  role: "member" | "admin" | "contributer";
  email: string;
  city: string;
  phone: number;
  value: string | null | undefined;
};

type UpdateUser = Partial<User>;
const updatedUser: UpdateUser = { phone: 9055125636 };
// type UpdateUser = Required<User>;
// type UpdateUser = Readonly<User>;
// type UpdateUser = Omit<User, "role" | "city">;
// type UpdateUser = Pick<User, "role" | "city">;
// type UpdateRole = Exclude<User["role"], "member">;
// type UpdateRole = Extract<User["role"], "member" | "admin">;
// type CleanValue = NonNullable<User["value"]>;

function UtilityUser() {
  return <div>{updatedUser.phone}</div>;
}

export default UtilityUser;

// Partial<User> is a TypeScript utility type that makes all properties of the User type optional.
// This means that when you create an object of type UpdateUser,
// you can include any combination of the properties defined in the User type,
// or none at all. For example,
// you could create an UpdateUser object with just the username and email,
// or with only the id property, or even an empty object.
// This is useful for scenarios where you want to update only certain fields
// of a user without needing to provide all the information.

// Required<User> is another TypeScript utility type that makes all properties of the User type required.
// This means that when you create an object of type UpdateUser,
// you must include all the properties defined in the User type.
// For example, you would need to provide values for id, username, role, email, city, and phone.
// This is useful for scenarios where you want to ensure that all user information is provided
// and no fields are left out.

// Readonly<User> is a TypeScript utility type that makes all properties of the User type read-only.
// This means that once an object of type UpdateUser is created, you cannot modify any of its properties.
// For example, if you create an UpdateUser object with specific values for id, username, role, email, city, and phone,
// you cannot change those values later in your code.
// This is useful for scenarios where you want to ensure that user information remains immutable after it has been set,
// preventing accidental changes to the data.

// Omit<User, "role" | "city"> is a TypeScript utility type that creates a new type by excluding specific properties from the User type.
// In this case, the UpdateUser type will have all the properties of the User type except for role and city.
// This means that when you create an object of type UpdateUser, you can include id, username, email, and phone,
// but you cannot include role or city. This is useful for scenarios where you want to update user information
// but do not want to allow changes to certain fields, such as role and city,
// which may be managed by the system or require special permissions.

// Pick<User, "role" | "city"> is a TypeScript utility type that creates a new type by selecting specific properties from the User type.
// In this case, the UpdateUser type will only have the role and city properties from the User type.
// This means that when you create an object of type UpdateUser, you can only include values for role and city,
// and you cannot include any other properties from the User type. This is useful for scenarios where you want to update
// only specific fields of a user, such as their role and city, while leaving other information unchanged.

// Exclude<User["role"], "member"> is a TypeScript utility type that creates a new type
// by excluding specific values from a union type.
// In this case, the UpdateRole type will have all the possible values of the role property from the User type,
// except for "member". This means that when you create an object of type UpdateRole, you can only use "admin" or "contributer"
// as valid values for the role property. This is useful for scenarios where you want to restrict certain roles
// from being assigned to a user, such as preventing users from being assigned the "member" role in certain contexts.

// Extract<User["role"], "member" | "admin"> is a TypeScript utility type that creates a new type
// by extracting specific values from a union type. In this case, the UpdateRole type will have only the values
// "member" and "admin" from the role property of the User type. This means that when you create an object of type UpdateRole,
// you can only use "member" or "admin" as valid values for the role property, and "contributer" will not be allowed.

// NonNullable<User["value"]> is a TypeScript utility type that creates a new type
// by excluding null and undefined from the value property of the User type.
// In this case, the CleanValue type will only allow string values for the value property,
// and you cannot assign null or undefined to it. This is useful for scenarios where you want to ensure
// that a certain property always has a valid value and cannot be left empty or uninitialized.

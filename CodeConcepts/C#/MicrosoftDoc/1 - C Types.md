# C# types and members

-   Article
-   03/18/2022
-   3 contributors

Feedback

As an object-oriented language, C# supports the concepts of encapsulation, inheritance, and polymorphism. A class may inherit directly from one parent class, and it may implement any number of interfaces. Methods that override virtual methods in a parent class require the `override` keyword as a way to avoid accidental redefinition. In C#, a struct is like a lightweight class; it's a stack-allocated type that can implement interfaces but doesn't support inheritance. C# provides `record class` and `record struct` types, which are types whose purpose is primarily storing data values.

[](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#classes-and-objects)

## Classes and objects

_Classes_ are the most fundamental of C#'s types. A class is a data structure that combines state (fields) and actions (methods and other function members) in a single unit. A class provides a definition for _instances_ of the class, also known as _objects_. Classes support _inheritance_ and _polymorphism_, mechanisms whereby _derived classes_ can extend and specialize _base classes_.

New classes are created using class declarations. A class declaration starts with a header. The header specifies:

-   The attributes and modifiers of the class
-   The name of the class
-   The base class (when inheriting from a [base class](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#base-classes))
-   The interfaces implemented by the class.

The header is followed by the class body, which consists of a list of member declarations written between the delimiters `{` and `}`.

The following code shows a declaration of a simple class named `Point`:

C#Copy

```
public class Point
{
    public int X { get; }
    public int Y { get; }
    
    public Point(int x, int y) => (X, Y) = (x, y);
}
```

Instances of classes are created using the `new` operator, which allocates memory for a new instance, invokes a constructor to initialize the instance, and returns a reference to the instance. The following statements create two `Point` objects and store references to those objects in two variables:

C#Copy

```
var p1 = new Point(0, 0);
var p2 = new Point(10, 20);
```

The memory occupied by an object is automatically reclaimed when the object is no longer reachable. It's not necessary or possible to explicitly deallocate objects in C#.

[](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#type-parameters)

### Type parameters

Generic classes define [_**type parameters**_](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics). Type parameters are a list of type parameter names enclosed in angle brackets. Type parameters follow the class name. The type parameters can then be used in the body of the class declarations to define the members of the class. In the following example, the type parameters of `Pair` are `TFirst` and `TSecond`:

C#Copy

```
public class Pair<TFirst, TSecond>
{
    public TFirst First { get; }
    public TSecond Second { get; }
    
    public Pair(TFirst first, TSecond second) => 
        (First, Second) = (first, second);
}
```

A class type that is declared to take type parameters is called a _generic class type_. Struct, interface, and delegate types can also be generic. When the generic class is used, type arguments must be provided for each of the type parameters:

C#Copy

```
var pair = new Pair<int, string>(1, "two");
int i = pair.First;     //TFirst int
string s = pair.Second; //TSecond string
```

A generic type with type arguments provided, like `Pair<int,string>` above, is called a _constructed type_.

[](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#base-classes)

### Base classes

A class declaration may specify a base class. Follow the class name and type parameters with a colon and the name of the base class. Omitting a base class specification is the same as deriving from type `object`. In the following example, the base class of `Point3D` is `Point`. From the first example, the base class of `Point` is `object`:

C#Copy

```
public class Point3D : Point
{
    public int Z { get; set; }
    
    public Point3D(int x, int y, int z) : base(x, y)
    {
        Z = z;
    }
}
```

A class inherits the members of its base class. Inheritance means that a class implicitly contains almost all members of its base class. A class doesn't inherit the instance and static constructors, and the finalizer. A derived class can add new members to those members it inherits, but it can't remove the definition of an inherited member. In the previous example, `Point3D` inherits the `X` and `Y` members from `Point`, and every `Point3D` instance contains three properties, `X`, `Y`, and `Z`.

An implicit conversion exists from a class type to any of its base class types. A variable of a class type can reference an instance of that class or an instance of any derived class. For example, given the previous class declarations, a variable of type `Point` can reference either a `Point` or a `Point3D`:

C#Copy

```
Point a = new(10, 20);
Point b = new Point3D(10, 20, 30);
```

[](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#structs)

## Structs

Classes define types that support inheritance and polymorphism. They enable you to create sophisticated behaviors based on hierarchies of derived classes. By contrast, [_**struct**_](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct) types are simpler types whose primary purpose is to store data values. Structs can't declare a base type; they implicitly derive from [System.ValueType](https://learn.microsoft.com/en-us/dotnet/api/system.valuetype). You can't derive other `struct` types from a `struct` type. They're implicitly sealed.

C#Copy

```
public struct Point
{
    public double X { get; }
    public double Y { get; }
    
    public Point(double x, double y) => (X, Y) = (x, y);
}
```

[](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#interfaces)

## Interfaces

An [_**interface**_](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces) defines a contract that can be implemented by classes and structs. You define an _interface_ to declare capabilities that are shared among distinct types. For example, the [System.Collections.Generic.IEnumerable<T>](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1) interface defines a consistent way to traverse all the items in a collection, such as an array. An interface can contain methods, properties, events, and indexers. An interface typically doesn't provide implementations of the members it defines—it merely specifies the members that must be supplied by classes or structs that implement the interface.

Interfaces may employ _**multiple inheritance**_. In the following example, the interface `IComboBox` inherits from both `ITextBox` and `IListBox`.

C#Copy

```
interface IControl
{
    void Paint();
}

interface ITextBox : IControl
{
    void SetText(string text);
}

interface IListBox : IControl
{
    void SetItems(string[] items);
}

interface IComboBox : ITextBox, IListBox { }
```

Classes and structs can implement multiple interfaces. In the following example, the class `EditBox` implements both `IControl` and `IDataBound`.

C#Copy

```
interface IDataBound
{
    void Bind(Binder b);
}

public class EditBox : IControl, IDataBound
{
    public void Paint() { }
    public void Bind(Binder b) { }
}
```

When a class or struct implements a particular interface, instances of that class or struct can be implicitly converted to that interface type. For example

C#Copy

```
EditBox editBox = new();
IControl control = editBox;
IDataBound dataBound = editBox;
```

[](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#enums)

## Enums

An [_**Enum**_](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum) type defines a set of constant values. The following `enum` declares constants that define different root vegetables:

C#Copy

```
public enum SomeRootVegetable
{
    HorseRadish,
    Radish,
    Turnip
}
```

You can also define an `enum` to be used in combination as flags. The following declaration declares a set of flags for the four seasons. Any combination of the seasons may be applied, including an `All` value that includes all seasons:

C#Copy

```
[Flags]
public enum Seasons
{
    None = 0,
    Summer = 1,
    Autumn = 2,
    Winter = 4,
    Spring = 8,
    All = Summer | Autumn | Winter | Spring
}
```

The following example shows declarations of both the preceding enums:

C#Copy

```
var turnip = SomeRootVegetable.Turnip;

var spring = Seasons.Spring;
var startingOnEquinox = Seasons.Spring | Seasons.Autumn;
var theYear = Seasons.All;
```

[](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#nullable-types)

## Nullable types

Variables of any type may be declared as _**non-nullable**_ or _**nullable**_. A nullable variable can hold an additional `null` value, indicating no value. Nullable Value types (structs or enums) are represented by [System.Nullable<T>](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1). Non-nullable and Nullable Reference types are both represented by the underlying reference type. The distinction is represented by metadata read by the compiler and some libraries. The compiler provides warnings when nullable references are dereferenced without first checking their value against `null`. The compiler also provides warnings when non-nullable references are assigned a value that may be `null`. The following example declares a _**nullable int**_, initializing it to `null`. Then, it sets the value to `5`. It demonstrates the same concept with a _**nullable string**_. For more information, see [nullable value types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types) and [nullable reference types](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references).

C#Copy

```
int? optionalInt = default; 
optionalInt = 5;
string? optionalText = default;
optionalText = "Hello World.";
```

[](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types#tuples)

## Tuples

C# supports [_**tuples**_](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples), which provides concise syntax to group multiple data elements in a lightweight data structure. You instantiate a tuple by declaring the types and names of the members between `(` and `)`, as shown in the following example:

C#Copy

```
(double Sum, int Count) t2 = (4.5, 3);
Console.WriteLine($"Sum of {t2.Count} elements is {t2.Sum}.");
//Output:
//Sum of 3 elements is 4.5.
```

Tuples provide an alternative for data structure with multiple members, without using the building blocks described in the next article.
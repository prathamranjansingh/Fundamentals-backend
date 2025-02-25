## When to Use `let` Over `var`

### ✅ Use `let` because:
- It provides block scope, reducing unintended bugs.
- It prevents accidental re-declarations.
- It avoids issues with hoisting and TDZ.

### ⚠️ Avoid `var` unless working with legacy JavaScript code.

## JavaScript Statements

1. **Variable Declarations** (`var`, `let`, `const`)
2. **Assignment Statement**
3. **Expression Statements**
4. **Control Flow Statements**
    - Examples include `if`, `else`, `switch`, `while`, and `for` loops.
5. **Function Declarations**
6. **Return Statement**
7. **Throw Statement**
8. **Try…Catch Statement**
9. **Break and Continue Statements**

## JavaScript Events

JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.

### Event Types

JavaScript supports a variety of event types. Common categories include:

- **Mouse Events**: `click`, `dblclick`, `mousemove`, `mouseover`, `mouseout`
- **Keyboard Events**: `keydown`, `keypress`, `keyup`
- **Form Events**: `submit`, `change`, `focus`, `blur`
- **Window Events**: `load`, `resize`, `scroll`

## JavaScript Variables

```javascript
var a = 10;     // Old style
let b = 20;     // Preferred for non-const
const c = 30;   // Preferred for const (cannot be changed)

console.log(a);
console.log(b);
console.log(c);
```

### Rules for Naming Variables

When naming variables in JavaScript, follow these rules:

- Variable names must begin with a letter, underscore (_), or dollar sign ($).
- Subsequent characters can be letters, numbers, underscores, or dollar signs.
- Variable names are case-sensitive (e.g., `age` and `Age` are different variables).
- Reserved keywords (like `function`, `class`, `return`, etc.) cannot be used as variable names.

### Variable Shadowing in JavaScript

Variable shadowing occurs when a variable declared within a certain scope (e.g., a function or block) has the same name as a variable in an outer scope. The inner variable overrides the outer variable within its scope.

```javascript
let n = 10; // Global scope

function gfg() {
    let n = 20;  // Shadows the global 'n' inside this function
    console.log(n);  // Output: 20
}

gfg();
console.log(n);  // Output: 10 (global 'n' remains unchanged)
```

**Output:**
```
20
10
```


Variable Scope in JavaScript
1. Global Scope
2. Function Scope
3. Block Scope


JavaScript Hoisting
Hoisting refers to the behaviour where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, let, const, or function expressions.

Hoisting applies to variable and function declarations.
Initializations are not hoisted, they are only declarations.
‘var’ variables are hoisted with undefined, while ‘let’ and ‘const’ are hoisted but remain in the Temporal Dead Zone until initialized.

Temporal Dead Zone (TDZ)
The Temporal Dead Zone (TDZ) is a critical concept in JavaScript hoisting. It refers to the period between the entering of a scope (such as a function or block) and the actual initialization of a variable declared with let or const. During this time, any reference to the variable before its initialization will throw a ReferenceError.
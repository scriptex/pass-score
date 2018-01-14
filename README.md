# Pass Score

Get the score of your password as a number.

The number can be between 0 and the length of the provided array containing the conditions against which the password will be tested.

## Install

`npm i pass-score`

or

`yarn add pass-score`

## Usage

With default conditions:

```
import passScore from 'pass-score';

// Returns a number between 0 and 4
const score = passScore('Your-passW0rd-Str1ng');
```

With custom conditions

```
import passScore from 'pass-score';

// Returns a number between 0 and 2
const score = passScore('Your-passW0rd-Str1ng', [
  /[\W_,!?@*\(\)]/, // Special characters
  /^.{8}/ // At least 8 characters
]);
```

## Arguments

The function accepts two arguments:

1. The first is the password string. It is required.
2. The second is an array of regular expressions. It is optional. The default array is shown below.

## Conditions

The predefined array with conditions holds the following:

1. `/\d/` - The password should contain at least on digit
2. `/[A-Z]/`, - The password should contain at least one uppercase letter
3. `/[\W_,!?@*\(\)]/` - The password should contain at least one special character
4. `/^.{8}/` - The password should be at least 8 characters long

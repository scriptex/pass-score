[![Travis CI](https://travis-ci.com/scriptex/pass-score.svg?branch=master)](https://travis-ci.com/scriptex/pass-score)
[![Github Build](https://github.com/scriptex/pass-score/workflows/Build/badge.svg)](https://github.com/scriptex/pass-score/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/pass-score/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/pass-score&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-pass-score-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/pass-score/badge)](https://www.codefactor.io/repository/github/scriptex/pass-score)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/pass-score/README.md?pixel)](https://github.com/scriptex/pass-score/)

# Pass Score

> Get the score of your password as a number.

> The number can be between 0 and the length of the provided array containing the conditions against which the password will be tested.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/pass-score?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/pass-score?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/pass-score?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/pass-score)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/pass-score?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/pass-score?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/pass-score?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/pass-score?style=plastic)

## Install

```sh
npm i pass-score
```

or

```sh
yarn add pass-score
```

## Usage

First import the function

```javascript
import passScore from 'pass-score';

// or

import { passScore } from 'pass-score';
```

Then use it with the default patterns:

```javascript
// Returns a number between 0 and 4
const score = passScore('Your-passW0rd-Str1ng');
```

Or with custom patterns:

```javascript
// Returns a number between 0 and 2
const score = passScore('Your-passW0rd-Str1ng', [
	/[\W_,!?@*\(\)]/, // Special characters
	/^.{8}/ // At least 8 characters
]);
```

## Arguments

The function accepts two arguments:

1.  The first is the password string. It is required.
2.  The second is an array of regular expressions. It is optional. The default array is shown below.

## Conditions

The predefined array with conditions contains the following:

1.  `/\d/` - The password should contain at least on digit
2.  `/[A-Z]/`, - The password should contain at least one uppercase letter
3.  `/[\W_,!?@*\(\)]/` - The password should contain at least one special character
4.  `/^.{8}/` - The password should be at least 8 characters long

## Bonus

The `pass-score` module provides a native web component. In order to use it you can `import` it:

```javascript
import 'pass-score/component';
```

and then use it as shown in the [demo](https://pass-score.atanas.info).

The component accepts one attribute `patterns` which is a comma separated list of regular expressions against which the password will be matched.

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>

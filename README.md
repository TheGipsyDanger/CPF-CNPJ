<p align="center" >
  <p align="center" >
    <a href="">
      <img alt="react-native-gifted-chat" src="https://user-images.githubusercontent.com/22872282/77975177-b34a2900-72cf-11ea-845d-6e40ab6718d4.png" />
    </a>
  </p>
</p>

<h3 align="center">
  Documents simple validator
</h3>
<p align="center">
  A solution to check documents in your project.
</p>

[![Build Status](https://travis-ci.org/fnando/cpf.svg?branch=master)](https://travis-ci.org/fnando/cpf)
![License: MIT](https://img.shields.io/npm/l/@fnando/cpf.svg)

```
yarn add vindicce-validator
```

## Usage

```js

const { cpf, cnpj } = require("vindicce-validator");
//
import { cpf, cnpj } from "vindicce-validator";

// Validate CPF
cpf.isvalid("815.780.140-00");  // valid
cpf.isvalid("81578014000");     // valid
cpf.isvalid("815.780.140-000"); // invalid
cpf.isvalid("815.780.140-0");   // invalid
cpf.isvalid("000.000.000-00");  // invalid

// Validate CNPJ
cnpj.isvalid("23.372.648/0001-94");  // valid
cnpj.isvalid("23372648000194");      // valid
cnpj.isvalid("23.372.648/0001-940"); // invalid
cnpj.isvalid("23.372.648/0001-9");   // invalid
cnpj.isvalid("00.000.000/0000-00");  // invalid

```

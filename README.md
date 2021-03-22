# Getting Started with react-jsonschema-form

[react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/quickstart/) is meant to automatically generate a React form based on a JSON Schema. 

Usage [react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/usage/objects/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

After build:

### `yarn global add serve`
  
### `serve -s build`

## Homework:

Необходимо написать приложение (React) для генерации форм по заданной JOSN конфигурации.

Приложение состоит из двух вкладок:

Config – для ввода конфигурации формы в формате JSON;

Result – для отображения формы.

Приложение должно позволять генерировать формы с любым кол-вом полей. 
Поля могут быть следующих типов:
- Числовые (numberfield)
- Строковые (textfield)
- Многострочный текст (textarea)
- Логический тип (checkbox)
- Дата (dateflied)
- Перечисление (radio buttons)

В документации [react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/usage/objects/) можно посмотреть как конфигурировать нужные поля(TO-DO \#1).

Так же приложение должно иметь возможность задавать заголовок формы, кол-во и текст кнопок(TO-DO \#2), например (Ok, Cancel, Apply)

### TO-DO

- \#1 Move from a part of documentation about the field's types to README.md
- \#2 Add support of the buttons configuration

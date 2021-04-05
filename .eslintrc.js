module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true
    },
    "extends": [
        'plugin:jest/recommended',
        'airbnb-base'
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaVersion": 6 // or 7,8,9
    },
    "rules": {
        'no-console': 0,
        'import/extensions': 0
    }
};

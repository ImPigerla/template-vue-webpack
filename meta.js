module.exports = {
    "helpers": {},
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "project-name"
        }
    },
    "filters": {
        "src/i18n/**/*": "i18n",
        "src/views/login.vue": "login",
        "src/images/login.jpg": "login"
    },
    "skipInterpolation": [
        "src/**/*.vue",
        "*index.html"
    ],
    "completeMessage": "开始项目:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
};
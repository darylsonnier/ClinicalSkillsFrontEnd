@echo off
rmdir /s /q build
npm run build
serve -s build
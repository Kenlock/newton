# School Website

This is a simple school website built using Vue and Laravel with admin page for page management. 

## Installation

Install Laravel vendor
```
composer install
```
Install Vue module
```
npm install
```

## Usage

Copy .env.example & generate .env key
```
cp .env.example .env
php artisan key:generate
```
Create database called 
```
laravue_school_website
```

Migrate database table
```
php artisan migrate
```

Start laravel server
```
php artisan serve
```

Start Vue
```
npm run watch
```

## Access Website
Development server started at 
```http://localhost:8000```


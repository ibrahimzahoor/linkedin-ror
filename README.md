# Linked In Clone using Rails 3.2.3 & Ruby 1.9.3
 
## Overview

Rails Bootstrap Base App was made as a quick way to DRY up the development process for projects needing some basic web application functionality. It includes a basic design, authentication, authorization and some seed data. It also started as an attempt to integrate Twitter's Bootstrap HTML5 kit with Rails. The goal would be to eventually extract the entire project as a gem.

This applicatoin is developed by [Hassan Akram](https://github.com/hassan akram) and [Ibrahim Zahoor](https://github.com/ibrahimzahoor). It includes selected features of [LinkedIn](https://linkedin.com). We used a variety of gems for different tasks (Refference is given below).

## Features

* Layout - Twitter's Bootstrap, [twitter/bootstrap](https://github.com/twitter/bootstrap)
* Authentication - Devise, [platformatec/devise](https://github.com/plataformatec/devise)
* Authentication Token - uses the Devise auth token feature, for API access
* Friendship Model - amistad [Amistad Gem](https://github.com/raw1z/amistad)
* Facebook Authentication - using [omniauth](https://github.com/intridea/omniauth)
* Heroku Deployement - [Heroku gem](https://github.com/heroku/heroku)


## Installation

* Clone the git repository
* Create your database
* Update the database.yml with correct credentials
* rake db:migrate
* rake db:seed
* rails s



##    License

Copyright (c) 2014 Ibrahim Zahoor, Hassan Akram, Bilal Ali

  My HealthFile is licensed under the [MIT license.](http://opensource.org/licenses/MIT)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.


## What Time is it?

This is a Django web application for a home page for a course about time zones and all related
aspects.

### Running the application in a Docker Container

We can run this application in a docker container by using Docker-Compose. To do so, run the
following command in the command line from anywhere within the project:

`docker-compose up`

Note that it may be necessary to run this with `sudo`. This is assuming you are using linux.

### Running from Django

This can also be run as a simple Django application. However, we must alter the databseto do so,
as it is currently set up to work with docker-compose.

In the file, TimeDate/settings.py change the DATABASES to the following

~~~~
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
~~~~

It may be necessary to run `python manage.py migrate` first while located in the folder
containing the file `manage.py`

To run the application, run `python manage.py runserver`

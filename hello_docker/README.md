## Hello Docker 

This is a simple "Hello Docker" python application. When run, the applicatoin should print to the console: "Hello, Docker"

### Building Images

Images are the blueprints for our application which forms the basis of containers. We build the image from the Dockerfile. To do so, run the following from the terminal:

`$ docker build -t image_name .`

You may name the image whatever you like. In the example, I named it "image_name".

### Running the Image

To run the image, enter the following in the terminal:

`docker run image_name`

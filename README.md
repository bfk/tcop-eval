# Tech Code of Practice Evaluation Tool

Use this service to:

- Evaluate a technical platform to determine if it is being developed in accordance with the Technology Code of Practice
- Create a summary of your Code of Practice analysis that can be shared with others or start conversations
- Conduct an internal evaluation of a platform in advance of a Spend Control or other assurance process
- Fully evaluating a programme can take some time, but if you have a solid understanding of the programme and access to documentation, this self-evaluation tool can be completed in about 10 minutes.

## Before you start

You will want to have a good knowledge of the details of the technical platform and probably access to project or commercial documentation about it. You might also choose to conduct this evaluation more interactively, through discussion with people working on procuring or developing the platform.

Assurance teams and others might also use this tool to create a snapshot of their current view of your platform and to provide recommendations for ongoing improvement.

## Prototype kit docs

- [Installation guide for new users (non technical)](https://govuk-prototype-kit.herokuapp.com/docs/install/introduction)
- [Installation guide for developers (technical)](https://govuk-prototype-kit.herokuapp.com/docs/install/developer-install-instructions)

## Docker installation


clone the github repository

```console
$ git clone  git@github.com:bfk/tcop-eval.git
```

build the image:

```console
$ docker build -t tcop-eval .
```

run the container (use -v to mount your local app directory in the container)

```console
$ docker run  --detach --rm -p 3000:3000 --name tcop-eval -v /Users/user/tcop-eval/app:/usr/src/tcop-eval/app tcop-eval:latest
```

access the web app:

http://localhost:3000

stop the container:

```console
$ docker stop tcop-eval
```

Note: you can modify the evaluation questions by editing tcop-eval/app/tcop.json (stop and restart the container to load the changes).

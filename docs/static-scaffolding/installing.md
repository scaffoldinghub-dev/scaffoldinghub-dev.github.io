---
sidebar_position: 1
description: Installing the scaffolding bricks
---

# Installing Scaffolding 🎬

:::info
Scaffolding depends on the [Dart SDK](https://dart.dev/get-dart) being installed on your machine.
:::


Scaffolding depends on a number of [mason](https://docs.brickhub.dev/) bricks that take your parametersand generate the flutter/dart code. 

We will learn about more of these later, for now you just need to know they can all be used from the scaffolding brick 🧱.

To get started lets install mason globally so we get easily use these bricks:

```sh

# 🎯 Install mason from https://pub.dev
dart pub global activate mason_cli

```

You will see something similar to the following if this is sucessful:

```sh
+ archive 3.3.5dencies... 
+ args 2.3.1
+ async 2.10.0
+ checked_yaml 2.0.2
+ cli_completion 0.1.0+1 (0.2.0 available)
+ cli_util 0.3.5
+ collection 1.17.0
+ convert 3.1.1
+ crypto 3.0.2
+ equatable 2.0.5
+ file 6.1.4
+ http 0.13.5
+ http_parser 4.0.2
+ js 0.6.5 (0.6.6 available)
+ json_annotation 4.7.0
+ mason 0.1.0-dev.40
+ mason_api 0.1.0-dev.8
+ mason_cli 0.1.0-dev.42
+ mason_logger 0.2.3
+ meta 1.8.0
+ mustache_template 2.0.0
+ path 1.8.3
+ platform 3.1.0
+ pointycastle 3.6.2
+ pool 1.5.1
+ process 4.2.4
+ pub_semver 2.1.3
+ pub_updater 0.2.3
+ recase 4.1.0
+ source_span 1.9.1
+ stack_trace 1.11.0
+ string_scanner 1.2.0
+ term_glyph 1.2.1
+ typed_data 1.3.1
+ yaml 3.1.1
Building package executables... (1.0s)
Built mason_cli:mason.
Installed executable mason.
Activated mason_cli 0.1.0-dev.42.

```

Now you have mason installed. Let's create the project directory and change to it 

```sh
# ⭐️ Make the directory for your new project 
mkdir static_scaffolding_sample

# Change to the new directory
cd static_scaffolding_sample
```
Now let's initialise mason and add the scaffolding brick.

```sh
mason init
```

You will see something similar to the following. 

```sh
✓ Initializing (21ms)
✓ Getting bricks (23ms)
✓ Generated 1 file(s):
  ~/dev/static_scaffolding_sample/mason.yaml (new)

...
```

This will add the `mason.yaml` file that looks like the following:

```yaml
# Register bricks which can be consumed via the Mason CLI.
# https://github.com/felangel/mason
bricks:
  # Sample Brick
  # Run `mason make hello` to try it out.
  hello: any
  # Bricks can also be imported via git url.
  # Uncomment the following lines to import
  # a brick from a remote git url.
  # widget:
  #   git:
  #     url: https://github.com/felangel/mason.git
  #     path: bricks/widget
```

We will follow the format of the last four lines of `mason.yaml` but remove the comments and the hello example.

The last four lines of `mason.yaml` should now look like:
```yaml
bricks:
  scaffolding:
      git:
        url: https://github.com/sjhorn/mason_bricks
        path: bricks/scaffolding
```

Afterwards you can get the brick by running
```sh
# 💾 get the brick
mason get
```


You could also have run the following from the command line to achieve the same:

```sh
# 🧱 Add scaffolding brick to your mason config
mason add scaffolding --git-url https://github.com/sjhorn/mason_bricks \
    --git-path bricks/scaffolding
```

🎈 Your brick is now installed 

You can confirm where it is cached by running `cat .mason/bricks.json`. 

Let's get onto our initialising our flutter project. 
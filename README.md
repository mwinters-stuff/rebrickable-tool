[![Build Status](https://travis-ci.org/wintersandroid/rebrickable-tool.svg)](https://travis-ci.org/wintersandroid/rebrickable-tool)

![](https://cloud.githubusercontent.com/assets/110953/7877439/6a69d03e-0590-11e5-9fac-c614246606de.png)
## Rebrickable Tool

> A tool for the rebrickable website (www.rebrickable.com) to do some things that it doesn't do/


## Getting Started

To take advantage of Rebrickable Tool you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code.

### Get the code

[Download](https://github.com/polymerelements/rebrickable-tool/releases/latest) and extract Rebrickable Tool to where you want to work. The project comes in two flavours - Light and Full.

**Beginners**: Try Rebrickable Tool Light. This doesn't require any extra dependencies nor knowledge of modern front-end tooling. This option is good for prototyping if you haven't build a Polymer app before.

**Intermediate - Advanced**: Use the full version of Rebrickable Tool. This comes with all the build tools you'll need for testing and productionising your app so it's nice and lean. You'll need to run a few extra commands to install the tools we recommend but it's worth it to make sure your final app is super optimised.

:warning: **Important**: Rebrickable Tool, and Rebrickable Tool Light, both contain dotfiles (files starting with a `.`). If you're copying the contents of the Starter Kit to a new location make sure you bring along these dotfiles as well! On Mac, [enable showing hidden files](http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/), then try extracting/copying Rebrickable Tool again. This time the dotfiles needed should be visible so you can copy them over without issues.

Rob Dodson has a fantastic [PolyCast video](https://www.youtube.com/watch?v=xz-yixRxZN8) available that walks through using Rebrickable Tool. An [end-to-end with Polymer](https://www.youtube.com/watch?v=1f_Tj_JnStA) and Rebrickable Tool talk is also available.

### Install dependencies

#### Quick-start (for experienced users)

With Node.js installed, run the following one liner from the root of your Rebrickable Tool download:

```sh
npm install -g gulp bower && npm install && bower install
```

#### Prerequisites (for everyone)

The full starter kit requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- gulp, a Node.js-based build tool.
- bower, a Node.js-based package manager used to install front-end packages (like Polymer).
- The starter kit gulp build process uses platform specific tools which is handled by node-gyp which is included in node.js. See https://github.com/nodejs/node-gyp/blob/master/README.md for additional platform specific dependencies.

**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

2)  If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3)  Install `gulp` and `bower` globally.

```sh
npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

4)  Install the starter kit's local `npm` and `bower` dependencies.

```sh
cd rebrickable-tool && npm install && bower install
```

This installs the element sets (Paper, Iron, Platinum) and tools the starter kit requires to build and serve apps.

### Development workflow

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

To run tests Java 7 or higher is required. To update Java go to http://www.oracle.com/technetwork/java/javase/downloads/index.html and download ***JDK*** and install it.

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes vulcanization, image, script, stylesheet and HTML optimization and minification.

## Licensing

Like other projects, Rebrickable Tool includes Google license headers at the top of several of our source files. Google's open-source licensing requires that this header be kept in place (sorry!), however we acknowledge that you may need to add your own licensing to files you modify. This can be done by appending your own extensions to these headers.

## Contributing

Rebrickable Tool is a new project and is an ongoing effort by the Web Component community. We welcome your bug reports, PRs for improvements, docs and anything you think would improve the experience for other Polymer developers.

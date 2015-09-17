# coden

coden = vsc(visual studio code) cli for Mac 

- visual studio code（简称vsc）https://code.visualstudio.com/

## Install 

```
[sudo] npm install -g coden
```

## Usage 

当前目录打开vsc编辑器

```
vsc 或 coden
```

当前目录打开vsc编辑器，并打印出具体命令，调试用

```
coden -i
```

在某个目录打开vsc编辑器

```
coden some_dir
```

杀死vsc编辑器的所有进程

```
codek
```
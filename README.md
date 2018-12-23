# git-pro

> git shell 客户端增强

## 安装

```sh
npm install -g git-pro
```

## 使用方法

#### git commit 增强

 带 emoji 选择的 commit 提交

```shell
git-pro commit
```

![git-commit](http://cdn.godd.site/Xnip2018-12-23_22-17-48.jpg)

 暂存文件后在执行带 emoji 选择的 commit 提交

```shell
git-pro commit -a
```

![git-commit-a](http://cdn.godd.site/Xnip2018-12-23_22-20-03.jpg)

当然也可以指定文件,多个文件','分隔

```shell
git-pro commit -a README.md
```

![git-commit-a](http://cdn.godd.site/Xnip2018-12-23_22-21-43.jpg)

> 你可以直接使用 `git-pro` 代替 `git`, 因为除了 `commit` 命令,其他命令只是进行了代理

```shell
git-pro status # 就相当于 git status
```

![git-other](http://cdn.godd.site/Xnip2018-12-23_22-21-18.jpg)

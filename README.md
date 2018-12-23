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

#### custom 自定义

默认的提交选项很多,有时候我们可能不需要这么多,甚至可能需要特殊的提交类型,这时候可以使用自定义功能进行配置

```shell
git-pro custom
```

执行后会在项目根目录下生成`.gitprorc.js`文件

|   参数说明    |  类型  | 说明         |
| :-----------: | :----: | :----------- |
|  commitList   | Object | 提交类型列表 |
| commitMessage | Object | 提交信息     |

##### commitList 配置

| 参数说明 |  类型  | 说明                   |
| :------: | :----: | :--------------------- |
| message  | String | 提交类型选择时提示文字 |
| choices  | Array  | 提交类型类别           |

##### commitMessage 配置

| 参数说明 |  类型  | 说明                   |
| :------: | :----: | :--------------------- |
| message  | String | 提交信息输入时提示文字 |


## TODO 

1. ~~自定义commit类型列表~~
2. 按使用热度排序
3. 历史记录调用
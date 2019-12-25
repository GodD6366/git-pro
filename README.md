# git-pro

> git shell 客户端增强

## 安装

```sh
npm install -g git-pro
```

## 使用方法

#### git commit 增强

 带类型选择的 commit 提交,会向上查找配置文件

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
git-pro custom [-g]
```

执行后会在项目根目录下生成`.gitprorc.js`文件,如果存在`-g`参数,会在用户根目录生成

| 参数说明 |  类型  | 说明                                 |
| :------: | :----: | :----------------------------------- |
|   type   | String | 'emoji' / 'text'                     |
|  types   | Array  | 提交类型自定义列表                   |
|  scopes  | Array  | scope 列表,如果存在,提交时会提供选项 |

##### types 配置

| 参数说明 |  类型  | 说明             |
| :------: | :----: | :--------------- |
|   name   | String | 提交类型提示文字 |
|  value   | Array  | 提交类型值       |

##### messages 配置

| 参数说明 |  类型  | 说明             |
| :------: | :----: | :--------------- |
|   xxx    | String | 不同阶段提示文字 |

## TODO

2. 按使用热度排序
3. 历史记录调用

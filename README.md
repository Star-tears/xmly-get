# xmly-get

## 效果展示

![image-20230219004914343](http://src.star-tears.cn/img-bed/web-202302190049635.png)

![image-20230219005012177](http://src.star-tears.cn/img-bed/web-202302190050274.png)

![image-20230219005311756](http://src.star-tears.cn/img-bed/web-202302190053822.png)

## 安装运行

### docker compose

这边推荐使用docker compose安装运行

```shell
docker compose up -d
```

#### 卸载

```shell
docker compose down
```

#### 停止

```shell
docker compose stop
```

#### 重启

```shell
docker compose restart
```



### docker

```shell
# 构建镜像
docker build -t <镜像名> .
docker run -p 3000:3000 -p 24678:24678 <镜像>
```

### npm

```shell
npm run dev
```



## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

---
title: prisma踩坑
head:
    - - meta
      - name: 'description'
        content: ZheQi-Blog 折七的博客 学习prisma遇到的一些问题
---

# prisma踩坑

## 前言

> [!TIP]
> 该文章为prisma踩坑，记录学习prisma遇到的一些问题。

### prisma mysql 日期同步数据库时间

```prisma
model User {
  id               Int                @id @default(autoincrement())
  name             String             @db.VarChar(255)
  createAt         DateTime           @default(dbgenerated("NOW()")) @db.DateTime
  updateAt         DateTime           @default(dbgenerated("NOW() ON UPDATE NOW()")) @db.Timestamp(0)

  @@map("user")
}
```

### 当prisma文件夹在根目录，并开启`prismaSchemaFolder`在`previewFeatures`当中

此时的文件结构如下：
```shell
.
├── prisma
│   ├── schema
│   │   └── xxx.prisma
│   └── schema.prisma
```

必须指定schema文件夹路径在`package.json`或者命令行，否则无法生成prisma client。

```json
"prisma": {
    "schema": "./prisma"
}
```
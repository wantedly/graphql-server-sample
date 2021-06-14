# GraphQL Server Sample

GraphQL Server のサンプルです。
募集の一覧と ID ごとの募集を取得するクエリが定義されています。

## Getting Started

`yarn start` で `localhost:4000` に GraphQL サーバーを立ち上がります。
`localhost:4000/graphql` にアクセスすると、 GraphQL の Playground を確認できます。

## Queries

以下のクエリが定義されています。

### 募集一覧の取得

```graphql
query {
  projects(keyword: "") {
    id
    title
    whyDescription
    whatDescription
    howDescription
    imageUrlSmall
    imageUrlLarge
    staffs {
      id
      name
      avatarUrl
    }
  }
}
```

キーワードを指定することで、募集のタイトルにマッチする募集を取得することができます。
keyword の指定がない場合は全ての募集を取得します。

### 募集詳細の取得

```graphql
query {
  project(id: "623751") {
    id
    title
    whyDescription
    whatDescription
    howDescription
    imageUrlSmall
    imageUrlLarge
    staffs {
      id
      name
      avatarUrl
    }
  }
}
```

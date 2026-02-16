# Results
1. [`startup time`](#2_c3RhcnR1cCB0aW1l)
    1. [`node-22.22.0`](#3_bm9kZS0yMi4yMi4w)
        1. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        2. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    2. [`node-24.13.0`](#3_bm9kZS0yNC4xMy4w)
        1. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        2. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    3. [`bun-1.3.9`](#3_YnVuLTEuMy45)
        1. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        2. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    4. [`deno-2.5.7`](#3_ZGVuby0yLjUuNw==)
        1. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        2. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    5. [`node-25.6.1`](#3_bm9kZS0yNS42LjE=)
        1. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        2. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    6. [`deno-2.6.9`](#3_ZGVuby0yLjYuOQ==)
        1. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        2. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
2. [`runtime`](#2_cnVudGltZQ==)
    1. [`node-22.22.0`](#3_bm9kZS0yMi4yMi4w)
        1. [`async`](#4_YXN5bmM=)
            1. [`concurrency 1`](#5_Y29uY3VycmVuY3kgMQ==)
            2. [`concurrency 2`](#5_Y29uY3VycmVuY3kgMg==)
            3. [`concurrency 4`](#5_Y29uY3VycmVuY3kgNA==)
            4. [`concurrency 8`](#5_Y29uY3VycmVuY3kgOA==)
            5. [`concurrency 16`](#5_Y29uY3VycmVuY3kgMTY=)
            6. [`concurrency 32`](#5_Y29uY3VycmVuY3kgMzI=)
            7. [`concurrency 64`](#5_Y29uY3VycmVuY3kgNjQ=)
        2. [`decode-uri-component`](#4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=)
            1. [`valid`](#5_dmFsaWQ=)
            2. [`invalid`](#5_aW52YWxpZA==)
        3. [`url-routers`](#4_dXJsLXJvdXRlcnM=)
            1. [`GET "/user"`](#5_R0VUICIvdXNlciI=)
            2. [`GET "/user/comments"`](#5_R0VUICIvdXNlci9jb21tZW50cyI=)
            3. [`GET "/user/avatar"`](#5_R0VUICIvdXNlci9hdmF0YXIi)
            4. [`GET "/user/lookup/username/:username"`](#5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==)
            5. [`GET "/user/lookup/email/:email"`](#5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==)
            6. [`GET "/event/:id"`](#5_R0VUICIvZXZlbnQvOmlkIg==)
            7. [`GET "/event/:id/comments"`](#5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==)
            8. [`POST "/event/:id/comment"`](#5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==)
            9. [`GET "/map/:location/event"`](#5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=)
            10. [`GET "/status"`](#5_R0VUICIvc3RhdHVzIg==)
            11. [`GET "/very/deeply/nested/route/hello/there"`](#5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==)
            12. [`GET "/static/*"`](#5_R0VUICIvc3RhdGljLyoi)
        4. [`validators`](#4_dmFsaWRhdG9ycw==)
            1. [`assert-simple`](#5_YXNzZXJ0LXNpbXBsZQ==)
    2. [`node-24.13.0`](#3_bm9kZS0yNC4xMy4w)
        1. [`async`](#4_YXN5bmM=)
            1. [`concurrency 1`](#5_Y29uY3VycmVuY3kgMQ==)
            2. [`concurrency 2`](#5_Y29uY3VycmVuY3kgMg==)
            3. [`concurrency 4`](#5_Y29uY3VycmVuY3kgNA==)
            4. [`concurrency 8`](#5_Y29uY3VycmVuY3kgOA==)
            5. [`concurrency 16`](#5_Y29uY3VycmVuY3kgMTY=)
            6. [`concurrency 32`](#5_Y29uY3VycmVuY3kgMzI=)
            7. [`concurrency 64`](#5_Y29uY3VycmVuY3kgNjQ=)
        2. [`decode-uri-component`](#4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=)
            1. [`valid`](#5_dmFsaWQ=)
            2. [`invalid`](#5_aW52YWxpZA==)
        3. [`url-routers`](#4_dXJsLXJvdXRlcnM=)
            1. [`GET "/user"`](#5_R0VUICIvdXNlciI=)
            2. [`GET "/user/comments"`](#5_R0VUICIvdXNlci9jb21tZW50cyI=)
            3. [`GET "/user/avatar"`](#5_R0VUICIvdXNlci9hdmF0YXIi)
            4. [`GET "/user/lookup/username/:username"`](#5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==)
            5. [`GET "/user/lookup/email/:email"`](#5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==)
            6. [`GET "/event/:id"`](#5_R0VUICIvZXZlbnQvOmlkIg==)
            7. [`GET "/event/:id/comments"`](#5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==)
            8. [`POST "/event/:id/comment"`](#5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==)
            9. [`GET "/map/:location/event"`](#5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=)
            10. [`GET "/status"`](#5_R0VUICIvc3RhdHVzIg==)
            11. [`GET "/very/deeply/nested/route/hello/there"`](#5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==)
            12. [`GET "/static/*"`](#5_R0VUICIvc3RhdGljLyoi)
        4. [`validators`](#4_dmFsaWRhdG9ycw==)
            1. [`assert-simple`](#5_YXNzZXJ0LXNpbXBsZQ==)
    3. [`bun-1.3.9`](#3_YnVuLTEuMy45)
        1. [`async`](#4_YXN5bmM=)
            1. [`concurrency 1`](#5_Y29uY3VycmVuY3kgMQ==)
            2. [`concurrency 2`](#5_Y29uY3VycmVuY3kgMg==)
            3. [`concurrency 4`](#5_Y29uY3VycmVuY3kgNA==)
            4. [`concurrency 8`](#5_Y29uY3VycmVuY3kgOA==)
            5. [`concurrency 16`](#5_Y29uY3VycmVuY3kgMTY=)
            6. [`concurrency 32`](#5_Y29uY3VycmVuY3kgMzI=)
            7. [`concurrency 64`](#5_Y29uY3VycmVuY3kgNjQ=)
        2. [`decode-uri-component`](#4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=)
            1. [`valid`](#5_dmFsaWQ=)
            2. [`invalid`](#5_aW52YWxpZA==)
        3. [`url-routers`](#4_dXJsLXJvdXRlcnM=)
            1. [`GET "/user"`](#5_R0VUICIvdXNlciI=)
            2. [`GET "/user/comments"`](#5_R0VUICIvdXNlci9jb21tZW50cyI=)
            3. [`GET "/user/avatar"`](#5_R0VUICIvdXNlci9hdmF0YXIi)
            4. [`GET "/user/lookup/username/:username"`](#5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==)
            5. [`GET "/user/lookup/email/:email"`](#5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==)
            6. [`GET "/event/:id"`](#5_R0VUICIvZXZlbnQvOmlkIg==)
            7. [`GET "/event/:id/comments"`](#5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==)
            8. [`POST "/event/:id/comment"`](#5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==)
            9. [`GET "/map/:location/event"`](#5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=)
            10. [`GET "/status"`](#5_R0VUICIvc3RhdHVzIg==)
            11. [`GET "/very/deeply/nested/route/hello/there"`](#5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==)
            12. [`GET "/static/*"`](#5_R0VUICIvc3RhdGljLyoi)
        4. [`validators`](#4_dmFsaWRhdG9ycw==)
            1. [`assert-simple`](#5_YXNzZXJ0LXNpbXBsZQ==)
    4. [`deno-2.5.7`](#3_ZGVuby0yLjUuNw==)
        1. [`async`](#4_YXN5bmM=)
            1. [`concurrency 1`](#5_Y29uY3VycmVuY3kgMQ==)
            2. [`concurrency 2`](#5_Y29uY3VycmVuY3kgMg==)
            3. [`concurrency 4`](#5_Y29uY3VycmVuY3kgNA==)
            4. [`concurrency 8`](#5_Y29uY3VycmVuY3kgOA==)
            5. [`concurrency 16`](#5_Y29uY3VycmVuY3kgMTY=)
            6. [`concurrency 32`](#5_Y29uY3VycmVuY3kgMzI=)
            7. [`concurrency 64`](#5_Y29uY3VycmVuY3kgNjQ=)
        2. [`decode-uri-component`](#4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=)
            1. [`valid`](#5_dmFsaWQ=)
            2. [`invalid`](#5_aW52YWxpZA==)
        3. [`url-routers`](#4_dXJsLXJvdXRlcnM=)
            1. [`GET "/user"`](#5_R0VUICIvdXNlciI=)
            2. [`GET "/user/comments"`](#5_R0VUICIvdXNlci9jb21tZW50cyI=)
            3. [`GET "/user/avatar"`](#5_R0VUICIvdXNlci9hdmF0YXIi)
            4. [`GET "/user/lookup/username/:username"`](#5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==)
            5. [`GET "/user/lookup/email/:email"`](#5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==)
            6. [`GET "/event/:id"`](#5_R0VUICIvZXZlbnQvOmlkIg==)
            7. [`GET "/event/:id/comments"`](#5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==)
            8. [`POST "/event/:id/comment"`](#5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==)
            9. [`GET "/map/:location/event"`](#5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=)
            10. [`GET "/status"`](#5_R0VUICIvc3RhdHVzIg==)
            11. [`GET "/very/deeply/nested/route/hello/there"`](#5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==)
            12. [`GET "/static/*"`](#5_R0VUICIvc3RhdGljLyoi)
        4. [`validators`](#4_dmFsaWRhdG9ycw==)
            1. [`assert-simple`](#5_YXNzZXJ0LXNpbXBsZQ==)
    5. [`node-25.6.1`](#3_bm9kZS0yNS42LjE=)
        1. [`async`](#4_YXN5bmM=)
            1. [`concurrency 1`](#5_Y29uY3VycmVuY3kgMQ==)
            2. [`concurrency 2`](#5_Y29uY3VycmVuY3kgMg==)
            3. [`concurrency 4`](#5_Y29uY3VycmVuY3kgNA==)
            4. [`concurrency 8`](#5_Y29uY3VycmVuY3kgOA==)
            5. [`concurrency 16`](#5_Y29uY3VycmVuY3kgMTY=)
            6. [`concurrency 32`](#5_Y29uY3VycmVuY3kgMzI=)
            7. [`concurrency 64`](#5_Y29uY3VycmVuY3kgNjQ=)
        2. [`decode-uri-component`](#4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=)
            1. [`valid`](#5_dmFsaWQ=)
            2. [`invalid`](#5_aW52YWxpZA==)
        3. [`url-routers`](#4_dXJsLXJvdXRlcnM=)
            1. [`GET "/user"`](#5_R0VUICIvdXNlciI=)
            2. [`GET "/user/comments"`](#5_R0VUICIvdXNlci9jb21tZW50cyI=)
            3. [`GET "/user/avatar"`](#5_R0VUICIvdXNlci9hdmF0YXIi)
            4. [`GET "/user/lookup/username/:username"`](#5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==)
            5. [`GET "/user/lookup/email/:email"`](#5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==)
            6. [`GET "/event/:id"`](#5_R0VUICIvZXZlbnQvOmlkIg==)
            7. [`GET "/event/:id/comments"`](#5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==)
            8. [`POST "/event/:id/comment"`](#5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==)
            9. [`GET "/map/:location/event"`](#5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=)
            10. [`GET "/status"`](#5_R0VUICIvc3RhdHVzIg==)
            11. [`GET "/very/deeply/nested/route/hello/there"`](#5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==)
            12. [`GET "/static/*"`](#5_R0VUICIvc3RhdGljLyoi)
        4. [`validators`](#4_dmFsaWRhdG9ycw==)
            1. [`assert-simple`](#5_YXNzZXJ0LXNpbXBsZQ==)
    6. [`deno-2.6.9`](#3_ZGVuby0yLjYuOQ==)
        1. [`async`](#4_YXN5bmM=)
            1. [`concurrency 1`](#5_Y29uY3VycmVuY3kgMQ==)
            2. [`concurrency 2`](#5_Y29uY3VycmVuY3kgMg==)
            3. [`concurrency 4`](#5_Y29uY3VycmVuY3kgNA==)
            4. [`concurrency 8`](#5_Y29uY3VycmVuY3kgOA==)
            5. [`concurrency 16`](#5_Y29uY3VycmVuY3kgMTY=)
            6. [`concurrency 32`](#5_Y29uY3VycmVuY3kgMzI=)
            7. [`concurrency 64`](#5_Y29uY3VycmVuY3kgNjQ=)
        2. [`decode-uri-component`](#4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=)
            1. [`valid`](#5_dmFsaWQ=)
            2. [`invalid`](#5_aW52YWxpZA==)
        3. [`url-routers`](#4_dXJsLXJvdXRlcnM=)
            1. [`GET "/user"`](#5_R0VUICIvdXNlciI=)
            2. [`GET "/user/comments"`](#5_R0VUICIvdXNlci9jb21tZW50cyI=)
            3. [`GET "/user/avatar"`](#5_R0VUICIvdXNlci9hdmF0YXIi)
            4. [`GET "/user/lookup/username/:username"`](#5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==)
            5. [`GET "/user/lookup/email/:email"`](#5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==)
            6. [`GET "/event/:id"`](#5_R0VUICIvZXZlbnQvOmlkIg==)
            7. [`GET "/event/:id/comments"`](#5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==)
            8. [`POST "/event/:id/comment"`](#5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==)
            9. [`GET "/map/:location/event"`](#5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=)
            10. [`GET "/status"`](#5_R0VUICIvc3RhdHVzIg==)
            11. [`GET "/very/deeply/nested/route/hello/there"`](#5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==)
            12. [`GET "/static/*"`](#5_R0VUICIvc3RhdGljLyoi)
        4. [`validators`](#4_dmFsaWRhdG9ycw==)
            1. [`assert-simple`](#5_YXNzZXJ0LXNpbXBsZQ==)

<a name="2_c3RhcnR1cCB0aW1l">

## startup time
<a name="3_bm9kZS0yMi4yMi4w">

### node-22.22.0
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  0.75
  ▓  0.75
  ▒  0.76
  ░  0.86

typebox (jit):
  ████  10.23
  ▓▓▓▓  10.04
  ▒▒▒▒  10.63
  ░░░░  10.95

typescript (jit):
  ████████████  34.12
  ▓▓▓▓▓▓▓▓▓▓▓▓  34.70
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  35.22
  ░░░░░░░░░░░░░  36.34

arktype:
  ████████████████████████████████████████████████  134.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  134.12
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  135.28
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  140.47


```
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

valibot:
  █  0.30
  ▓  0.30
  ▒  0.32
  ░  0.34

stnl (jit):
  █  0.46
  ▓  0.46
  ▒  0.47
  ░  0.51

sury:
  █  2.45
  ▓  2.44
  ▒  2.46
  ░  2.52

zod:
  █  3.60
  ▓  3.58
  ▒  3.64
  ░  3.81

typebox (jit):
  ██  5.44
  ▓▓  5.41
  ▒▒  5.45
  ░░  6.50

effect/schema:
  █████  12.55
  ▓▓▓▓▓  12.53
  ▒▒▒▒▒  12.61
  ░░░░░  12.96

typescript (jit):
  ███████  18.59
  ▓▓▓▓▓▓▓  17.35
  ▒▒▒▒▒▒▒▒  21.81
  ░░░░░░░░░  22.71

arktype:
  ███████████████████████████████████████████████  126.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  126.19
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  127.33
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  133.34


```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

mapl (aot):
  ██  0.33
  ▓▓  0.32
  ▒▒  0.34
  ░░  0.38

itty-router:
  ██  0.47
  ▓▓  0.46
  ▒▒  0.48
  ░░  0.53

hono (quick):
  ███  0.56
  ▓▓▓  0.56
  ▒▒▒  0.57
  ░░░  0.66

hono (tiny):
  ████  0.75
  ▓▓▓▓  0.75
  ▒▒▒▒  0.76
  ░░░░  0.78

hono:
  ████  0.82
  ▓▓▓▓  0.81
  ▒▒▒▒  0.82
  ░░░░  0.94

mapl (jit):
  █████  1.00
  ▓▓▓▓▓  1.00
  ▒▒▒▒▒  1.01
  ░░░░░  1.04

elysia:
  █████████████████████  4.47
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.48
  ░░░░░░░░░░░░░░░░░░░░░░  4.71

elysia (jit):
  █████████████████████████████████████████████████  10.46
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.50
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.66


```
<a name="3_bm9kZS0yNC4xMy4w">

### node-24.13.0
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

valibot:
  █  0.31
  ▓  0.31
  ▒  0.32
  ░  0.34

stnl (jit):
  █  0.46
  ▓  0.46
  ▒  0.47
  ░  0.49

sury:
  █  2.37
  ▓  2.36
  ▒  2.40
  ░  2.51

zod:
  █  3.59
  ▓  3.56
  ▒  3.60
  ░░  4.49

typebox (jit):
  ██  5.29
  ▓▓  5.26
  ▒▒  5.33
  ░░  5.63

effect/schema:
  █████  12.68
  ▓▓▓▓▓  12.63
  ▒▒▒▒▒  12.70
  ░░░░░░  14.32

typescript (jit):
  ██████  15.95
  ▓▓▓▓▓▓  15.35
  ▒▒▒▒▒▒▒  17.46
  ░░░░░░░  18.01

arktype:
  ███████████████████████████████████████████████  119.26
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  118.79
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  120.61
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  125.74


```
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  0.74
  ▓  0.74
  ▒  0.76
  ░  0.83

typebox (jit):
  ████  10.13
  ▓▓▓▓  9.93
  ▒▒▒▒  10.31
  ░░░░░  13.31

typescript (jit):
  ████████████  32.43
  ▓▓▓▓▓▓▓▓▓▓▓▓  32.30
  ▒▒▒▒▒▒▒▒▒▒▒▒  34.84
  ░░░░░░░░░░░░░  36.64

arktype:
  ███████████████████████████████████████████████  130.99
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  130.75
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  132.54
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  139.63


```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

mapl (aot):
  ██  0.37
  ▓▓  0.37
  ▒▒  0.38
  ░░  0.41

itty-router:
  ██  0.47
  ▓▓  0.47
  ▒▒  0.49
  ░░  0.51

hono (quick):
  ██  0.57
  ▓▓  0.57
  ▒▒  0.58
  ░░░  0.66

hono (tiny):
  ███  0.74
  ▓▓▓  0.74
  ▒▒▒  0.75
  ░░░  0.81

hono:
  ████  0.92
  ▓▓▓▓  0.92
  ▒▒▒▒  0.94
  ░░░░░  1.08

mapl (jit):
  █████  1.06
  ▓▓▓▓  1.05
  ▒▒▒▒▒  1.08
  ░░░░░  1.19

elysia:
  ███████████████████  4.54
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.62
  ░░░░░░░░░░░░░░░░░░░░░  4.89

elysia (jit):
  ███████████████████████████████████████████████  10.97
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.92
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  11.10
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  11.72


```
<a name="3_YnVuLTEuMy45">

### bun-1.3.9
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

valibot:
  █  0.26
  ▓  0.25
  ▒  0.27
  ░  0.31

stnl (jit):
  █  0.45
  ▓  0.44
  ▒  0.46
  ░  0.51

sury:
  █  2.32
  ▓  2.31
  ▒  2.34
  ░  2.41

zod:
  █  2.96
  ▓  2.95
  ▒  2.99
  ░  3.13

typebox (jit):
  ██  6.67
  ▓▓  6.58
  ▒▒  6.76
  ░░  7.34

typescript (jit):
  ██████  18.47
  ▓▓▓▓▓▓  18.29
  ▒▒▒▒▒▒  19.42
  ░░░░░░░  20.27

effect/schema:
  ███████  22.42
  ▓▓▓▓▓▓▓  22.32
  ▒▒▒▒▒▒▒  22.58
  ░░░░░░░░  23.60

arktype:
  ███████████████████████████████████████████  131.23
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  128.07
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  136.93
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  151.29


```
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  0.69
  ▓  0.68
  ▒  0.70
  ░  0.76

typebox (jit):
  ████  13.82
  ▓▓▓▓  13.90
  ▒▒▒▒  14.20
  ░░░░░  14.76

typescript (jit):
  ████████████  38.04
  ▓▓▓▓▓▓▓▓▓▓▓▓  37.86
  ▒▒▒▒▒▒▒▒▒▒▒▒  39.67
  ░░░░░░░░░░░░░  42.06

arktype:
  ████████████████████████████████████████████  141.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.85
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  147.49
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  161.39


```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

mapl (aot):
  █  0.29
  ▓  0.29
  ▒  0.30
  ░░  0.35

itty-router:
  ██  0.39
  ▓▓  0.38
  ▒▒  0.40
  ░░  0.44

hono (quick):
  ███  0.66
  ▓▓▓  0.66
  ▒▒▒  0.67
  ░░░  0.71

mapl (jit):
  ████  0.88
  ▓▓▓▓  0.88
  ▒▒▒▒  0.89
  ░░░░  0.93

hono (tiny):
  ████  0.94
  ▓▓▓▓  0.94
  ▒▒▒▒  0.95
  ░░░░░  1.01

hono:
  ██████  1.19
  ▓▓▓▓▓▓  1.18
  ▒▒▒▒▒▒  1.20
  ░░░░░░  1.26

elysia:
  ██████████████████████  4.77
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.72
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.76
  ░░░░░░░░░░░░░░░░░░░░░░░░  5.17

elysia (jit):
  ██████████████████████████████████████████████  9.79
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.73
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.78
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.60


```
<a name="3_ZGVuby0yLjUuNw==">

### deno-2.5.7
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  0.77
  ▓  0.76
  ▒  0.80
  ░  1.01

typebox (jit):
  ████  10.55
  ▓▓▓▓  10.39
  ▒▒▒▒  10.81
  ░░░░░  12.26

typescript (jit):
  ████████████  33.06
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  33.33
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  34.06
  ░░░░░░░░░░░░░░  38.14

arktype:
  ████████████████████████████████████████████████  127.52
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  127.39
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  128.90
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  132.43


```
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

valibot:
  █  0.35
  ▓  0.34
  ▒  0.36
  ░  0.58

stnl (jit):
  █  0.51
  ▓  0.50
  ▒  0.52
  ░  0.76

sury:
  █  2.45
  ▓  2.42
  ▒  2.50
  ░  2.66

zod:
  █  3.66
  ▓  3.63
  ▒▒  3.71
  ░░  3.90

typebox (jit):
  ██  5.52
  ▓▓  5.57
  ▒▒  5.65
  ░░  5.86

effect/schema:
  █████  12.93
  ▓▓▓▓▓  12.89
  ▒▒▒▒▒  13.09
  ░░░░░  13.47

typescript (jit):
  ███████  16.19
  ▓▓▓▓▓▓▓  16.27
  ▒▒▒▒▒▒▒  16.88
  ░░░░░░░  17.76

arktype:
  ████████████████████████████████████████████████  118.29
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  117.94
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  119.67
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  122.67


```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

mapl (aot):
  ██  0.31
  ▓  0.30
  ▒▒  0.32
  ░░  0.39

itty-router:
  ███  0.54
  ▓▓▓  0.53
  ▒▒▒  0.55
  ░░░░  0.79

hono (quick):
  ███  0.64
  ▓▓▓  0.64
  ▒▒▒  0.66
  ░░░░  0.74

hono (tiny):
  ████  0.79
  ▓▓▓▓  0.78
  ▒▒▒▒  0.82
  ░░░░  0.90

hono:
  ████  0.91
  ▓▓▓▓  0.91
  ▒▒▒▒▒  0.93
  ░░░░░  1.00

mapl (jit):
  █████  1.01
  ▓▓▓▓▓  1.00
  ▒▒▒▒▒  1.03
  ░░░░░░  1.17

elysia:
  ███████████████████  3.85
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.81
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.89
  ░░░░░░░░░░░░░░░░░░░░  4.14

elysia (jit):
  ████████████████████████████████████████████████  9.88
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.86
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.93
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.28


```
<a name="3_bm9kZS0yNS42LjE=">

### node-25.6.1
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  0.75
  ▓  0.73
  ▒  0.77
  ░  0.88

typebox (jit):
  ████  10.07
  ▓▓▓▓  9.92
  ▒▒▒▒  10.50
  ░░░░░  12.38

typescript (jit):
  ████████████  32.56
  ▓▓▓▓▓▓▓▓▓▓▓▓  32.23
  ▒▒▒▒▒▒▒▒▒▒▒▒  33.32
  ░░░░░░░░░░░░░░  38.48

arktype:
  ███████████████████████████████████████████████  128.01
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  127.39
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  129.85
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  135.56


```
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

valibot:
  █  0.30
  ▓  0.30
  ▒  0.32
  ░  0.42

stnl (jit):
  █  0.47
  ▓  0.47
  ▒  0.49
  ░  0.59

sury:
  █  2.36
  ▓  2.34
  ▒  2.42
  ░  2.55

zod:
  █  3.64
  ▓  3.63
  ▒▒  3.72
  ░░  3.96

typebox (jit):
  ██  5.30
  ▓▓  5.30
  ▒▒  5.40
  ░░  5.63

effect/schema:
  █████  12.31
  ▓▓▓▓▓  12.37
  ▒▒▒▒▒  12.57
  ░░░░░  12.97

typescript (jit):
  ██████  15.18
  ▓▓▓▓▓▓  15.12
  ▒▒▒▒▒▒  15.38
  ░░░░░░░  16.25

arktype:
  ████████████████████████████████████████████████  118.19
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  117.94
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  120.02
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  123.53


```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

mapl (aot):
  ██  0.35
  ▓▓  0.35
  ▒▒  0.36
  ░░  0.42

itty-router:
  ██  0.51
  ▓▓  0.50
  ▒▒  0.53
  ░░░  0.65

hono (quick):
  ██  0.55
  ▓▓  0.55
  ▒▒  0.56
  ░░░  0.60

hono (tiny):
  ███  0.74
  ▓▓▓  0.73
  ▒▒▒  0.75
  ░░░░  0.81

hono:
  ████  0.83
  ▓▓▓▓  0.83
  ▒▒▒▒  0.84
  ░░░░  0.92

mapl (jit):
  ████  1.01
  ▓▓▓▓  1.01
  ▒▒▒▒▒  1.03
  ░░░░░  1.09

elysia:
  ███████████████████  4.35
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.33
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.36
  ░░░░░░░░░░░░░░░░░░░░  4.50

elysia (jit):
  ████████████████████████████████████████████████  10.86
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.85
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.95
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  11.30


```
<a name="3_ZGVuby0yLjYuOQ==">

### deno-2.6.9
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  0.80
  ▓  0.81
  ▒  0.84
  ░  0.98

typebox (jit):
  ████  10.68
  ▓▓▓▓  10.53
  ▒▒▒▒  11.27
  ░░░░░  12.01

typescript (jit):
  ████████████  33.09
  ▓▓▓▓▓▓▓▓▓▓▓▓  32.71
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  33.74
  ░░░░░░░░░░░░░░  38.22

arktype:
  ████████████████████████████████████████████████  125.88
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  125.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  127.33
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  132.39


```
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

valibot:
  █  0.34
  ▓  0.33
  ▒  0.36
  ░  0.44

stnl (jit):
  █  0.54
  ▓  0.53
  ▒  0.56
  ░  0.65

sury:
  █  2.49
  ▓  2.46
  ▒  2.57
  ░  2.78

zod:
  █  3.75
  ▓  3.71
  ▒▒  3.83
  ░░  4.00

typebox (jit):
  ██  5.55
  ▓▓  5.60
  ▒▒  5.67
  ░░  5.96

effect/schema:
  █████  12.94
  ▓▓▓▓▓  12.90
  ▒▒▒▒▒  13.05
  ░░░░░░  14.03

typescript (jit):
  ██████  16.19
  ▓▓▓▓▓▓  16.40
  ▒▒▒▒▒▒▒  16.95
  ░░░░░░░  17.55

arktype:
  ███████████████████████████████████████████████  119.44
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  119.28
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  120.65
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  126.94


```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

mapl (aot):
  █  0.31
  ▓  0.30
  ▒▒  0.32
  ░░  0.45

itty-router:
  ███  0.55
  ▓▓▓  0.55
  ▒▒▒  0.57
  ░░░  0.66

hono (quick):
  ███  0.66
  ▓▓▓  0.65
  ▒▒▒  0.70
  ░░░░  0.78

hono (tiny):
  ████  0.83
  ▓▓▓▓  0.83
  ▒▒▒▒  0.86
  ░░░░  0.93

hono:
  █████  0.95
  ▓▓▓▓  0.94
  ▒▒▒▒▒  0.99
  ░░░░░  1.07

mapl (jit):
  █████  1.08
  ▓▓▓▓▓  1.06
  ▒▒▒▒▒  1.11
  ░░░░░░  1.25

elysia:
  ██████████████████  3.86
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.84
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.92
  ░░░░░░░░░░░░░░░░░░░  4.04

elysia (jit):
  ████████████████████████████████████████████████  9.98
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.97
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.07
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.46


```
<a name="2_cnVudGltZQ==">

## runtime
<a name="3_bm9kZS0yMi4yMi4w">

### node-22.22.0
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (mutex):
  ███████  152.69
  ▓▓▓▓▓▓▓  153.59
  ▒▒▒▒▒▒▒  156.35
  ░░░░░░░░░  201.45

manual:
  ███████  162.83
  ▓▓▓▓▓▓▓  166.71
  ▒▒▒▒▒▒▒  168.63
  ░░░░░░░░  181.64

ciorent (semaphore):
  ████████  177.47
  ▓▓▓▓▓▓▓▓  178.02
  ▒▒▒▒▒▒▒▒  182.84
  ░░░░░░░░░░  237.17

p-mutex:
  ██████████████  329.46
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  318.97
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  413.28
  ░░░░░░░░░░░░░░░░░░░░░░░░  545.01

p-limit:
  █████████████████████████  563.05
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  541.14
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  718.11
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  821.89

async-mutex:
  ███████████████████████████████████████  880.57
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  847.87
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1045.45
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1143.51


```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ████  0.18
  ▓▓▓▓  0.18
  ▒▒▒▒  0.18
  ░░░░  0.20

p-limit:
  ████████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
  ░░░░░░░░░░░░░░░░░░  0.83

async-mutex:
  ██████████████████  0.82
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.94
  ░░░░░░░░░░░░░░░░░░░░░░░░  1.10

manual:
  ██████████████████████████████████████████████  2.06
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.06
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.12
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.25


```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ███████  0.17
  ▓▓▓▓▓▓▓  0.17
  ▒▒▒▒▒▒▒▒  0.18
  ░░░░░░░░  0.19

p-limit:
  ███████████████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.80

async-mutex:
  ███████████████████████████████████  0.80
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.75
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.91
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.09

manual:
  ████████████████████████████████████████████████  1.09
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.09
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.10
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.14


```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  172.75
  ▓▓▓▓▓▓▓▓  172.37
  ▒▒▒▒▒▒▒▒  177.27
  ░░░░░░░░░  194.73

p-limit:
  █████████████████████████  550.41
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  530.82
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  703.03
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  794.24

async-mutex:
  █████████████████████████████████████  798.95
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  757.01
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  901.62
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1083.56

manual:
  █████████████████████████████████████  809.97
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  781.80
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  961.37
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  976.95


```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  169.00
  ▓▓▓▓▓▓▓▓  168.90
  ▒▒▒▒▒▒▒▒  171.76
  ░░░░░░░░░  188.67

manual:
  ███████████████████████  490.17
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  529.21
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  543.31
  ░░░░░░░░░░░░░░░░░░░░░░░░░░  559.41

p-limit:
  █████████████████████████  549.40
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  539.04
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  681.06
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  777.86

async-mutex:
  █████████████████████████████████████  806.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  772.65
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  893.33
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1087.83


```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  169.79
  ▓▓▓▓▓▓▓▓  169.63
  ▒▒▒▒▒▒▒▒  173.44
  ░░░░░░░░░  187.32

manual:
  ██████████████  304.03
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  321.06
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  326.54
  ░░░░░░░░░░░░░░░░  348.14

p-limit:
  █████████████████████████  536.90
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  545.75
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  662.16
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  774.90

async-mutex:
  █████████████████████████████████████  795.58
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  743.68
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  895.03
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1083.23


```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  163.94
  ▓▓▓▓▓▓▓▓  165.97
  ▒▒▒▒▒▒▒▒  169.41
  ░░░░░░░░░  181.33

manual:
  █████████  201.22
  ▓▓▓▓▓▓▓▓▓▓  204.71
  ▒▒▒▒▒▒▒▒▒▒  219.93
  ░░░░░░░░░░░  238.62

p-limit:
  ██████████████████████████  543.54
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  513.88
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  674.43
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  780.67

async-mutex:
  █████████████████████████████████████  795.07
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  758.82
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  880.45
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1060.99


```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  ████████████████████████████████  247.71
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  247.21
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  256.03
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  303.35

fast-decode-uri-component:
  █████████████████████████████████████████  319.45
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  320.79
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  330.32
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  361.48

native:
  ███████████████████████████████████████████████  368.95
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  370.35
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  379.37
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  392.05


```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  █  1.15
  ▓  0.98
  ▒  1.00
  ░  2.08

fast-decode-uri-component:
  █  1.93
  ▓  1.94
  ▒  1.94
  ░  1.97

native:
  ███████████████████████████████████████████████  286.44
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  290.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  293.31
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  306.85


```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  ██  18.78
  ▓  11.48
  ▒  12.94
  ░░░░░░  70.73

rou3 (jit):
  ███  34.36
  ▓▓  27.94
  ▒▒  30.10
  ░░░░░░░░░  111.12

mapl (tree):
  ███  36.80
  ▓▓▓  32.52
  ▒▒▒  34.64
  ░░░░░  60.43

mapl (regexp):
  ███  37.49
  ▓▓▓  32.68
  ▒▒▒  35.19
  ░░░░░  60.43

hono (regexp):
  ████  49.91
  ▓▓▓▓  45.74
  ▒▒▒▒  48.53
  ░░░░░░  72.16

rou3 (tree):
  █████  61.35
  ▓▓▓▓▓▓  68.94
  ▒▒▒▒▒▒  70.61
  ░░░░░░░░  95.71

find-my-way:
  █████████  116.14
  ▓▓▓▓▓▓▓▓▓  113.30
  ▒▒▒▒▒▒▒▒▒  116.28
  ░░░░░░░░░░░░░  159.33

hono (trie):
  ████████████████████████████  339.27
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  294.64
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  308.30
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  536.80

hono (pattern):
  ████████████████████████████  346.46
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  325.09
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  338.34
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  614.53


```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  20.19
  ▓  16.83
  ▒  17.70
  ░░  38.06

mapl (tree):
  ██  36.18
  ▓▓  30.95
  ▒▒  33.81
  ░░░  57.93

mapl (regexp):
  ██  37.10
  ▓▓  31.13
  ▒▒▒  51.73
  ░░░  57.41

rou3 (jit):
  ██  38.67
  ▓▓  29.65
  ▒▒▒  52.29
  ░░░░░░  111.73

rou3 (tree):
  ███  52.85
  ▓▓▓  49.64
  ▒▒▒  52.37
  ░░░░  73.26

hono (regexp):
  ███  55.25
  ▓▓▓  46.86
  ▒▒▒▒  69.46
  ░░░░  74.01

find-my-way:
  █████████████  227.35
  ▓▓▓▓▓▓▓▓▓▓▓▓  208.30
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  226.09
  ░░░░░░░░░░░░░░░░░░░░░  362.67

hono (pattern):
  ███████████████████  334.47
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  330.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  337.63
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  538.18

hono (trie):
  ███████████████████████████  482.07
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  471.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  482.89
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  883.84


```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  ██  21.04
  ▓  17.95
  ▒  18.71
  ░░░  38.42

mapl (tree):
  ███  36.75
  ▓▓  30.91
  ▒▒▒▒  49.97
  ░░░░░  56.33

mapl (regexp):
  ███  37.49
  ▓▓▓  32.84
  ▒▒▒  35.19
  ░░░░░  59.01

rou3 (jit):
  ███  38.97
  ▓▓  30.85
  ▒▒▒▒  53.38
  ░░░░░░░░░░  128.70

hono (regexp):
  ████  52.91
  ▓▓▓▓  46.27
  ▒▒▒▒▒  67.42
  ░░░░░░  74.13

rou3 (tree):
  ████  54.62
  ▓▓▓▓  49.54
  ▒▒▒▒▒  65.72
  ░░░░░░  72.45

find-my-way:
  █████████████████  216.18
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  198.84
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  216.89
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░  336.13

hono (pattern):
  ██████████████████████████████  368.65
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  329.34
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  333.81
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  624.66

hono (trie):
  ████████████████████████████████████  455.94
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  451.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  466.94
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  501.02


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.19
  ▓▓▓▓  0.19
  ▒▒▒▒  0.19
  ░░░░░░░░  0.33

mapl (tree):
  ██████████  0.42
  ▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░░░░░  0.68

rou3 (jit):
  ██████████  0.44
  ▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
  ░░░░░░░░░░░░░░░  0.65

mapl (regexp):
  ███████████  0.46
  ▓▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒  0.42
  ░░░░░░░░░░░░░░░░░  0.71

find-my-way:
  █████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
  ░░░░░░░░░░░░░░░  0.66

hono (pattern):
  ███████████████  0.63
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
  ░░░░░░░░░░░░░░░░░░░░░░░  0.99

hono (regexp):
  ███████████████  0.64
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
  ░░░░░░░░░░░░░░░░░░░░░░░░░  1.06

rou3 (tree):
  █████████████████████████████████████  1.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.50
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.76
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.90

hono (trie):
  ███████████████████████████████████████████████  2.01
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.01
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.04
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.13


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.23
  ▓▓▓▓  0.19
  ▒▒▒▒▒▒  0.31
  ░░░░░░  0.32

mapl (regexp):
  ████████  0.38
  ▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░  0.59

rou3 (jit):
  █████████  0.45
  ▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
  ░░░░░░░░░░░░░  0.66

mapl (tree):
  █████████  0.47
  ▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
  ░░░░░░░░░░░░░  0.66

hono (pattern):
  ███████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░░░  0.98

find-my-way:
  ███████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒  0.57
  ░░░░░░░░░░░░░░░░░░░░  0.97

hono (regexp):
  ██████████████  0.67
  ▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.94
  ░░░░░░░░░░░░░░░░░░░░░  1.06

rou3 (tree):
  █████████████████████████████████  1.66
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.79
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.48

hono (trie):
  ████████████████████████████████████████  2.00
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.99
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.04
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.10


```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ███  0.14
  ▓▓▓  0.13
  ▒▒▒  0.13
  ░░░░  0.23

rou3 (jit):
  ███████  0.34
  ▓▓▓▓▓▓  0.29
  ▒▒▒▒▒▒▒  0.34
  ░░░░░░░░░░░  0.56

mapl (tree):
  ███████  0.34
  ▓▓▓▓▓  0.28
  ▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░  0.54

find-my-way:
  █████████  0.46
  ▓▓▓▓▓▓▓▓  0.43
  ▒▒▒▒▒▒▒▒▒  0.48
  ░░░░░░░░░░░░░  0.68

mapl (regexp):
  █████████  0.48
  ▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.64
  ░░░░░░░░░░░░░  0.66

hono (regexp):
  ███████████  0.59
  ▓▓▓▓▓▓▓▓▓▓  0.50
  ▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░░  1.00

hono (pattern):
  █████████████  0.66
  ▓▓▓▓▓▓▓▓▓▓▓  0.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
  ░░░░░░░░░░░░░░░░░░░░  1.03

rou3 (tree):
  ███████████████████████████  1.37
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.24
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.52
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.96

hono (trie):
  █████████████████████████████  1.50
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.49
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.57


```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.20
  ▓▓▓▓  0.18
  ▒▒▒▒  0.19
  ░░░░░░░  0.32

mapl (tree):
  █████████  0.43
  ▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒  0.43
  ░░░░░░░░░░░░░░  0.66

rou3 (jit):
  ██████████  0.44
  ▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
  ░░░░░░░░░░░░░  0.61

mapl (regexp):
  ██████████  0.47
  ▓▓▓▓▓▓▓▓▓  0.39
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
  ░░░░░░░░░░░░░░░  0.70

hono (pattern):
  █████████████  0.60
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
  ░░░░░░░░░░░░░░░░░░░░░░░  1.04

find-my-way:
  █████████████  0.61
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.81
  ░░░░░░░░░░░░░░░░░░░░  0.89

hono (regexp):
  █████████████  0.61
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
  ░░░░░░░░░░░░░░░░░░░░░░  1.01

rou3 (tree):
  ██████████████████████████████████  1.54
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.41
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.68
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.28

hono (trie):
  ███████████████████████████████████████  1.80
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.80
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.83
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.88


```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.21
  ▓▓▓▓  0.18
  ▒▒▒▒▒  0.22
  ░░░░░░░  0.30

mapl (tree):
  ████████  0.35
  ▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒  0.35
  ░░░░░░░░  0.37

mapl (regexp):
  ████████  0.36
  ▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒  0.34
  ░░░░░░░░░░░░░░  0.62

rou3 (jit):
  ██████████  0.44
  ▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
  ░░░░░░░░░░░░░░  0.61

hono (pattern):
  ██████████  0.44
  ▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
  ░░░░░░░░░░░░░░░  0.67

find-my-way:
  ████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓  0.50
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░░░░  0.86

hono (regexp):
  █████████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓  0.50
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░░░░░  0.90

rou3 (tree):
  ███████████████████████████████████  1.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.24

hono (trie):
  █████████████████████████████████████████  1.82
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.82
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.86
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.90


```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ███  0.19
  ▓▓▓  0.17
  ▒▒▒  0.19
  ░░░░░  0.28

mapl (regexp):
  ██████  0.39
  ▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░  0.69

mapl (tree):
  ███████  0.41
  ▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒  0.60
  ░░░░░░░░░░  0.62

rou3 (jit):
  ███████  0.43
  ▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒▒▒  0.60
  ░░░░░░░░░░  0.62

find-my-way:
  ████████  0.52
  ▓▓▓▓▓▓▓▓  0.48
  ▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░  0.80

hono (pattern):
  ██████████  0.64
  ▓▓▓▓▓▓▓▓▓  0.55
  ▒▒▒▒▒▒▒▒▒▒  0.60
  ░░░░░░░░░░░░░░░░  1.00

hono (regexp):
  ██████████  0.64
  ▓▓▓▓▓▓▓▓▓  0.55
  ▒▒▒▒▒▒▒▒▒▒  0.64
  ░░░░░░░░░░░░░░░░░  1.06

rou3 (tree):
  █████████████████████████  1.54
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.67
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.18

hono (trie):
  █████████████████████████████  1.81
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.78
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.82
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.08


```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  ██  24.37
  ▓▓  19.56
  ▒▒▒  36.56
  ░░░  40.69

mapl (regexp):
  ███  38.16
  ▓▓▓  31.54
  ▒▒▒▒  53.12
  ░░░░░  57.76

rou3 (jit):
  ███  42.15
  ▓▓▓  32.81
  ▒▒▒▒▒  55.81
  ░░░░░░░░░░░  131.50

mapl (tree):
  ████  45.55
  ▓▓▓▓  53.37
  ▒▒▒▒  54.52
  ░░░░░  57.69

hono (regexp):
  ████  49.70
  ▓▓▓▓  45.99
  ▒▒▒▒  48.59
  ░░░░░░  72.42

rou3 (tree):
  ████  51.87
  ▓▓▓▓  48.53
  ▒▒▒▒  51.12
  ░░░░░░  71.23

find-my-way:
  ███████████████  185.03
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  155.88
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  237.50
  ░░░░░░░░░░░░░░░░░░░░  243.88

hono (trie):
  █████████████████████████████  354.70
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  293.61
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  507.69
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  533.73

hono (pattern):
  █████████████████████████████████████████  511.07
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  606.13
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  612.18
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  619.17


```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █  0.02
  ▓  0.02
  ▒  0.02
  ░░  0.04

mapl (regexp):
  ██  0.04
  ▓  0.03
  ▒▒  0.05
  ░░░  0.06

mapl (tree):
  ██  0.04
  ▓  0.03
  ▒▒  0.05
  ░░░  0.06

rou3 (jit):
  ██  0.04
  ▓  0.03
  ▒▒  0.05
  ░░░░░░  0.14

hono (regexp):
  ██  0.05
  ▓▓  0.05
  ▒▒▒  0.06
  ░░░  0.07

rou3 (tree):
  ██  0.05
  ▓▓  0.05
  ▒▒  0.05
  ░░░  0.07

find-my-way:
  ███████████████  0.36
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.40
  ░░░░░░░░░░░░░░░░░░░░░░░  0.56

hono (pattern):
  ██████████████████████  0.52
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

hono (trie):
  █████████████████████████████████████████████  1.09
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.07
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.10
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.20


```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ███  0.14
  ▓▓▓  0.14
  ▒▒▒  0.14
  ░░░░░  0.22

mapl (tree):
  ███████  0.33
  ▓▓▓▓▓▓  0.28
  ▒▒▒▒▒▒▒  0.33
  ░░░░░░░░░░░  0.51

find-my-way:
  █████████  0.44
  ▓▓▓▓▓▓▓▓▓  0.44
  ▒▒▒▒▒▒▒▒▒▒  0.46
  ░░░░░░░░░░░░░░  0.68

rou3 (jit):
  ██████████  0.47
  ▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒  0.47
  ░░░░░░░░░░░░░░░  0.74

mapl (regexp):
  ██████████  0.48
  ▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
  ░░░░░░░░░░░░░░  0.68

hono (regexp):
  ███████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░░░  0.97

hono (pattern):
  ██████████████  0.69
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.00
  ░░░░░░░░░░░░░░░░░░░░░░  1.04

hono (trie):
  ███████████████████████████████████  1.69
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.80

rou3 (tree):
  █████████████████████████████████████  1.77
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.70
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.86
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.41


```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  2.61
  ▓  2.64
  ▒  2.73
  ░  2.99

stnl (aot):
  █  2.71
  ▓  2.71
  ▒  2.75
  ░  2.86

sury (jit):
  ██  4.05
  ▓▓  4.06
  ▒▒  4.12
  ░░  4.20

arktype:
  ██  5.03
  ▓▓  5.01
  ▒▒  5.06
  ░░░  5.76

typebox (aot):
  ██  5.15
  ▓▓  5.16
  ▒▒  5.18
  ░░  5.30

typebox (jit):
  ██  5.16
  ▓▓  5.13
  ▒▒  5.19
  ░░  5.36

typia (aot):
  ████  9.34
  ▓▓▓▓  9.37
  ▒▒▒▒  9.46
  ░░░░  9.69

zod:
  ████████████████  37.75
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  37.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  43.44
  ░░░░░░░░░░░░░░░░░░░  44.60

valibot:
  ██████████████████  42.00
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  40.66
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  44.51
  ░░░░░░░░░░░░░░░░░░░░  45.39

effect-schema:
  ████████████████████████████████████████████████  110.80
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  111.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  112.06
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  114.41


```
<a name="3_bm9kZS0yNC4xMy4w">

### node-24.13.0
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (mutex):
  ███████  125.07
  ▓▓▓▓▓▓▓  122.65
  ▒▒▒▒▒▒▒  126.95
  ░░░░░░░░  150.23

manual:
  ████████  135.61
  ▓▓▓▓▓▓▓  133.15
  ▒▒▒▒▒▒▒  134.30
  ░░░░░░░░░  162.65

ciorent (semaphore):
  █████████  154.12
  ▓▓▓▓▓▓▓▓  149.90
  ▒▒▒▒▒▒▒▒▒  158.24
  ░░░░░░░░░░░  192.89

p-mutex:
  ███████████████████  334.20
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  343.67
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  361.99
  ░░░░░░░░░░░░░░░░░░░░░░░  406.65

p-limit:
  ████████████████████████████  513.38
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  506.72
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  577.38
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  702.57

async-mutex:
  ███████████████████████████████████████  710.41
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  686.44
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  712.27
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  903.24


```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ████  0.15
  ▓▓▓▓  0.15
  ▒▒▒▒  0.16
  ░░░░  0.17

p-limit:
  █████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.60
  ░░░░░░░░░░░░░░░░░  0.69

async-mutex:
  █████████████████  0.69
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.71
  ░░░░░░░░░░░░░░░░░░░░  0.80

manual:
  ████████████████████████████████████████████████  1.92
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.92
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.94
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.02


```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ████  0.15
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░░  0.17

p-limit:
  ███████████████  0.51
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
  ░░░░░░░░░░░░░░░░░░░  0.66

async-mutex:
  ████████████████████  0.69
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.70
  ░░░░░░░░░░░░░░░░░░░░░░░  0.79

manual:
  ███████████████████████████████  1.09
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.08
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.10
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.74


```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  151.28
  ▓▓▓▓▓▓▓▓  151.52
  ▒▒▒▒▒▒▒▒  153.20
  ░░░░░░░░░  166.97

p-limit:
  ███████████████████████████  517.73
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  523.84
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  589.25
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  689.69

async-mutex:
  ████████████████████████████████████  682.78
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  675.47
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  696.26
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  798.58

manual:
  ███████████████████████████████████████  735.38
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  687.16
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  909.21
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  945.77


```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ██████████  149.38
  ▓▓▓▓▓▓▓▓▓▓  149.63
  ▒▒▒▒▒▒▒▒▒▒  150.91
  ░░░░░░░░░░░  167.04

manual:
  █████████████████████████████  443.66
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  454.27
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  477.81
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  516.42

p-limit:
  ██████████████████████████████████  532.00
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  558.80
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  599.48
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  679.80

async-mutex:
  ███████████████████████████████████████████  673.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  666.77
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  692.32
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  777.27


```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  █████████  147.74
  ▓▓▓▓▓▓▓▓▓  147.37
  ▒▒▒▒▒▒▒▒▒  149.05
  ░░░░░░░░░░  164.17

manual:
  █████████████████  269.07
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  272.05
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  282.43
  ░░░░░░░░░░░░░░░░░░░  300.98

p-limit:
  █████████████████████████████████  532.43
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  548.60
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  601.27
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  667.49

async-mutex:
  ██████████████████████████████████████████  682.15
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  672.92
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  694.89
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  811.54


```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  █████████  144.16
  ▓▓▓▓▓▓▓▓▓  143.73
  ▒▒▒▒▒▒▒▒▒  145.61
  ░░░░░░░░░░  159.34

manual:
  ███████████  168.93
  ▓▓▓▓▓▓▓▓▓▓▓  167.99
  ▒▒▒▒▒▒▒▒▒▒▒  170.70
  ░░░░░░░░░░░░  185.35

p-limit:
  ███████████████████████████████████  534.71
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  563.22
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  600.29
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  664.12

async-mutex:
  ████████████████████████████████████████████  677.63
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  677.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  688.23
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  773.23


```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  ██████████████████████████████████  248.34
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  248.02
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  251.45
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  306.20

fast-decode-uri-component:
  ███████████████████████████████████████████  318.16
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  321.63
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  325.64
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  366.27

native:
  █████████████████████████████████████████████  330.33
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  337.97
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  341.99
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  358.02


```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  █  1.02
  ▓  1.00
  ▒  1.00
  ░  1.28

fast-decode-uri-component:
  █  2.01
  ▓  1.94
  ▒  2.01
  ░  2.25

native:
  ███████████████████████████████████████████████  274.38
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  276.03
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  281.19
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  293.59


```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  13.89
  ▓  11.95
  ▒  12.32
  ░░░  34.33

rou3 (jit):
  ███  31.90
  ▓▓  29.63
  ▒▒▒  30.11
  ░░░░░  57.97

mapl (regexp):
  ███  38.16
  ▓▓▓  33.77
  ▒▒▒  37.53
  ░░░░░  63.97

mapl (tree):
  ████  41.87
  ▓▓▓  37.69
  ▒▒▒  40.88
  ░░░░░░  67.22

hono (regexp):
  ████  50.75
  ▓▓▓▓  48.05
  ▒▒▒▒  51.29
  ░░░░░░  76.30

rou3 (tree):
  █████  55.11
  ▓▓▓▓  53.14
  ▒▒▒▒▒  55.87
  ░░░░░░  76.96

find-my-way:
  ██████████  115.81
  ▓▓▓▓▓▓▓▓▓▓  113.53
  ▒▒▒▒▒▒▒▒▒▒  116.80
  ░░░░░░░░░░░░░░░  177.21

hono (trie):
  ███████████████████████████  321.48
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  271.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  300.74
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  553.32

hono (pattern):
  ██████████████████████████████  358.24
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  317.89
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  334.49
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  592.81


```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  17.81
  ▓  17.73
  ▒  17.86
  ░░  37.04

rou3 (jit):
  ██  31.83
  ▓▓  30.77
  ▒▒  31.10
  ░░░░  58.81

mapl (tree):
  ██  32.88
  ▓▓  32.49
  ▒▒  35.15
  ░░░░  56.74

mapl (regexp):
  ██  34.58
  ▓▓  33.99
  ▒▒  35.55
  ░░░░  58.70

hono (regexp):
  ███  51.36
  ▓▓▓  50.78
  ▒▒▒  55.17
  ░░░░  69.64

rou3 (tree):
  ███  52.21
  ▓▓▓  50.30
  ▒▒▒  52.08
  ░░░░░  77.25

find-my-way:
  ████████████████  248.71
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  212.82
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  326.84
  ░░░░░░░░░░░░░░░░░░░░░░  354.21

hono (pattern):
  █████████████████████  340.40
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  323.64
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  332.25
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  591.46

hono (trie):
  ██████████████████████████████████  543.49
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  485.70
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  494.29
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  795.18


```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  19.19
  ▓  18.80
  ▒  18.98
  ░░  39.76

mapl (tree):
  ██  34.07
  ▓▓  33.01
  ▒▒  34.63
  ░░░░  61.73

rou3 (jit):
  ██  34.43
  ▓▓  32.23
  ▒▒  32.53
  ░░░░  63.84

mapl (regexp):
  ██  34.69
  ▓▓  33.56
  ▒▒  36.70
  ░░░  46.97

hono (regexp):
  ███  51.35
  ▓▓▓  48.50
  ▒▒▒  54.74
  ░░░░░  72.94

rou3 (tree):
  ███  51.78
  ▓▓▓  51.18
  ▒▒▒  51.55
  ░░░░░  74.76

find-my-way:
  ███████████████  235.45
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  202.30
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  304.81
  ░░░░░░░░░░░░░░░░░░░░░  331.16

hono (pattern):
  █████████████████████  337.92
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  320.28
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  328.19
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  594.18

hono (trie):
  ███████████████████████████████████  554.01
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  501.09
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  522.88
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  795.40


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.18
  ▓▓▓▓  0.18
  ▒▒▒▒  0.18
  ░░░░░  0.23

mapl (regexp):
  ████████  0.37
  ▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░  0.62

mapl (tree):
  ████████  0.37
  ▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░  0.51

rou3 (jit):
  ██████████  0.46
  ▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░  0.59

hono (pattern):
  ███████████  0.51
  ▓▓▓▓▓▓▓▓▓▓▓  0.50
  ▒▒▒▒▒▒▒▒▒▒▒  0.51
  ░░░░░░░░░░░░░░  0.67

find-my-way:
  ███████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░  0.64

hono (regexp):
  █████████████  0.60
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.58
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
  ░░░░░░░░░░░░░░░░░  0.79

rou3 (tree):
  █████████████████████████████████  1.54
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.50
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.56
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.83

hono (trie):
  ███████████████████████████████████████████████  2.22
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.24
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.28
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.35


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.18
  ▓▓▓▓  0.17
  ▒▒▒▒  0.18
  ░░░░░░  0.28

mapl (regexp):
  ███████  0.32
  ▓▓▓▓▓▓▓  0.31
  ▒▒▒▒▒▒▒  0.32
  ░░░░░░░░░░  0.45

mapl (tree):
  ████████  0.37
  ▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░  0.42

rou3 (jit):
  ██████████  0.46
  ▓▓▓▓▓▓▓▓▓▓  0.46
  ▒▒▒▒▒▒▒▒▒▒▒  0.53
  ░░░░░░░░░░░░░  0.59

find-my-way:
  ███████████  0.50
  ▓▓▓▓▓▓▓▓▓▓  0.48
  ▒▒▒▒▒▒▒▒▒▒▒  0.50
  ░░░░░░░░░░░░░░░░░░░  0.89

hono (pattern):
  ███████████  0.52
  ▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒  0.51
  ░░░░░░░░░░░░░░  0.66

hono (regexp):
  ██████████████  0.64
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
  ░░░░░░░░░░░░░░░  0.72

rou3 (tree):
  ████████████████████████████████████  1.66
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.72
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.79
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.87

hono (trie):
  ██████████████████████████████████████████████  2.16
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.14
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.25
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.33


```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.16
  ▓▓▓▓▓  0.16
  ▒▒▒▒▒  0.16
  ░░░░░░  0.22

mapl (tree):
  █████████  0.31
  ▓▓▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒▒▒  0.31
  ░░░░░░░░░  0.32

mapl (regexp):
  █████████  0.31
  ▓▓▓▓▓▓▓▓▓  0.31
  ▒▒▒▒▒▒▒▒▒  0.31
  ░░░░░░░░░░  0.34

find-my-way:
  ██████████  0.36
  ▓▓▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░░░░░░░░░  0.68

rou3 (jit):
  ███████████  0.40
  ▓▓▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
  ░░░░░░░░░░░░░░░░  0.56

hono (pattern):
  ███████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░░░░░  0.67

hono (regexp):
  ████████████████  0.57
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
  ░░░░░░░░░░░░░░░░░░░░░  0.72

rou3 (tree):
  ████████████████████████████████████████  1.40
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.50
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.53
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.58

hono (trie):
  ████████████████████████████████████████████  1.54
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.55
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.75


```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.19
  ▓▓▓▓  0.18
  ▒▒▒▒  0.18
  ░░░░░░░  0.29

mapl (regexp):
  ████████  0.32
  ▓▓▓▓▓▓▓▓  0.32
  ▒▒▒▒▒▒▒▒  0.32
  ░░░░░░░░░  0.39

mapl (tree):
  █████████  0.36
  ▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░  0.39

rou3 (jit):
  █████████  0.38
  ▓▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░  0.51

find-my-way:
  ███████████  0.46
  ▓▓▓▓▓▓▓▓▓▓▓  0.45
  ▒▒▒▒▒▒▒▒▒▒▒  0.47
  ░░░░░░░░░░░░  0.51

hono (pattern):
  █████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░░  0.69

hono (regexp):
  ███████████████  0.62
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.60
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
  ░░░░░░░░░░░░░░░░░░  0.76

rou3 (tree):
  █████████████████████████████████████  1.52
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.43
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.68
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.77

hono (trie):
  ███████████████████████████████████████████████  1.95
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.94
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.00
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.06


```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.17
  ▓▓▓▓  0.17
  ▒▒▒▒  0.17
  ░░░░░  0.20

hono (pattern):
  ███████  0.28
  ▓▓▓▓▓▓  0.27
  ▒▒▒▒▒▒  0.27
  ░░░░░░░░  0.33

mapl (regexp):
  ███████  0.28
  ▓▓▓▓▓▓  0.27
  ▒▒▒▒▒▒  0.27
  ░░░░░░░░░░░░  0.51

mapl (tree):
  █████████  0.37
  ▓▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░░░  0.55

rou3 (jit):
  █████████  0.39
  ▓▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░░  0.53

find-my-way:
  ███████████  0.45
  ▓▓▓▓▓▓▓▓▓▓▓  0.44
  ▒▒▒▒▒▒▒▒▒▒▒  0.46
  ░░░░░░░░░░░░░░  0.59

hono (regexp):
  ██████████████  0.58
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
  ░░░░░░░░░░░░░░░░░  0.72

rou3 (tree):
  ████████████████████████████████████  1.50
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.40
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.68
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.78

hono (trie):
  ██████████████████████████████████████████████  1.90
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.88
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.93
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.08


```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.16
  ▓▓▓▓  0.16
  ▒▒▒▒  0.16
  ░░░░  0.18

mapl (regexp):
  ████████  0.33
  ▓▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒  0.33
  ░░░░░░░░  0.35

mapl (tree):
  █████████  0.36
  ▓▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒  0.35
  ░░░░░░░░░░░░░░░░  0.66

rou3 (jit):
  █████████  0.39
  ▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒  0.39
  ░░░░░░░░░░░░  0.51

find-my-way:
  ██████████  0.43
  ▓▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒  0.43
  ░░░░░░░░░░░░░░░░░░░  0.79

hono (pattern):
  ████████████  0.52
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░░  0.66

hono (regexp):
  ███████████████  0.61
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
  ░░░░░░░░░░░░░░░░░░  0.74

rou3 (tree):
  ███████████████████████████████████  1.49
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.39
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.66
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.76

hono (trie):
  ███████████████████████████████████████████████  1.98
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.04
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.10


```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  ██  21.05
  ▓▓  20.02
  ▒▒  20.22
  ░░░░  41.98

mapl (tree):
  ███  32.03
  ▓▓▓  31.31
  ▒▒▒  33.96
  ░░░  38.57

mapl (regexp):
  ███  32.97
  ▓▓▓  31.72
  ▒▒▒  34.64
  ░░░░░  55.72

rou3 (jit):
  ███  35.07
  ▓▓▓  33.68
  ▒▒▒  33.98
  ░░░░░░  64.47

rou3 (tree):
  ████  49.86
  ▓▓▓▓  50.01
  ▒▒▒▒  50.68
  ░░░░░░  71.09

hono (regexp):
  █████  51.87
  ▓▓▓▓  50.01
  ▒▒▒▒▒  53.02
  ░░░░░░  73.28

find-my-way:
  ██████████████  161.20
  ▓▓▓▓▓▓▓▓▓▓▓▓  140.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  210.57
  ░░░░░░░░░░░░░░░░░░░░░  236.28

hono (pattern):
  ████████████████████████████  320.48
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  317.20
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  320.80
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  486.95

hono (trie):
  █████████████████████████████  325.28
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  299.74
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  314.23
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  567.51


```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █  0.02
  ▓  0.02
  ▒  0.02
  ░  0.02

mapl (regexp):
  █  0.03
  ▓  0.03
  ▒  0.03
  ░  0.04

mapl (tree):
  █  0.04
  ▓  0.03
  ▒  0.04
  ░░  0.06

rou3 (jit):
  █  0.04
  ▓  0.04
  ▒  0.04
  ░░  0.06

rou3 (tree):
  ██  0.05
  ▓▓  0.05
  ▒▒  0.05
  ░░  0.07

hono (regexp):
  ██  0.06
  ▓▓  0.05
  ▒▒  0.06
  ░░░  0.08

hono (pattern):
  ███████████  0.34
  ▓▓▓▓▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒▒▒▒  0.34
  ░░░░░░░░░░░░░░░░░░░  0.57

find-my-way:
  █████████████  0.39
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
  ░░░░░░░░░░░░░░░░  0.50

hono (trie):
  ███████████████████████████████████████████  1.32
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.23
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.49
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.54


```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ███  0.14
  ▓▓▓  0.14
  ▒▒▒  0.14
  ░░░░  0.19

mapl (tree):
  ███████  0.29
  ▓▓▓▓▓▓▓  0.29
  ▒▒▒▒▒▒▒  0.29
  ░░░░░░░  0.32

mapl (regexp):
  ███████  0.30
  ▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒  0.31
  ░░░░░░░░  0.35

find-my-way:
  █████████  0.39
  ▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░░░░  0.67

rou3 (jit):
  ███████████  0.47
  ▓▓▓▓▓▓▓▓▓▓  0.46
  ▒▒▒▒▒▒▒▒▒▒▒  0.47
  ░░░░░░░░░░░░░  0.56

hono (pattern):
  ████████████  0.54
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.53
  ░░░░░░░░░░░░░░░  0.66

hono (regexp):
  ██████████████  0.61
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.60
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
  ░░░░░░░░░░░░░░░░  0.70

rou3 (tree):
  ███████████████████████████████████  1.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.76
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.85

hono (trie):
  █████████████████████████████████████████  1.85
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.83
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.86
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.23


```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  2.66
  ▓  2.70
  ▒  2.76
  ░  3.03

stnl (aot):
  █  2.69
  ▓  2.71
  ▒  2.85
  ░  3.01

sury (jit):
  ██  4.05
  ▓▓  4.08
  ▒▒  4.13
  ░░  4.24

arktype:
  ██  5.31
  ▓▓  5.40
  ▒▒  5.46
  ░░  5.70

typebox (aot):
  ██  5.74
  ▓▓  5.76
  ▒▒▒  5.81
  ░░░  5.92

typebox (jit):
  ███  5.88
  ▓▓▓  5.90
  ▒▒▒  6.04
  ░░░  6.24

typia (aot):
  ████  9.63
  ▓▓▓▓  9.59
  ▒▒▒▒  9.69
  ░░░░  9.99

zod:
  ███████████████  33.73
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  34.09
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  36.11
  ░░░░░░░░░░░░░░░░  37.31

valibot:
  ██████████████████  40.69
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  40.67
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  43.31
  ░░░░░░░░░░░░░░░░░░░  43.55

effect-schema:
  █████████████████████████████████████████████████  113.74
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  114.05
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  114.73
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  115.59


```
<a name="3_YnVuLTEuMy45">

### bun-1.3.9
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (mutex):
  █████████  136.98
  ▓▓▓▓▓▓▓▓  133.35
  ▒▒▒▒▒▒▒▒  134.81
  ░░░░░░░░░░  161.78

manual:
  █████████  137.68
  ▓▓▓▓▓▓▓  108.39
  ▒▒▒▒▒▒▒▒▒▒▒▒  198.19
  ░░░░░░░░░░░░░░  216.96

ciorent (semaphore):
  ███████████  168.07
  ▓▓▓▓▓▓▓▓▓▓  159.42
  ▒▒▒▒▒▒▒▒▒▒▒  175.33
  ░░░░░░░░░░░░░░░░░  274.97

p-mutex:
  ███████████  171.64
  ▓▓▓▓▓▓▓▓▓▓  166.12
  ▒▒▒▒▒▒▒▒▒▒▒  176.44
  ░░░░░░░░░░░░░  206.51

p-limit:
  ████████████████████  317.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  307.79
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  323.10
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  539.52

async-mutex:
  ████████████████████████████████  501.64
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  450.44
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  589.10
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  794.61


```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  █  0.17
  ▓  0.16
  ▒  0.16
  ░░  0.21

p-limit:
  ███  0.31
  ▓▓  0.30
  ▒▒▒  0.32
  ░░░  0.36

async-mutex:
  ███  0.42
  ▓▓▓  0.40
  ▒▒▒  0.42
  ░░░░░  0.61

manual:
  ██████████████████████████████  3.67
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.11
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.15
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  6.08


```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  █████  0.16
  ▓▓▓▓▓  0.16
  ▒▒▒▒▒  0.16
  ░░░░░░  0.20

p-limit:
  █████████  0.31
  ▓▓▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒▒▒  0.32
  ░░░░░░░░░░  0.35

async-mutex:
  ████████████  0.40
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.40
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.41
  ░░░░░░░░░░░░░░░░  0.55

manual:
  ███████████████████████████████████████████████  1.61
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.60
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.61
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.72


```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  160.88
  ▓▓▓▓▓▓▓▓  156.68
  ▒▒▒▒▒▒▒▒  158.12
  ░░░░░░░░░░  188.78

p-limit:
  ████████████████  305.43
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  297.11
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  315.63
  ░░░░░░░░░░░░░░░░░░  357.15

async-mutex:
  ████████████████████  392.64
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  392.20
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  401.34
  ░░░░░░░░░░░░░░░░░░░░░░  439.18

manual:
  ███████████████████████████████████████████  851.84
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  848.16
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  850.82
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  981.48


```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ██████████████  163.03
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  157.28
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  170.33
  ░░░░░░░░░░░░░░░░░  199.81

p-limit:
  ███████████████████████████  306.93
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  298.09
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  316.78
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  364.35

async-mutex:
  ███████████████████████████████████  403.71
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  391.25
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  402.59
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  575.45

manual:
  ████████████████████████████████████████  463.69
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  455.50
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  471.04
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  557.13


```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ███████████████  158.21
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  154.23
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  155.98
  ░░░░░░░░░░░░░░░░░  182.32

manual:
  ██████████████████████████  273.18
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  265.62
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  280.41
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  326.58

p-limit:
  █████████████████████████████  305.33
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  297.75
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  314.93
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  358.59

async-mutex:
  █████████████████████████████████████  388.38
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  386.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  395.37
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  521.84


```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  █████████████  156.48
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  151.33
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  153.18
  ░░░░░░░░░░░░░░░░░░░░░░  256.33

manual:
  ███████████████  178.16
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  172.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  184.82
  ░░░░░░░░░░░░░░░░░░░  221.17

p-limit:
  ██████████████████████████  306.10
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  298.14
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  314.30
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  360.31

async-mutex:
  ██████████████████████████████████  393.64
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  386.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  397.05
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  583.95


```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  █████████████████  133.92
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  130.47
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  132.81
  ░░░░░░░░░░░░░░░░░░░░░░░░  191.13

native:
  ██████████████████  142.92
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.47
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.71
  ░░░░░░░░░░░░░░░░░░░░  163.75

fast-decode-uri-component:
  ████████████████████████████████████████████  350.60
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  347.13
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  358.52
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  400.32


```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  █  0.82
  ▓  0.81
  ▒  0.81
  ░  1.28

fast-decode-uri-component:
  ████  4.29
  ▓▓▓▓  4.26
  ▒▒▒▒  4.27
  ░░░░░  5.25

native:
  ███████████████████████████████████████████████  48.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  48.19
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  48.90
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  51.66


```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  8.98
  ▓  8.31
  ▒  8.99
  ░░  18.92

hono (regexp):
  █  10.10
  ▓  9.15
  ▒  9.26
  ░░░  28.71

rou3 (tree):
  █  10.78
  ▓  10.05
  ▒  10.09
  ░░░  27.39

rou3 (jit):
  █  15.88
  ▓  15.33
  ▒  15.45
  ░░  26.32

mapl (regexp):
  ██  21.97
  ▓▓  20.75
  ▒▒  22.20
  ░░░░  47.13

mapl (tree):
  ██  21.99
  ▓▓  20.54
  ▒▒  22.86
  ░░░░  46.14

find-my-way:
  ██████  65.90
  ▓▓▓▓▓▓  62.51
  ▒▒▒▒▒▒  66.60
  ░░░░░░░░░░░░  134.55

hono (trie):
  ██████████████████████████  285.29
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  276.27
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  277.95
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  547.51

hono (pattern):
  ████████████████████████████████  351.63
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  345.92
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  347.82
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  450.63


```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

hono (regexp):
  █  11.81
  ▓  10.18
  ▒  11.18
  ░░  32.40

rou3 (tree):
  █  14.04
  ▓  12.43
  ▒  12.97
  ░░  33.15

mapl (jit):
  █  15.49
  ▓  14.59
  ▒  15.66
  ░░  27.30

rou3 (jit):
  █  16.03
  ▓  15.54
  ▒  15.67
  ░  23.02

mapl (tree):
  ██  25.99
  ▓  24.38
  ▒▒  26.92
  ░░░  54.18

mapl (regexp):
  ██  26.52
  ▓▓  25.15
  ▒▒  27.34
  ░░░  55.27

find-my-way:
  ████████  137.72
  ▓▓▓▓▓▓▓▓  135.34
  ▒▒▒▒▒▒▒▒  136.85
  ░░░░░░░░░░░░░░░  246.12

hono (pattern):
  ██████████████████████  351.64
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  348.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  349.92
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░  440.61

hono (trie):
  ████████████████████████████  450.66
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  432.43
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  438.11
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  814.72


```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

hono (regexp):
  █  10.73
  ▓  10.44
  ▒  10.49
  ░  15.10

rou3 (tree):
  █  12.60
  ▓  12.33
  ▒  12.38
  ░  17.04

mapl (jit):
  █  15.35
  ▓  15.08
  ▒  15.33
  ░  20.04

rou3 (jit):
  █  15.83
  ▓  15.83
  ▒  16.00
  ░  21.85

mapl (regexp):
  █  22.94
  ▓  22.29
  ▒  22.73
  ░░  29.36

mapl (tree):
  █  23.11
  ▓  22.49
  ▒  22.77
  ░░  28.14

find-my-way:
  ████████  128.00
  ▓▓▓▓▓▓▓▓  128.71
  ▒▒▒▒▒▒▒▒  129.72
  ░░░░░░░░  137.27

hono (pattern):
  ██████████████████████  352.86
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  348.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  350.16
  ░░░░░░░░░░░░░░░░░░░░░░░░░░  431.05

hono (trie):
  ████████████████████████████  457.01
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  443.65
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  446.57
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  814.92


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.18
  ▓▓▓▓  0.18
  ▒▒▒▒  0.19
  ░░░░░  0.20

mapl (tree):
  █████  0.20
  ▓▓▓▓▓  0.20
  ▒▒▒▒▒  0.20
  ░░░░░░░░░  0.37

mapl (regexp):
  ████████  0.33
  ▓▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒  0.33
  ░░░░░░░░░░  0.44

hono (regexp):
  █████████  0.37
  ▓▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░  0.48

find-my-way:
  █████████  0.38
  ▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒  0.35
  ░░░░░░░░░░░░░░░░░  0.70

rou3 (jit):
  ███████████  0.45
  ▓▓▓▓▓▓▓▓▓▓  0.44
  ▒▒▒▒▒▒▒▒▒▒  0.44
  ░░░░░░░░░░░░  0.51

hono (pattern):
  █████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░  0.70

rou3 (tree):
  █████████████████  0.70
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
  ░░░░░░░░░░░░░░░░░░░░░  0.91

hono (trie):
  ███████████████████████████████████  1.47
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.41
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.42
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.12


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.19
  ▓▓▓▓  0.19
  ▒▒▒▒  0.19
  ░░░░  0.20

mapl (tree):
  ████  0.20
  ▓▓▓▓  0.20
  ▒▒▒▒  0.20
  ░░░░░░  0.29

mapl (regexp):
  ██████  0.29
  ▓▓▓▓▓▓  0.29
  ▒▒▒▒▒▒  0.29
  ░░░░░░░░  0.38

find-my-way:
  ████████  0.35
  ▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒  0.34
  ░░░░░░░░░░░░░░░  0.65

hono (regexp):
  ████████  0.37
  ▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░  0.46

rou3 (jit):
  ██████████  0.44
  ▓▓▓▓▓▓▓▓▓▓  0.44
  ▒▒▒▒▒▒▒▒▒▒  0.44
  ░░░░░░░░░░░  0.50

hono (pattern):
  ████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░  0.68

rou3 (tree):
  ████████████████  0.70
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
  ░░░░░░░░░░░░░░░░░░░░  0.89

hono (trie):
  ██████████████████████████████████  1.52
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.48
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.24


```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.14
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░░  0.16

mapl (tree):
  █████  0.17
  ▓▓▓▓▓  0.17
  ▒▒▒▒▒  0.17
  ░░░░░░  0.20

find-my-way:
  ███████  0.25
  ▓▓▓▓▓▓▓  0.25
  ▒▒▒▒▒▒▒  0.25
  ░░░░░░░░░  0.32

mapl (regexp):
  ███████  0.25
  ▓▓▓▓▓▓▓  0.25
  ▒▒▒▒▒▒▒  0.25
  ░░░░░░░░░  0.33

hono (regexp):
  ██████████  0.35
  ▓▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒  0.35
  ░░░░░░░░░░░░░  0.46

rou3 (jit):
  ██████████  0.35
  ▓▓▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░  0.43

hono (pattern):
  ████████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░░░░  0.66

rou3 (tree):
  █████████████████  0.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.95

hono (trie):
  ███████████████████████████████████  1.23
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.19
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.20
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.77


```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.17
  ▓▓▓▓▓  0.17
  ▒▒▒▒▒  0.17
  ░░░░░  0.19

mapl (tree):
  ██████  0.21
  ▓▓▓▓▓▓  0.21
  ▒▒▒▒▒▒  0.21
  ░░░░░░░  0.24

mapl (regexp):
  ████████  0.27
  ▓▓▓▓▓▓▓  0.26
  ▒▒▒▒▒▒▒▒  0.27
  ░░░░░░░░░░  0.35

find-my-way:
  ████████  0.30
  ▓▓▓▓▓▓▓▓  0.28
  ▒▒▒▒▒▒▒▒  0.29
  ░░░░░░░░░░░░░░░░  0.56

hono (regexp):
  ██████████  0.36
  ▓▓▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░  0.45

rou3 (jit):
  ████████████  0.41
  ▓▓▓▓▓▓▓▓▓▓▓  0.40
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.41
  ░░░░░░░░░░░░░░░  0.54

hono (pattern):
  ████████████████  0.57
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
  ░░░░░░░░░░░░░░░░░░░░  0.70

rou3 (tree):
  ███████████████████  0.66
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
  ░░░░░░░░░░░░░░░░░░░░░░░░  0.84

hono (trie):
  ███████████████████████████████████████  1.40
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.37
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.38
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.78


```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.16
  ▓▓▓▓  0.16
  ▒▒▒▒  0.16
  ░░░░░  0.18

mapl (tree):
  █████  0.20
  ▓▓▓▓▓  0.20
  ▒▒▒▒▒  0.20
  ░░░░░░  0.25

mapl (regexp):
  ██████  0.24
  ▓▓▓▓▓▓  0.24
  ▒▒▒▒▒▒  0.24
  ░░░░░░░  0.28

hono (regexp):
  █████████  0.34
  ▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒  0.34
  ░░░░░░░░░░  0.40

hono (pattern):
  █████████  0.35
  ▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒  0.35
  ░░░░░░░░░░░░  0.47

find-my-way:
  █████████  0.36
  ▓▓▓▓▓▓▓  0.29
  ▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░░░  0.58

rou3 (jit):
  ███████████  0.42
  ▓▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒  0.41
  ░░░░░░░░░░░░░  0.52

rou3 (tree):
  █████████████████  0.66
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
  ░░░░░░░░░░░░░░░░░░░░░░░░  0.94

hono (trie):
  ███████████████████████████████████  1.40
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.37
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.98


```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.19
  ▓▓▓▓▓  0.19
  ▒▒▒▒▒  0.19
  ░░░░░░  0.21

mapl (tree):
  ██████  0.21
  ▓▓▓▓▓▓  0.21
  ▒▒▒▒▒▒  0.21
  ░░░░░░  0.24

mapl (regexp):
  ████████  0.28
  ▓▓▓▓▓▓▓▓  0.28
  ▒▒▒▒▒▒▒▒  0.28
  ░░░░░░░░░░  0.37

find-my-way:
  ████████  0.29
  ▓▓▓▓▓▓▓▓  0.28
  ▒▒▒▒▒▒▒▒  0.28
  ░░░░░░░░░░░░░░░  0.56

hono (regexp):
  ██████████  0.36
  ▓▓▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░  0.45

rou3 (jit):
  ███████████  0.42
  ▓▓▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒▒  0.41
  ░░░░░░░░░░░░░░░  0.54

hono (pattern):
  ████████████████  0.58
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
  ░░░░░░░░░░░░░░░░░░░░  0.74

rou3 (tree):
  █████████████████  0.63
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.63
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
  ░░░░░░░░░░░░░░░░░░░░░  0.76

hono (trie):
  ██████████████████████████████████████  1.40
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.38
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.85


```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  13.66
  ▓  13.63
  ▒  13.71
  ░░  17.00

hono (regexp):
  █  15.75
  ▓▓  17.00
  ▒▒  17.34
  ░░  22.18

rou3 (tree):
  ██  16.88
  ▓  15.17
  ▒  15.29
  ░░░  29.01

mapl (tree):
  ██  23.02
  ▓▓  22.33
  ▒▒  22.62
  ░░░  29.05

mapl (regexp):
  ██  23.05
  ▓▓  22.41
  ▒▒  23.24
  ░░░  27.90

rou3 (jit):
  ██  25.92
  ▓▓  25.97
  ▒▒  26.12
  ░░░░░  50.89

find-my-way:
  ████████████  126.02
  ▓▓▓▓▓▓▓▓▓▓▓  121.20
  ▒▒▒▒▒▒▒▒▒▒▒  122.59
  ░░░░░░░░░░░░░░░░░░░░░░░░░░  277.65

hono (pattern):
  █████████████████████████████████  353.98
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  350.78
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  352.03
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  416.73

hono (trie):
  █████████████████████████████████  357.15
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  354.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  356.97
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  533.32


```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

hono (regexp):
  █  11.54
  ▓  11.30
  ▒  11.43
  ░  15.51

rou3 (tree):
  █  17.80
  ▓  17.30
  ▒  17.36
  ░░  43.62

rou3 (jit):
  █  21.74
  ▓  20.36
  ▒  20.58
  ░░░  66.61

mapl (regexp):
  █  26.57
  ▓  25.73
  ▒  27.35
  ░  32.59

mapl (tree):
  █  27.73
  ▓  27.08
  ▒  27.28
  ░░  33.68

mapl (jit):
  █  30.90
  ▓  30.08
  ▒  31.45
  ░░  35.19

find-my-way:
  ████████  179.09
  ▓▓▓▓▓▓▓  165.25
  ▒▒▒▒▒▒▒  166.45
  ░░░░░░░░░░░░░░  322.55

hono (pattern):
  ████████████████  353.48
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  349.15
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  350.56
  ░░░░░░░░░░░░░░░░░░░░  440.72

hono (trie):
  ███████████████████████████████  700.01
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  681.31
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  685.35
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1114.55


```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.17
  ▓▓▓▓  0.18
  ▒▒▒▒  0.18
  ░░░░░  0.19

mapl (tree):
  █████  0.21
  ▓▓▓▓▓  0.20
  ▒▒▒▒▒  0.21
  ░░░░░░░  0.30

mapl (regexp):
  ████████  0.32
  ▓▓▓▓▓▓▓▓  0.32
  ▒▒▒▒▒▒▒▒  0.32
  ░░░░░░░░░░  0.40

find-my-way:
  █████████  0.37
  ▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░  0.55

hono (regexp):
  ██████████  0.40
  ▓▓▓▓▓▓▓▓▓▓  0.40
  ▒▒▒▒▒▒▒▒▒▒  0.40
  ░░░░░░░░░░░░  0.50

rou3 (jit):
  ███████████████  0.61
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
  ░░░░░░░░░░░░░░░░░  0.71

hono (pattern):
  ███████████████  0.61
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
  ░░░░░░░░░░░░░░░░░░  0.74

rou3 (tree):
  ██████████████████  0.74
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.72
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.73
  ░░░░░░░░░░░░░░░░░░░░░░░  0.93

hono (trie):
  ███████████████████████████████████████  1.62
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.60
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.62
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.06


```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  1.45
  ▓  1.42
  ▒  1.43
  ░  2.07

stnl (aot):
  █  1.60
  ▓  1.53
  ▒  1.54
  ░  2.17

sury (jit):
  █  2.24
  ▓  2.02
  ▒  2.29
  ░░  3.91

arktype:
  █  3.03
  ▓  2.64
  ▒▒  3.69
  ░░  4.49

typia (aot):
  ██  3.35
  ▓▓  3.19
  ▒▒  3.27
  ░░  4.27

typebox (jit):
  ██  4.22
  ▓▓  4.14
  ▒▒  4.16
  ░░  5.11

typebox (aot):
  ██  4.24
  ▓▓  4.16
  ▒▒  4.19
  ░░░  5.13

valibot:
  █████████  18.73
  ▓▓▓▓▓▓▓▓▓  18.48
  ▒▒▒▒▒▒▒▒▒  18.91
  ░░░░░░░░░░  20.34

zod:
  ████████████  24.02
  ▓▓▓▓▓▓▓▓▓▓▓  23.41
  ▒▒▒▒▒▒▒▒▒▒▒▒  23.97
  ░░░░░░░░░░░░░░  28.65

effect-schema:
  ██████████████████████████████████████████████████  101.50
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  101.48
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  101.88
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  102.30


```
<a name="3_ZGVuby0yLjUuNw==">

### deno-2.5.7
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (mutex):
  ██████  116.22
  ▓▓▓▓▓▓  118.29
  ▒▒▒▒▒▒▒  130.91
  ░░░░░░░░  150.41

manual:
  ███████  133.60
  ▓▓▓▓▓▓▓  131.71
  ▒▒▒▒▒▒▒  144.12
  ░░░░░░░░  163.37

ciorent (semaphore):
  ████████  152.10
  ▓▓▓▓▓▓▓▓  147.05
  ▒▒▒▒▒▒▒▒▒  167.00
  ░░░░░░░░░░  189.15

p-mutex:
  ██████████████████  356.66
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  370.91
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  384.43
  ░░░░░░░░░░░░░░░░░░░░░░  424.03

p-limit:
  ███████████████████████████  518.82
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  525.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  542.77
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  612.43

async-mutex:
  ███████████████████████████████████████  759.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  730.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  826.65
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  971.43


```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ███  0.14
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░  0.17

p-limit:
  █████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
  ░░░░░░░░░░░░░░░  0.62

async-mutex:
  █████████████████  0.74
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.73
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.78
  ░░░░░░░░░░░░░░░░░░░░░  0.87

manual:
  ██████████████████████████████████████████████  1.97
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.96
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.99
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.12


```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ████  0.14
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░░  0.17

p-limit:
  ███████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
  ░░░░░░░░░░░░░░░░░░  0.62

async-mutex:
  █████████████████████  0.71
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.72
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.73
  ░░░░░░░░░░░░░░░░░░░░░░░░  0.81

manual:
  ████████████████████████████████████  1.23
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.20
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.26
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.72


```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  142.24
  ▓▓▓▓▓▓▓▓  146.90
  ▒▒▒▒▒▒▒▒  147.74
  ░░░░░░░░░  163.64

p-limit:
  █████████████████████████████  518.38
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  527.63
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  550.66
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  604.08

async-mutex:
  ███████████████████████████████████████  701.90
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  710.29
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  722.20
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  805.69

manual:
  █████████████████████████████████████████  729.47
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  761.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  801.32
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  899.22


```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  136.89
  ▓▓▓▓▓▓▓▓▓  144.72
  ▒▒▒▒▒▒▒▒▒  145.74
  ░░░░░░░░░  158.96

manual:
  █████████████████████████  425.91
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  455.18
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  473.00
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  496.08

p-limit:
  ████████████████████████████████  531.13
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  531.43
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  556.66
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  610.98

async-mutex:
  ██████████████████████████████████████████  706.09
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  712.44
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  724.81
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  842.51


```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  █████████  139.09
  ▓▓▓▓▓▓▓▓▓  144.50
  ▒▒▒▒▒▒▒▒▒  145.47
  ░░░░░░░░░░  158.68

manual:
  ████████████████  254.47
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  263.41
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  267.44
  ░░░░░░░░░░░░░░░░░  281.58

p-limit:
  ████████████████████████████████  516.37
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  529.23
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  549.75
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  606.59

async-mutex:
  ███████████████████████████████████████████  701.70
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  708.73
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  721.62
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  816.11


```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  134.50
  ▓▓▓▓▓▓▓▓▓  137.53
  ▒▒▒▒▒▒▒▒▒  138.47
  ░░░░░░░░░  152.23

manual:
  ██████████  162.16
  ▓▓▓▓▓▓▓▓▓▓  167.98
  ▒▒▒▒▒▒▒▒▒▒▒  170.36
  ░░░░░░░░░░░  183.59

p-limit:
  ████████████████████████████████  509.79
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  524.98
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  549.26
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  639.71

async-mutex:
  ████████████████████████████████████████████  708.24
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  713.70
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  726.89
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  808.05


```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  ████████████████████████████  245.56
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  245.88
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  256.55
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  308.20

fast-decode-uri-component:
  ███████████████████████████████████  309.99
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  313.07
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  323.25
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  365.66

native:
  ██████████████████████████████████████████████  408.45
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  419.50
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  425.74
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  439.79


```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  █  1.11
  ▓  1.06
  ▒  1.07
  ░  1.39

fast-decode-uri-component:
  █  2.02
  ▓  1.99
  ▒  2.00
  ░  2.32

native:
  ███████████████████████████████████████████████  435.86
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  446.23
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  457.82
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  467.63


```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  13.03
  ▓  11.52
  ▒  12.41
  ░░░  35.15

rou3 (jit):
  ███  32.48
  ▓▓▓  30.45
  ▒▒▒  31.53
  ░░░░░  61.25

mapl (regexp):
  ███  32.65
  ▓▓▓  32.91
  ▒▒▒  36.18
  ░░░░░  59.79

mapl (tree):
  ███  36.98
  ▓▓▓  35.37
  ▒▒▒  37.25
  ░░░░░░  65.79

hono (regexp):
  ████  49.36
  ▓▓▓▓  46.00
  ▒▒▒▒  52.87
  ░░░░░░  76.36

rou3 (tree):
  █████  54.19
  ▓▓▓▓  52.14
  ▒▒▒▒▒  54.86
  ░░░░░░░  80.05

find-my-way:
  ████████████  146.22
  ▓▓▓▓▓▓▓▓▓▓▓▓  139.71
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  162.82
  ░░░░░░░░░░░░░░░░░░░  220.89

hono (pattern):
  █████████████████████████████  342.56
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  331.12
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  346.40
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  593.62

hono (trie):
  ██████████████████████████████  353.58
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  327.74
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  336.51
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  552.76


```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  17.89
  ▓  16.90
  ▒  17.34
  ░░░  43.03

rou3 (jit):
  ██  32.36
  ▓▓  31.47
  ▒▒  31.98
  ░░░  58.81

mapl (tree):
  ██  37.54
  ▓▓  35.31
  ▒▒  38.90
  ░░░░  64.56

mapl (regexp):
  ██  40.35
  ▓▓  38.79
  ▒▒  40.23
  ░░░░  65.64

hono (regexp):
  ███  49.51
  ▓▓▓  48.90
  ▒▒▒  53.09
  ░░░░  71.78

rou3 (tree):
  ███  54.05
  ▓▓▓  51.54
  ▒▒▒  54.32
  ░░░░░  76.55

find-my-way:
  █████████████  227.68
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  225.37
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  233.56
  ░░░░░░░░░░░░░░░░░░░░  347.05

hono (pattern):
  █████████████████████  358.57
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  339.10
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  350.61
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  610.63

hono (trie):
  ██████████████████████████████████  570.00
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  522.47
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  544.67
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  848.00


```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  18.54
  ▓  18.16
  ▒  18.39
  ░░  39.58

mapl (tree):
  ██  32.91
  ▓▓  32.46
  ▒▒  34.76
  ░░░░  59.97

rou3 (jit):
  ██  34.02
  ▓▓  33.32
  ▒▒  34.22
  ░░░░  60.45

mapl (regexp):
  ██  34.07
  ▓▓  33.51
  ▒▒  36.30
  ░░░  59.16

hono (regexp):
  ███  47.39
  ▓▓▓  46.41
  ▒▒▒  52.32
  ░░░░  72.81

rou3 (tree):
  ███  51.63
  ▓▓▓  50.77
  ▒▒▒  51.46
  ░░░░░  77.64

find-my-way:
  █████████████  218.89
  ▓▓▓▓▓▓▓▓▓▓▓▓  209.83
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  231.51
  ░░░░░░░░░░░░░░░░░░  312.62

hono (pattern):
  ████████████████████  348.30
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  336.83
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  344.92
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  602.86

hono (trie):
  █████████████████████████████████  555.38
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  514.76
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  532.40
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  849.67


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.21
  ▓▓▓▓  0.20
  ▒▒▒▒▒  0.22
  ░░░░░░  0.28

mapl (regexp):
  ████████  0.37
  ▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░  0.41

mapl (tree):
  █████████  0.38
  ▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░  0.44

hono (pattern):
  ████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░░  0.72

find-my-way:
  █████████████  0.57
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
  ░░░░░░░░░░░░░░  0.62

hono (regexp):
  █████████████  0.58
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░  0.80

rou3 (jit):
  ████████████████  0.71
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.76
  ░░░░░░░░░░░░░░░░░░░░░░  0.97

rou3 (tree):
  █████████████████████████████████████  1.63
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.61
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.73
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.81

hono (trie):
  ██████████████████████████████████████████████  2.05
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.03
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.06
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.23


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.19
  ▓▓▓▓  0.19
  ▒▒▒▒▒  0.21
  ░░░░░░  0.27

mapl (regexp):
  ████████  0.35
  ▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒  0.35
  ░░░░░░░░░░░░  0.53

mapl (tree):
  ████████  0.35
  ▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒  0.34
  ░░░░░░░░░░░░░░  0.60

hono (regexp):
  ████████████  0.54
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░  0.72

hono (pattern):
  ████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
  ░░░░░░░░░░░░░░░  0.66

find-my-way:
  █████████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
  ░░░░░░░░░░░░░░  0.64

rou3 (jit):
  ██████████████████  0.78
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.76
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.89
  ░░░░░░░░░░░░░░░░░░░░░░  0.99

rou3 (tree):
  █████████████████████████████████████  1.64
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.81
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.83

hono (trie):
  ██████████████████████████████████████████████  2.06
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.03
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.07
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.22


```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.15
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░░░  0.20

mapl (tree):
  ████████  0.29
  ▓▓▓▓▓▓▓▓  0.28
  ▒▒▒▒▒▒▒▒  0.29
  ░░░░░░░░░░░░░░  0.48

mapl (regexp):
  ██████████  0.34
  ▓▓▓▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒▒▒  0.34
  ░░░░░░░░░░░░░░  0.47

find-my-way:
  ███████████  0.38
  ▓▓▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░░░░░  0.54

rou3 (jit):
  ███████████  0.39
  ▓▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░░  0.56

hono (regexp):
  ███████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
  ░░░░░░░░░░░░░░░░░░░░░  0.72

hono (pattern):
  ████████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░░  0.66

rou3 (tree):
  ███████████████████████████████████████  1.33
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.26
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.49
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.57

hono (trie):
  ██████████████████████████████████████████████  1.56
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.65
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.71


```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.19
  ▓▓▓▓▓  0.18
  ▒▒▒▒▒  0.18
  ░░░░░░░  0.27

mapl (regexp):
  █████████  0.36
  ▓▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░  0.46

mapl (tree):
  ██████████  0.38
  ▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░░░░░  0.59

rou3 (jit):
  ███████████  0.42
  ▓▓▓▓▓▓▓▓▓▓▓  0.42
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.46
  ░░░░░░░░░░░░░░░░░░  0.69

find-my-way:
  █████████████  0.49
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.47
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.48
  ░░░░░░░░░░░░░░░░░░░░░  0.82

hono (regexp):
  ███████████████  0.58
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
  ░░░░░░░░░░░░░░░░░░░░  0.77

hono (pattern):
  ███████████████  0.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
  ░░░░░░░░░░░░░░░░░░░  0.74

rou3 (tree):
  █████████████████████████████████████████  1.58
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.65
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.86

hono (trie):
  ██████████████████████████████████████████████  1.79
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.78
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.80
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.94


```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.18
  ▓▓▓▓  0.17
  ▒▒▒▒  0.18
  ░░░░░  0.24

hono (pattern):
  ██████  0.30
  ▓▓▓▓▓▓  0.28
  ▒▒▒▒▒▒  0.29
  ░░░░░░░░░░  0.50

mapl (regexp):
  ███████  0.32
  ▓▓▓▓▓▓▓  0.32
  ▒▒▒▒▒▒▒  0.32
  ░░░░░░░  0.35

mapl (tree):
  ████████  0.38
  ▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░░  0.57

rou3 (jit):
  ████████  0.39
  ▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░░  0.62

find-my-way:
  ██████████  0.46
  ▓▓▓▓▓▓▓▓▓  0.44
  ▒▒▒▒▒▒▒▒▒  0.45
  ░░░░░░░░░░░░░  0.61

hono (regexp):
  ██████████  0.49
  ▓▓▓▓▓▓▓▓▓▓  0.47
  ▒▒▒▒▒▒▒▒▒▒  0.50
  ░░░░░░░░░░░░░  0.62

rou3 (tree):
  ██████████████████████████████████  1.63
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.79
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.40

hono (trie):
  ██████████████████████████████████████  1.83
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.79
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.91
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.02


```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.17
  ▓▓▓▓  0.17
  ▒▒▒▒  0.17
  ░░░░░░  0.25

mapl (tree):
  ████████  0.33
  ▓▓▓▓▓▓▓▓  0.32
  ▒▒▒▒▒▒▒▒  0.33
  ░░░░░░░░░░░░░░  0.57

mapl (regexp):
  ██████████  0.39
  ▓▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░░░░  0.59

rou3 (jit):
  ███████████  0.43
  ▓▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒▒  0.45
  ░░░░░░░░░░░░░░░░░  0.69

find-my-way:
  ███████████  0.46
  ▓▓▓▓▓▓▓▓▓▓▓  0.44
  ▒▒▒▒▒▒▒▒▒▒▒  0.45
  ░░░░░░░░░░░░░░░░░░░  0.78

hono (pattern):
  ████████████  0.50
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.48
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.50
  ░░░░░░░░░░░░░░░░░░░░░░  0.87

hono (regexp):
  ██████████████  0.57
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
  ░░░░░░░░░░░░░░░░░░░░░░░  0.93

rou3 (tree):
  ████████████████████████████████████████  1.61
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.61
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.78
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.84

hono (trie):
  █████████████████████████████████████████████  1.80
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.78
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.79
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.02


```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  ██  21.47
  ▓▓  19.78
  ▒▒  20.31
  ░░░░  44.50

mapl (tree):
  ███  34.55
  ▓▓▓  34.45
  ▒▒▒  37.01
  ░░░░░  59.42

mapl (regexp):
  ███  36.01
  ▓▓▓  35.90
  ▒▒▒  37.30
  ░░░░░  60.08

rou3 (jit):
  ███  36.52
  ▓▓▓  34.10
  ▒▒▒  35.63
  ░░░░░  63.96

rou3 (tree):
  ████  50.35
  ▓▓▓▓  50.56
  ▒▒▒▒  50.93
  ░░░░░░  74.78

hono (regexp):
  ████  51.20
  ▓▓▓▓  52.17
  ▒▒▒▒▒  54.03
  ░░░░░░  73.37

find-my-way:
  ███████████████  174.81
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  162.67
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  193.39
  ░░░░░░░░░░░░░░░░░░░░  240.16

hono (trie):
  █████████████████████████████  346.93
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  325.80
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  335.51
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  562.68

hono (pattern):
  ██████████████████████████████  350.32
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  338.71
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  358.68
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  592.00


```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █  0.02
  ▓  0.02
  ▒  0.02
  ░  0.04

mapl (regexp):
  █  0.03
  ▓  0.03
  ▒  0.04
  ░  0.04

mapl (tree):
  █  0.04
  ▓  0.04
  ▒  0.04
  ░░  0.06

rou3 (jit):
  █  0.04
  ▓  0.04
  ▒  0.04
  ░░  0.07

rou3 (tree):
  ██  0.05
  ▓▓  0.05
  ▒▒  0.05
  ░░░  0.08

hono (regexp):
  ██  0.05
  ▓▓  0.05
  ▒▒  0.06
  ░░░  0.08

find-my-way:
  ████████████  0.34
  ▓▓▓▓▓▓▓▓▓▓▓  0.31
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░░░░  0.48

hono (pattern):
  ████████████  0.36
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░░░░░░░░░  0.61

hono (trie):
  ███████████████████████████████████████  1.16
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.13
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.16
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.47


```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.14
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░░  0.18

mapl (tree):
  ███████  0.28
  ▓▓▓▓▓▓▓  0.27
  ▒▒▒▒▒▒▒  0.28
  ░░░░░░░░░░░░  0.45

mapl (regexp):
  █████████  0.35
  ▓▓▓▓▓▓▓▓▓  0.35
  ▒▒▒▒▒▒▒▒▒  0.35
  ░░░░░░░░░░░░  0.47

find-my-way:
  ████████████  0.44
  ▓▓▓▓▓▓▓▓▓▓  0.39
  ▒▒▒▒▒▒▒▒▒▒▒  0.42
  ░░░░░░░░░░░░░░░░░░░  0.70

rou3 (jit):
  ██████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░░░░  0.70

hono (pattern):
  ██████████████  0.54
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
  ░░░░░░░░░░░░░░░░░  0.65

hono (regexp):
  ███████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░░  0.72

rou3 (tree):
  █████████████████████████████████████████  1.56
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.76

hono (trie):
  ██████████████████████████████████████████████  1.73
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.71
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.80
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.89


```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  2.67
  ▓  2.64
  ▒  2.69
  ░░  3.25

stnl (aot):
  █  2.74
  ▓  2.71
  ▒  2.78
  ░░  3.36

sury (jit):
  ██  3.92
  ▓▓  3.97
  ▒▒  4.02
  ░░  4.10

arktype:
  ██  5.18
  ▓▓  5.13
  ▒▒  5.20
  ░░░  5.80

typebox (jit):
  ███  5.81
  ▓▓▓  5.72
  ▒▒▒  5.81
  ░░░  6.82

typebox (aot):
  ███  5.88
  ▓▓▓  5.82
  ▒▒▒  5.94
  ░░░  6.55

typia (aot):
  ████  9.65
  ▓▓▓▓  9.62
  ▒▒▒▒▒  9.69
  ░░░░░  10.02

zod:
  ██████████████████  37.89
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  37.83
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  38.06
  ░░░░░░░░░░░░░░░░░░  38.16

valibot:
  ████████████████████  44.00
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  43.50
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  44.31
  ░░░░░░░░░░░░░░░░░░░░░░  46.49

effect-schema:
  █████████████████████████████████████████████████  106.00
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  105.97
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  106.12
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  107.64


```
<a name="3_bm9kZS0yNS42LjE=">

### node-25.6.1
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (mutex):
  ███████  126.19
  ▓▓▓▓▓▓▓  123.02
  ▒▒▒▒▒▒▒  133.43
  ░░░░░░░░  152.79

manual:
  ███████  136.16
  ▓▓▓▓▓▓▓  132.31
  ▒▒▒▒▒▒▒▒  143.00
  ░░░░░░░░░  160.55

ciorent (semaphore):
  ████████  155.66
  ▓▓▓▓▓▓▓▓  149.02
  ▒▒▒▒▒▒▒▒▒  162.19
  ░░░░░░░░░░  193.63

p-mutex:
  ██████████████████  337.11
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  342.35
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  356.91
  ░░░░░░░░░░░░░░░░░░░░░  400.01

p-limit:
  ██████████████████████████  491.39
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  475.45
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  502.97
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  654.65

async-mutex:
  █████████████████████████████████████  693.09
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  663.94
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  725.98
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  938.72


```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ███  0.16
  ▓▓▓  0.15
  ▒▒▒  0.16
  ░░░  0.17

p-limit:
  ████████  0.49
  ▓▓▓▓▓▓▓▓  0.49
  ▒▒▒▒▒▒▒▒▒  0.51
  ░░░░░░░░░░░  0.63

async-mutex:
  ████████████  0.69
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.68
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.72
  ░░░░░░░░░░░░░░  0.84

manual:
  █████████████████████████████████  1.93
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.89
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.93
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.93


```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ████  0.15
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░░  0.17

p-limit:
  ██████████████  0.49
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░░░░  0.63

async-mutex:
  ███████████████████  0.68
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.70
  ░░░░░░░░░░░░░░░░░░░░░░░  0.82

manual:
  ███████████████████████████████████  1.27
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.11
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.70
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.80


```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  151.63
  ▓▓▓▓▓▓▓▓  151.31
  ▒▒▒▒▒▒▒▒  152.74
  ░░░░░░░░░  167.10

p-limit:
  ██████████████████████████  488.14
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  475.94
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  501.40
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  631.66

async-mutex:
  ██████████████████████████████████  647.76
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  646.14
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  655.70
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  770.92

manual:
  ████████████████████████████████████████  748.74
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  691.34
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  887.98
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  940.11


```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ██████████  149.69
  ▓▓▓▓▓▓▓▓▓▓  151.33
  ▒▒▒▒▒▒▒▒▒▒  153.88
  ░░░░░░░░░░░  170.19

manual:
  ██████████████████████████████  445.69
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  463.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  487.95
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  528.57

p-limit:
  ████████████████████████████████  484.56
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  473.72
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  503.16
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  618.59

async-mutex:
  ███████████████████████████████████████████  648.74
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  643.82
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  655.46
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  754.19


```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ██████████  147.10
  ▓▓▓▓▓▓▓▓▓▓  147.48
  ▒▒▒▒▒▒▒▒▒▒  149.38
  ░░░░░░░░░░░  164.47

manual:
  █████████████████  264.19
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  267.25
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  275.70
  ░░░░░░░░░░░░░░░░░░░  289.42

p-limit:
  ███████████████████████████████  483.22
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  474.36
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  500.75
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  637.71

async-mutex:
  ██████████████████████████████████████████  648.82
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  643.81
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  656.17
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  773.03


```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  █████████  142.74
  ▓▓▓▓▓▓▓▓▓  142.62
  ▒▒▒▒▒▒▒▒▒  143.76
  ░░░░░░░░░░  158.03

manual:
  ███████████  170.33
  ▓▓▓▓▓▓▓▓▓▓▓  169.03
  ▒▒▒▒▒▒▒▒▒▒▒  173.80
  ░░░░░░░░░░░░░  192.96

p-limit:
  ████████████████████████████████  490.04
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  480.15
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  502.54
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  649.67

async-mutex:
  ██████████████████████████████████████████  645.48
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  641.30
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  653.83
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  761.55


```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  ███████████████████████████████████  255.89
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  256.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  264.24
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  301.87

fast-decode-uri-component:
  ███████████████████████████████████████████  316.87
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  319.67
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  321.81
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  356.66

native:
  █████████████████████████████████████████████  335.95
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  334.39
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  353.47
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  370.49


```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  █  1.18
  ▓  1.06
  ▒  1.34
  ░  1.36

fast-decode-uri-component:
  █  2.12
  ▓  2.24
  ▒  2.26
  ░  2.28

native:
  ██████████████████████████████████████████████  272.34
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  278.33
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  282.45
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  296.08


```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  12.67
  ▓  12.03
  ▒  12.15
  ░░░  35.11

rou3 (jit):
  ███  32.14
  ▓▓▓  30.23
  ▒▒▒  31.20
  ░░░░░  61.61

mapl (tree):
  ███  37.65
  ▓▓▓  36.00
  ▒▒▒  36.90
  ░░░░░░  67.56

mapl (regexp):
  ███  38.35
  ▓▓▓  38.16
  ▒▒▒  39.08
  ░░░░░  63.21

rou3 (tree):
  █████  53.38
  ▓▓▓▓  52.39
  ▒▒▒▒▒  53.88
  ░░░░░░  75.63

hono (regexp):
  █████  55.21
  ▓▓▓▓  51.38
  ▒▒▒▒▒▒  67.15
  ░░░░░░  76.24

find-my-way:
  ███████████  128.17
  ▓▓▓▓▓▓▓▓▓▓  119.05
  ▒▒▒▒▒▒▒▒▒▒▒  127.31
  ░░░░░░░░░░░░░░░░░░░  219.36

hono (pattern):
  █████████████████████████████  337.87
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  320.16
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  326.21
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  590.30

hono (trie):
  █████████████████████████████  339.32
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  294.67
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  347.29
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  529.17


```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  19.04
  ▓  18.19
  ▒  18.75
  ░░░  40.98

rou3 (jit):
  ██  31.72
  ▓▓  31.73
  ▒▒  31.98
  ░░░░  61.29

mapl (tree):
  ██  34.43
  ▓▓  32.17
  ▒▒  36.06
  ░░░░  59.55

mapl (regexp):
  ██  34.48
  ▓▓  33.17
  ▒▒  36.06
  ░░░░  57.88

hono (regexp):
  ███  50.18
  ▓▓▓  47.35
  ▒▒▒  53.47
  ░░░░░  73.13

rou3 (tree):
  ███  52.22
  ▓▓▓  51.06
  ▒▒▒  52.88
  ░░░░░  74.16

find-my-way:
  ███████████████  236.82
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  209.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  250.03
  ░░░░░░░░░░░░░░░░░░░░░░░░  369.26

hono (pattern):
  ██████████████████████  336.10
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  322.05
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  335.79
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  598.23

hono (trie):
  ████████████████████████████████████  544.05
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  466.32
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  740.97
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  764.58


```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  22.40
  ▓  19.33
  ▒  20.36
  ░░░  43.09

rou3 (jit):
  ██  33.78
  ▓▓  33.28
  ▒▒  33.59
  ░░░░  63.56

mapl (regexp):
  ██  34.33
  ▓▓  33.05
  ▒▒  36.19
  ░░░░  57.39

mapl (tree):
  ██  36.93
  ▓▓  36.72
  ▒▒▒  38.62
  ░░░░  61.43

hono (regexp):
  ███  48.10
  ▓▓▓  46.62
  ▒▒▒  49.15
  ░░░░░  72.28

rou3 (tree):
  ███  53.05
  ▓▓▓  50.95
  ▒▒▒  52.61
  ░░░░░  75.16

find-my-way:
  ███████████████  237.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  206.21
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  310.18
  ░░░░░░░░░░░░░░░░░░░░░░░  350.90

hono (pattern):
  █████████████████████  321.71
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  317.03
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  324.82
  ░░░░░░░░░░░░░░░░░░░░░░░  353.90

hono (trie):
  ███████████████████████████████████  538.27
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  465.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  726.71
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  766.38


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.20
  ▓▓▓▓  0.19
  ▒▒▒▒▒  0.20
  ░░░░░░░  0.30

mapl (regexp):
  ████████  0.35
  ▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░  0.38

mapl (tree):
  ████████  0.37
  ▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░  0.41

find-my-way:
  ████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
  ░░░░░░░░░░░░░░  0.61

hono (pattern):
  █████████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
  ░░░░░░░░░░░░░░░░  0.71

hono (regexp):
  █████████████  0.57
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
  ░░░░░░░░░░░░░░░░░  0.74

rou3 (jit):
  ███████████████  0.66
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.70
  ░░░░░░░░░░░░░░░░░░░  0.85

rou3 (tree):
  █████████████████████████████████  1.46
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.38
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.65
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.80

hono (trie):
  ███████████████████████████████████████████████  2.07
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.11
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.15
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.22


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.17
  ▓▓▓▓  0.17
  ▒▒▒▒  0.18
  ░░░░░  0.23

mapl (regexp):
  ███████  0.30
  ▓▓▓▓▓▓▓  0.29
  ▒▒▒▒▒▒▒  0.31
  ░░░░░░░░░░░░  0.51

mapl (tree):
  ███████  0.33
  ▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒  0.33
  ░░░░░░░░░  0.39

find-my-way:
  ████████████  0.52
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░  0.56

hono (regexp):
  █████████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
  ░░░░░░░░░░░░░░░░  0.70

hono (pattern):
  █████████████  0.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.63
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
  ░░░░░░░░░░░░░░░  0.68

rou3 (jit):
  ███████████████  0.68
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
  ░░░░░░░░░░░░░░░░░░░  0.83

rou3 (tree):
  █████████████████████████████████  1.46
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.39
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.64
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.74

hono (trie):
  ██████████████████████████████████████████████  2.03
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.11
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.21


```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.14
  ▓▓▓▓  0.13
  ▒▒▒▒  0.14
  ░░░░░░  0.19

mapl (tree):
  ████████  0.27
  ▓▓▓▓▓▓▓▓  0.27
  ▒▒▒▒▒▒▒▒  0.27
  ░░░░░░░░░  0.30

mapl (regexp):
  ██████████  0.33
  ▓▓▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒▒▒▒  0.33
  ░░░░░░░░░░░░░░░  0.49

rou3 (jit):
  ███████████  0.38
  ▓▓▓▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
  ░░░░░░░░░░░░░░░░  0.53

find-my-way:
  ███████████  0.38
  ▓▓▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.41
  ░░░░░░░░░░░░░  0.42

hono (regexp):
  ███████████████  0.50
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░░░░░  0.64

hono (pattern):
  █████████████████  0.57
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
  ░░░░░░░░░░░░░░░░░░░░  0.68

rou3 (tree):
  ████████████████████████████████████████  1.33
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.41
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.44
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.53

hono (trie):
  ██████████████████████████████████████████████  1.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.59
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.67


```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.19
  ▓▓▓▓▓  0.17
  ▒▒▒▒▒▒  0.23
  ░░░░░░░░  0.29

mapl (regexp):
  ████████  0.29
  ▓▓▓▓▓▓▓▓  0.28
  ▒▒▒▒▒▒▒▒  0.29
  ░░░░░░░░░░░░░  0.49

mapl (tree):
  ██████████  0.36
  ▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒  0.35
  ░░░░░░░░░░░░░░░░░  0.65

rou3 (jit):
  ██████████  0.39
  ▓▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.43
  ░░░░░░░░░░░░░  0.49

find-my-way:
  █████████████  0.49
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
  ░░░░░░░░░░░░░░  0.52

hono (regexp):
  ██████████████  0.52
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░░░  0.66

hono (pattern):
  ███████████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
  ░░░░░░░░░░░░░░░░░░░░░  0.78

rou3 (tree):
  ███████████████████████████████████████  1.45
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.56
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.66

hono (trie):
  ███████████████████████████████████████████████  1.74
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.73
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.76
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.86


```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.18
  ▓▓▓▓▓  0.17
  ▒▒▒▒▒  0.17
  ░░░░░░░  0.27

mapl (regexp):
  ███████  0.26
  ▓▓▓▓▓▓  0.24
  ▒▒▒▒▒▒▒  0.25
  ░░░░░░░░░░░  0.43

mapl (tree):
  █████████  0.32
  ▓▓▓▓▓▓▓▓▓  0.32
  ▒▒▒▒▒▒▒▒▒  0.32
  ░░░░░░░░░░  0.38

hono (pattern):
  █████████  0.32
  ▓▓▓▓▓▓▓▓  0.29
  ▒▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░  0.49

rou3 (jit):
  ██████████  0.38
  ▓▓▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░░░░  0.52

find-my-way:
  ████████████  0.44
  ▓▓▓▓▓▓▓▓▓▓▓  0.43
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.44
  ░░░░░░░░░░░░░░  0.52

hono (regexp):
  █████████████  0.47
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
  ░░░░░░░░░░░░░░░░░  0.65

rou3 (tree):
  ███████████████████████████████████████  1.47
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.60
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.61
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.66

hono (trie):
  ███████████████████████████████████████████████  1.75
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.73
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.77
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.87


```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.16
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░░░░░  0.29

mapl (tree):
  ████████  0.32
  ▓▓▓▓▓▓▓▓  0.31
  ▒▒▒▒▒▒▒▒  0.31
  ░░░░░░░░░░░  0.44

mapl (regexp):
  ████████  0.32
  ▓▓▓▓▓▓▓▓  0.31
  ▒▒▒▒▒▒▒▒  0.32
  ░░░░░░░░░░░  0.43

rou3 (jit):
  ██████████  0.38
  ▓▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░░  0.52

find-my-way:
  ███████████  0.41
  ▓▓▓▓▓▓▓▓▓▓  0.40
  ▒▒▒▒▒▒▒▒▒▒▒  0.41
  ░░░░░░░░░░░░░░  0.54

hono (regexp):
  ██████████████  0.52
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░░  0.67

hono (pattern):
  ██████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░░░░░░░░░░  0.94

rou3 (tree):
  █████████████████████████████████████  1.41
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.32
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.56
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.61

hono (trie):
  █████████████████████████████████████████████  1.73
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.72
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.76
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.92


```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  ██  21.27
  ▓▓  19.98
  ▒▒  20.90
  ░░░░  44.56

mapl (tree):
  ███  33.00
  ▓▓▓  32.41
  ▒▒▒  34.09
  ░░░░░  59.97

rou3 (jit):
  ███  36.05
  ▓▓▓  34.28
  ▒▒▒  35.04
  ░░░░░░  69.22

mapl (regexp):
  ███  38.16
  ▓▓▓  36.36
  ▒▒▒  37.15
  ░░░░░  60.77

hono (regexp):
  ████  52.51
  ▓▓▓▓  49.28
  ▒▒▒▒▒  55.18
  ░░░░░░░  77.97

rou3 (tree):
  █████  53.67
  ▓▓▓▓  50.15
  ▒▒▒▒  53.22
  ░░░░░░░  77.92

find-my-way:
  █████████████  152.51
  ▓▓▓▓▓▓▓▓▓▓▓▓  143.98
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  149.88
  ░░░░░░░░░░░░░░░░░░░░░  247.45

hono (pattern):
  █████████████████████████████  348.82
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  317.20
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  327.53
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  592.67

hono (trie):
  ██████████████████████████████  351.33
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  303.21
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  357.73
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  533.22


```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █  0.02
  ▓  0.02
  ▒  0.02
  ░  0.04

mapl (tree):
  █  0.04
  ▓  0.04
  ▒  0.04
  ░░  0.06

mapl (regexp):
  █  0.04
  ▓  0.04
  ▒  0.04
  ░░  0.06

rou3 (jit):
  █  0.04
  ▓  0.04
  ▒  0.04
  ░░░  0.07

rou3 (tree):
  ██  0.05
  ▓▓  0.05
  ▒▒  0.05
  ░░░  0.07

hono (regexp):
  ██  0.05
  ▓▓  0.05
  ▒▒  0.06
  ░░░  0.08

hono (pattern):
  ████████████  0.33
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.32
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.33
  ░░░░░░░░░░░░░░░░░░░░░░  0.61

find-my-way:
  █████████████  0.35
  ▓▓▓▓▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
  ░░░░░░░░░░░░░░░░░  0.47

hono (trie):
  ██████████████████████████████████████████  1.16
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.06
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.34
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.37


```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ███  0.13
  ▓▓▓  0.13
  ▒▒▒  0.13
  ░░░░░  0.18

mapl (tree):
  ███████  0.27
  ▓▓▓▓▓▓▓  0.26
  ▒▒▒▒▒▒▒  0.27
  ░░░░░░░░░░░  0.42

mapl (regexp):
  █████████  0.33
  ▓▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒▒  0.31
  ░░░░░░░░░░░░░░  0.52

find-my-way:
  ██████████  0.39
  ▓▓▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░░░░░░░  0.65

rou3 (jit):
  █████████████  0.49
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.46
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░░  0.59

hono (pattern):
  ██████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
  ░░░░░░░░░░░░░░░░░  0.64

hono (regexp):
  ██████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
  ░░░░░░░░░░░░░░░░  0.61

rou3 (tree):
  ██████████████████████████████████████  1.42
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.37
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.43
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.71

hono (trie):
  █████████████████████████████████████████████  1.70
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.73
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.87


```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (aot):
  █  3.19
  ▓  3.15
  ▒  3.23
  ░░  3.79

stnl (jit):
  ██  3.28
  ▓▓  3.29
  ▒▒  3.35
  ░░  3.77

sury (jit):
  ██  4.28
  ▓▓  4.28
  ▒▒  4.34
  ░░  4.52

arktype:
  ███  5.61
  ▓▓▓  5.63
  ▒▒▒  5.68
  ░░░  5.77

typebox (jit):
  ███  5.69
  ▓▓▓  5.64
  ▒▒▒  5.75
  ░░░  6.33

typebox (aot):
  ███  6.56
  ▓▓▓  6.52
  ▒▒▒  6.71
  ░░░  6.91

typia (aot):
  █████  10.13
  ▓▓▓▓▓  10.13
  ▒▒▒▒▒  10.21
  ░░░░░  10.62

zod:
  █████████████████  36.60
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  35.87
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  39.28
  ░░░░░░░░░░░░░░░░░░░░  43.49

valibot:
  ███████████████████  41.73
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  39.29
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  44.73
  ░░░░░░░░░░░░░░░░░░░░░  45.67

effect-schema:
  █████████████████████████████████████████████████  107.42
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  107.40
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  107.95
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  108.76


```
<a name="3_ZGVuby0yLjYuOQ==">

### deno-2.6.9
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (mutex):
  █████  118.80
  ▓▓▓▓▓▓  123.33
  ▒▒▒▒▒▒  130.75
  ░░░░░░░  145.40

manual:
  ██████  134.79
  ▓▓▓▓▓▓  134.03
  ▒▒▒▒▒▒▒  144.46
  ░░░░░░░  160.31

ciorent (semaphore):
  ███████  151.02
  ▓▓▓▓▓▓▓  149.90
  ▒▒▒▒▒▒▒  162.58
  ░░░░░░░░  181.99

p-mutex:
  ███████████████  329.50
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  341.92
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  375.74
  ░░░░░░░░░░░░░░░░░░░  422.70

p-limit:
  ████████████████████████  530.10
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  538.02
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  568.44
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  642.23

async-mutex:
  ███████████████████████████████████  765.79
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  733.32
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  809.50
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1085.54


```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  ████  0.15
  ▓▓▓▓  0.15
  ▒▒▒▒  0.15
  ░░░░░  0.17

p-limit:
  ██████████████  0.53
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
  ░░░░░░░░░░░░░░░░░  0.63

async-mutex:
  ████████████████████  0.73
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.73
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.77
  ░░░░░░░░░░░░░░░░░░░░░░░  0.86

manual:
  ████████████████████████████████████████████████  1.74
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.74
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.76
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.83


```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

ciorent (semaphore):
  █████  0.15
  ▓▓▓▓▓  0.15
  ▒▒▒▒▒  0.15
  ░░░░░░  0.17

p-limit:
  █████████████████  0.52
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░░░░  0.64

async-mutex:
  ███████████████████████  0.69
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.71
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
  ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.80

manual:
  ██████████████████████████████████  1.03
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.06
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.52


```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  █████████  143.85
  ▓▓▓▓▓▓▓▓▓  147.98
  ▒▒▒▒▒▒▒▒▒  150.22
  ░░░░░░░░░░  164.32

p-limit:
  ████████████████████████████████  519.11
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  533.38
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  552.64
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  614.46

manual:
  ███████████████████████████████████████████  687.67
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  718.11
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  744.12
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  808.36

async-mutex:
  ███████████████████████████████████████████  695.26
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  707.50
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  718.91
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  801.72


```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  █████████  141.15
  ▓▓▓▓▓▓▓▓▓  148.32
  ▒▒▒▒▒▒▒▒▒  149.74
  ░░░░░░░░░░  165.31

manual:
  ████████████████████████  394.03
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  410.88
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  423.03
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░  453.23

p-limit:
  ████████████████████████████████  523.01
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  539.17
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  557.90
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  620.99

async-mutex:
  ███████████████████████████████████████████  708.65
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  709.78
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  722.70
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  825.30


```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  █████████  138.14
  ▓▓▓▓▓▓▓▓▓  144.78
  ▒▒▒▒▒▒▒▒▒  146.63
  ░░░░░░░░░░  159.74

manual:
  ███████████████  241.70
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  246.96
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  260.69
  ░░░░░░░░░░░░░░░░░  276.30

p-limit:
  █████████████████████████████████  524.81
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  534.50
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  553.10
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  605.64

async-mutex:
  ███████████████████████████████████████████  691.94
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  706.97
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  723.73
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  797.78


```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

ciorent (semaphore):
  ████████  134.09
  ▓▓▓▓▓▓▓▓  140.22
  ▒▒▒▒▒▒▒▒  141.80
  ░░░░░░░░░  155.16

manual:
  █████████  154.02
  ▓▓▓▓▓▓▓▓▓  161.38
  ▒▒▒▒▒▒▒▒▒  163.98
  ░░░░░░░░░░  177.63

p-limit:
  ██████████████████████████████  514.77
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  523.68
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  550.88
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  617.24

async-mutex:
  ████████████████████████████████████████  691.81
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  707.81
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  724.70
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  864.40


```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  █████████████████████  197.00
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  204.84
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  207.63
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  258.90

fast-decode-uri-component:
  ██████████████████████████████████  311.29
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  308.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  318.47
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  363.38

native:
  ████████████████████████████████████████████  408.43
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  432.74
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  441.53
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  462.43


```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

deuri:
  █  1.06
  ▓  1.06
  ▒  1.07
  ░  1.11

fast-decode-uri-component:
  █  2.06
  ▓  2.05
  ▒  2.08
  ░  2.16

native:
  █████████████████████████████████████████████  416.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  438.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  448.49
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  457.89


```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  12.15
  ▓  10.65
  ▒  11.81
  ░░░░  36.95

rou3 (jit):
  ███  31.94
  ▓▓▓  28.99
  ▒▒▒  31.27
  ░░░░░░  61.37

mapl (tree):
  ███  33.64
  ▓▓▓  33.75
  ▒▒▒▒  34.94
  ░░░░░░  60.78

mapl (regexp):
  ███  33.85
  ▓▓▓  33.61
  ▒▒▒▒  34.99
  ░░░░░░░  72.44

hono (regexp):
  █████  50.64
  ▓▓▓▓▓  49.91
  ▒▒▒▒▒  53.35
  ░░░░░░░░  79.38

rou3 (tree):
  ██████  59.19
  ▓▓▓▓▓▓  55.15
  ▒▒▒▒▒▒▒▒  74.52
  ░░░░░░░░  81.97

find-my-way:
  ███████████████  148.74
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.79
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  168.25
  ░░░░░░░░░░░░░░░░░░░░░░  215.63

hono (trie):
  ███████████████████████████████████  341.89
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  330.12
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  361.85
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  460.73

hono (pattern):
  ███████████████████████████████████████  377.89
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  367.97
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  373.13
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  489.66


```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  17.26
  ▓  15.64
  ▒  16.93
  ░░░  39.17

mapl (regexp):
  ██  31.07
  ▓▓  31.51
  ▒▒▒  34.53
  ░░░  38.50

rou3 (jit):
  ███  33.74
  ▓▓  30.41
  ▒▒▒  33.16
  ░░░░░  62.02

mapl (tree):
  ███  39.99
  ▓▓▓  35.77
  ▒▒▒▒  55.87
  ░░░░░  61.62

hono (regexp):
  ███  45.33
  ▓▓▓▓  47.00
  ▒▒▒▒  50.18
  ░░░░░░  73.13

rou3 (tree):
  ████  47.77
  ▓▓▓▓  51.23
  ▒▒▒▒  53.57
  ░░░░░░  77.05

find-my-way:
  ████████████████  215.05
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  211.08
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  221.79
  ░░░░░░░░░░░░░░░░░░░░░░░░░░  346.39

hono (pattern):
  █████████████████████████████  380.77
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  374.08
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  378.92
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  474.89

hono (trie):
  ███████████████████████████████████████████  562.29
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  557.75
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  572.91
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  658.17


```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  █  18.67
  ▓  16.66
  ▒  18.46
  ░░░  39.86

mapl (regexp):
  ██  31.19
  ▓▓  30.28
  ▒▒▒  33.93
  ░░░░  58.79

mapl (tree):
  ██  31.48
  ▓▓  30.32
  ▒▒▒  33.45
  ░░░░  59.07

rou3 (jit):
  ██  31.96
  ▓▓  31.66
  ▒▒  33.05
  ░░░░░  62.44

hono (regexp):
  ███  46.44
  ▓▓▓▓  47.61
  ▒▒▒▒  50.59
  ░░░░░  60.29

rou3 (tree):
  ████  49.30
  ▓▓▓▓  50.42
  ▒▒▒▒  52.24
  ░░░░░░  78.07

find-my-way:
  ████████████████  211.23
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  203.35
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  223.78
  ░░░░░░░░░░░░░░░░░░░░░░░░  315.76

hono (pattern):
  ████████████████████████████  376.75
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  372.66
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  376.83
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  475.15

hono (trie):
  ███████████████████████████████████████████  572.11
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  564.28
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  580.68
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  664.11


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.20
  ▓▓▓▓▓  0.20
  ▒▒▒▒▒  0.20
  ░░░░░░░  0.30

mapl (regexp):
  ██████████  0.44
  ▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒  0.44
  ░░░░░░░░░░░░░░░░  0.69

mapl (tree):
  ███████████  0.47
  ▓▓▓▓▓▓▓▓▓▓  0.45
  ▒▒▒▒▒▒▒▒▒▒▒  0.47
  ░░░░░░░░░░░░░░░░░░  0.76

hono (pattern):
  █████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.53
  ░░░░░░░░░░░░░░░░░░░░░  0.91

find-my-way:
  █████████████  0.57
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
  ░░░░░░░░░░░░░░  0.61

hono (regexp):
  ██████████████  0.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
  ░░░░░░░░░░░░░░░░░░░░░  0.91

rou3 (jit):
  ████████████████  0.70
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.74
  ░░░░░░░░░░░░░░░░░░░░░░  0.94

rou3 (tree):
  ███████████████████████████████████  1.50
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.54
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.66

hono (trie):
  ██████████████████████████████████████████████  2.01
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.00
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.02
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.17


```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.19
  ▓▓▓▓▓  0.19
  ▒▒▒▒▒  0.19
  ░░░░░  0.22

mapl (regexp):
  █████████  0.38
  ▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒  0.39
  ░░░░░░░░░░  0.43

mapl (tree):
  ███████████  0.47
  ▓▓▓▓▓▓▓▓▓▓  0.43
  ▒▒▒▒▒▒▒▒▒▒▒  0.46
  ░░░░░░░░░░░░░░░░░░  0.77

find-my-way:
  █████████████  0.55
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░░░░░  0.93

hono (pattern):
  ██████████████  0.58
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
  ░░░░░░░░░░░░░░░░░░░░░  0.87

hono (regexp):
  ██████████████  0.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
  ░░░░░░░░░░░░░░░░░░░░░░  0.93

rou3 (jit):
  ██████████████████  0.75
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.87
  ░░░░░░░░░░░░░░░░░░░░░░░  0.97

rou3 (tree):
  ████████████████████████████████████  1.51
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.55
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.62

hono (trie):
  ████████████████████████████████████████████████  2.02
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.02
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.04
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.09


```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.15
  ▓▓▓▓▓  0.16
  ▒▒▒▒▒  0.16
  ░░░░░░  0.19

rou3 (jit):
  ██████████  0.30
  ▓▓▓▓▓▓▓▓▓▓  0.30
  ▒▒▒▒▒▒▒▒▒▒  0.30
  ░░░░░░░░░░░░░░░░░  0.51

mapl (tree):
  ████████████  0.37
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.37
  ░░░░░░░░░░░░░░░░░░░░  0.61

mapl (regexp):
  █████████████  0.39
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.37
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.40
  ░░░░░░░░░░░░░░░░░░░░░  0.64

find-my-way:
  █████████████  0.39
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
  ░░░░░░░░░░░░░░░░░░░░  0.61

hono (regexp):
  ██████████████████  0.54
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.88

hono (pattern):
  ███████████████████  0.58
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.89

rou3 (tree):
  █████████████████████████████████████████  1.25
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.27
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.29
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.34

hono (trie):
  ████████████████████████████████████████████████  1.48
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.48
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.49
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.54


```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.19
  ▓▓▓▓▓  0.18
  ▒▒▒▒▒  0.19
  ░░░░░░░  0.28

rou3 (jit):
  ██████████  0.39
  ▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░░░░  0.62

mapl (regexp):
  ███████████  0.41
  ▓▓▓▓▓▓▓▓▓▓  0.39
  ▒▒▒▒▒▒▒▒▒▒▒  0.41
  ░░░░░░░░░░░░░░░░░░  0.67

mapl (tree):
  ████████████  0.44
  ▓▓▓▓▓▓▓▓▓▓▓  0.42
  ▒▒▒▒▒▒▒▒▒▒▒  0.43
  ░░░░░░░░░░░░░░░░░░░░  0.76

find-my-way:
  █████████████  0.49
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.50
  ░░░░░░░░░░░░░░  0.53

hono (regexp):
  ███████████████  0.56
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
  ░░░░░░░░░░░░░░░░░░░░░░░  0.87

hono (pattern):
  ████████████████  0.59
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
  ░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

rou3 (tree):
  ████████████████████████████████████  1.37
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.39
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.41
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.47

hono (trie):
  ████████████████████████████████████████████████  1.81
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.81
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.83
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.88


```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █████  0.18
  ▓▓▓▓▓  0.18
  ▒▒▒▒▒  0.18
  ░░░░░░░  0.25

hono (pattern):
  ████████  0.29
  ▓▓▓▓▓▓▓  0.28
  ▒▒▒▒▒▒▒▒  0.29
  ░░░░░░░░░░░░  0.47

rou3 (jit):
  ██████████  0.40
  ▓▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒▒  0.39
  ░░░░░░░░░░░░░░░░░  0.65

mapl (regexp):
  ██████████  0.40
  ▓▓▓▓▓▓▓▓▓  0.36
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.44
  ░░░░░░░░░░░░░░░░  0.61

mapl (tree):
  ███████████  0.43
  ▓▓▓▓▓▓▓▓▓▓▓  0.42
  ▒▒▒▒▒▒▒▒▒▒▒  0.43
  ░░░░░░░░░░░░░░░░░░░  0.71

hono (regexp):
  █████████████  0.49
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.47
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
  ░░░░░░░░░░░░░░░░░░░░░  0.82

find-my-way:
  █████████████  0.50
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
  ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
  ░░░░░░░░░░░░░░░░░  0.66

rou3 (tree):
  ████████████████████████████████████  1.37
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.38
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.40
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.45

hono (trie):
  ████████████████████████████████████████████████  1.82
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.81
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.83
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.91


```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  ████  0.17
  ▓▓▓▓  0.17
  ▒▒▒▒  0.17
  ░░░░░░  0.24

rou3 (jit):
  ██████████  0.37
  ▓▓▓▓▓▓▓▓▓  0.34
  ▒▒▒▒▒▒▒▒▒▒  0.36
  ░░░░░░░░░░░░░░░░  0.61

mapl (regexp):
  ███████████  0.42
  ▓▓▓▓▓▓▓▓▓▓  0.39
  ▒▒▒▒▒▒▒▒▒▒▒  0.42
  ░░░░░░░░░░░░░░░░░░  0.68

mapl (tree):
  ████████████  0.44
  ▓▓▓▓▓▓▓▓▓▓▓  0.41
  ▒▒▒▒▒▒▒▒▒▒▒  0.43
  ░░░░░░░░░░░░░░░░░░░░  0.74

find-my-way:
  ████████████  0.45
  ▓▓▓▓▓▓▓▓▓▓▓▓  0.45
  ▒▒▒▒▒▒▒▒▒▒▒▒  0.46
  ░░░░░░░░░░░░░  0.50

hono (pattern):
  █████████████  0.51
  ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
  ░░░░░░░░░░░░░░░  0.58

hono (regexp):
  ████████████████  0.61
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.60
  ░░░░░░░░░░░░░░░░░░░░░░░░░  0.94

rou3 (tree):
  ████████████████████████████████████  1.36
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.39
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.40
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.43

hono (trie):
  ████████████████████████████████████████████████  1.82
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.81
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.84
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.89


```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

mapl (jit):
  ██  16.93
  ▓▓  17.24
  ▒▒  18.00
  ░░░░  39.59

mapl (regexp):
  ███  31.13
  ▓▓▓  30.89
  ▒▒▒  33.78
  ░░░░░░  59.06

mapl (tree):
  ███  31.45
  ▓▓▓  30.67
  ▒▒▒  33.76
  ░░░░░░  55.52

rou3 (jit):
  ███  33.75
  ▓▓▓  33.74
  ▒▒▒▒  35.00
  ░░░░░░░  65.40

hono (regexp):
  █████  49.01
  ▓▓▓▓▓  47.53
  ▒▒▒▒▒  50.85
  ░░░░░░░░  78.38

rou3 (tree):
  █████  50.38
  ▓▓▓▓▓  51.31
  ▒▒▒▒▒  53.16
  ░░░░░░░░  78.93

find-my-way:
  ██████████████████  170.86
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  165.44
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  183.07
  ░░░░░░░░░░░░░░░░░░░░░░░░░  239.92

hono (trie):
  ██████████████████████████████████  332.24
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  326.32
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  332.33
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  442.49

hono (pattern):
  ███████████████████████████████████████  378.99
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  370.83
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  375.27
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  484.22


```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █  0.02
  ▓  0.02
  ▒  0.02
  ░░  0.04

mapl (regexp):
  █  0.03
  ▓  0.03
  ▒  0.03
  ░░  0.04

mapl (tree):
  █  0.03
  ▓  0.03
  ▒▒  0.04
  ░░░  0.06

rou3 (jit):
  ██  0.04
  ▓▓  0.04
  ▒▒  0.04
  ░░░  0.07

rou3 (tree):
  ██  0.05
  ▓▓  0.05
  ▒▒  0.05
  ░░░  0.08

hono (regexp):
  ██  0.05
  ▓▓  0.05
  ▒▒  0.05
  ░░░  0.08

find-my-way:
  ███████████████  0.36
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
  ░░░░░░░░░░░░░░░░░░░░░  0.49

hono (pattern):
  ████████████████  0.38
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
  ░░░░░░░░░░░░░░░░░░░░░  0.49

hono (trie):
  █████████████████████████████████████████████  1.08
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.06
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.08
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.19


```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

mapl (jit):
  █  0.15
  ▓  0.15
  ▒  0.15
  ░  0.19

mapl (regexp):
  █  0.39
  ▓  0.38
  ▒  0.39
  ░  0.62

mapl (tree):
  █  0.39
  ▓  0.36
  ▒  0.38
  ░  0.62

find-my-way:
  █  0.41
  ▓  0.38
  ▒  0.40
  ░  0.70

hono (regexp):
  █  0.52
  ▓  0.51
  ▒  0.52
  ░  0.60

rou3 (jit):
  █  0.57
  ▓  0.57
  ▒  0.64
  ░  0.67

hono (pattern):
  █  0.58
  ▓  0.50
  ▒  0.67
  ░░  0.88

hono (trie):
  ███  1.70
  ▓▓▓  1.69
  ▒▒▒  1.71
  ░░░  1.82

rou3 (tree):
  ███████████████████████████████████████████  22.62
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  22.80
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  23.57
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  26.22


```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

stnl (jit):
  █  2.69
  ▓  2.63
  ▒  2.66
  ░░  3.58

stnl (aot):
  █  2.93
  ▓  2.84
  ▒  2.91
  ░░  3.54

sury (jit):
  ██  3.70
  ▓▓  3.72
  ▒▒  3.75
  ░░  3.94

arktype:
  ██  5.30
  ▓▓  5.17
  ▒▒  5.37
  ░░░  5.86

typebox (jit):
  ███  5.87
  ▓▓▓  5.79
  ▒▒▒  5.83
  ░░░  6.81

typebox (aot):
  ███  5.96
  ▓▓▓  5.90
  ▒▒▒  6.02
  ░░░  6.51

typia (aot):
  ████  9.60
  ▓▓▓▓  9.57
  ▒▒▒▒  9.63
  ░░░░░  9.99

zod:
  ███████████████████  41.24
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  42.43
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  43.08
  ░░░░░░░░░░░░░░░░░░░░  44.87

valibot:
  █████████████████████  45.79
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  44.78
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  47.53
  ░░░░░░░░░░░░░░░░░░░░░░  47.86

effect-schema:
  █████████████████████████████████████████████████  108.14
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  107.55
  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  109.40
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  109.77


```

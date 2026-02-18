# Results
1. [`startup time`](#2_c3RhcnR1cCB0aW1l)
    1. [`node-22.22.0`](#3_bm9kZS0yMi4yMi4w)
        1. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        2. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    2. [`node-24.13.0`](#3_bm9kZS0yNC4xMy4w)
        1. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        2. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
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
        1. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        2. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    6. [`deno-2.6.9`](#3_ZGVuby0yLjYuOQ==)
        1. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        2. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
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
    7. [`deno-2.6.10`](#3_ZGVuby0yLjYuMTA=)
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

 1. stnl (jit)
    ██  0.79
    ▓▓  0.78
    ▒▒  0.79
    ░░  1.2

 2. typebox (jit)
    ███████  9.81
    ▓▓▓▓▓▓▓  9.61
    ▒▒▒▒▒▒▒▒  10.12
    ░░░░░░░░░  11.67

 3. typescript (jit)
    ██████████████████████  32.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  33.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  34.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  37.69

 4. arktype
    ████████████████████████████████████████████████████████████████████████████████████  127
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  125.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  129.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  137.99
```
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. valibot
    █  0.32
    ▓  0.31
    ▒  0.32
    ░  0.44

 2. stnl (jit)
    █  0.5
    ▓  0.49
    ▒  0.5
    ░  0.7

 3. sury
    ███  2.28
    ▓▓▓  2.26
    ▒▒▒  2.29
    ░░░  2.55

 4. zod
    ███  3.46
    ▓▓▓  3.44
    ▒▒▒  3.52
    ░░░░  3.81

 5. typebox (jit)
    █████  5.28
    ▓▓▓▓▓  5.22
    ▒▒▒▒▒  5.29
    ░░░░░  6.19

 6. effect/schema
    █████████  11.59
    ▓▓▓▓▓▓▓▓▓  11.46
    ▒▒▒▒▒▒▒▒▒  11.65
    ░░░░░░░░░░  12.6

 7. typescript (jit)
    █████████████  18.27
    ▓▓▓▓▓▓▓▓▓▓▓▓  16.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  21.3
    ░░░░░░░░░░░░░░░░  22.56

 8. arktype
    █████████████████████████████████████████████████████████████████████████████████  118.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  116.93
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  118.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  132.62
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ████  0.36
    ▓▓▓▓  0.35
    ▒▒▒▒  0.37
    ░░░░  0.44

 2. itty-router
    █████  0.5
    ▓▓▓▓▓  0.5
    ▒▒▒▒▒  0.51
    ░░░░░░  0.63

 3. hono (quick)
    ██████  0.57
    ▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒  0.58
    ░░░░░░  0.64

 4. hono (tiny)
    ███████  0.77
    ▓▓▓▓▓▓▓  0.76
    ▒▒▒▒▒▒▒  0.78
    ░░░░░░░░  0.94

 5. hono
    ████████  0.84
    ▓▓▓▓▓▓▓▓  0.83
    ▒▒▒▒▒▒▒▒  0.85
    ░░░░░░░░░░  1.19

 6. mapl (jit)
    █████████  1
    ▓▓▓▓▓▓▓▓▓  0.99
    ▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░  1.13

 7. elysia
    ███████████████████████████████████  4.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5.12

 8. elysia (jit)
    ████████████████████████████████████████████████████████████████████████████████  10
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.03
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  11.34
```
<a name="3_bm9kZS0yNC4xMy4w">

### node-24.13.0
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. stnl (jit)
    ██  0.75
    ▓  0.74
    ▒▒  0.76
    ░░  0.93

 2. typebox (jit)
    ███████  9.58
    ▓▓▓▓▓▓▓  9.3
    ▒▒▒▒▒▒▒  9.67
    ░░░░░░░░░░  12.94

 3. typescript (jit)
    ██████████████████████  31.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  30.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  33.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  37.11

 4. arktype
    ███████████████████████████████████████████████████████████████████████████████████  121.71
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  120.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  123.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  134.2
```
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. valibot
    █  0.33
    ▓  0.32
    ▒  0.33
    ░  0.45

 2. stnl (jit)
    █  0.49
    ▓  0.49
    ▒  0.5
    ░  0.56

 3. sury
    ███  2.18
    ▓▓▓  2.16
    ▒▒▒  2.2
    ░░░  2.41

 4. zod
    ███  3.35
    ▓▓▓  3.3
    ▒▒▒  3.38
    ░░░░  3.85

 5. typebox (jit)
    █████  5.14
    ▓▓▓▓▓  5
    ▒▒▒▒▒  5.15
    ░░░░░░░  7.79

 6. effect/schema
    █████████  11.83
    ▓▓▓▓▓▓▓▓▓  11.68
    ▒▒▒▒▒▒▒▒▒  11.78
    ░░░░░░░░░░░░  15.18

 7. typescript (jit)
    ████████████  15.16
    ▓▓▓▓▓▓▓▓▓▓▓  14.52
    ▒▒▒▒▒▒▒▒▒▒▒▒  15.35
    ░░░░░░░░░░░░░░░░  20.81

 8. arktype
    ████████████████████████████████████████████████████████████████████████████████  111.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  110.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  112.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  126.12
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ████  0.38
    ▓▓▓▓  0.38
    ▒▒▒▒  0.39
    ░░░░░  0.46

 2. itty-router
    █████  0.52
    ▓▓▓▓▓  0.51
    ▒▒▒▒▒  0.53
    ░░░░░░  0.6

 3. hono (quick)
    ██████  0.57
    ▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒  0.57
    ░░░░░░░  0.66

 4. hono (tiny)
    ███████  0.74
    ▓▓▓▓▓▓▓  0.74
    ▒▒▒▒▒▒▒  0.75
    ░░░░░░░░░  0.9

 5. hono
    ████████  0.85
    ▓▓▓▓▓▓▓▓  0.84
    ▒▒▒▒▒▒▒▒  0.86
    ░░░░░░░░░░  1.11

 6. mapl (jit)
    ██████████  1.03
    ▓▓▓▓▓▓▓▓▓▓  1.03
    ▒▒▒▒▒▒▒▒▒▒  1.04
    ░░░░░░░░░░░  1.19

 7. elysia
    █████████████████████████████████████  4.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.92

 8. elysia (jit)
    ███████████████████████████████████████████████████████████████████████████████████████  10.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.14
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.61
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

 1. valibot
    █  0.25
    ▓  0.25
    ▒  0.26
    ░  0.3

 2. stnl (jit)
    █  0.43
    ▓  0.43
    ▒  0.44
    ░  0.49

 3. sury
    ██  2.16
    ▓▓  2.16
    ▒▒  2.18
    ░░  2.25

 4. zod
    ███  2.81
    ▓▓▓  2.8
    ▒▒▒  2.84
    ░░░  2.99

 5. typebox (jit)
    █████  6.45
    ▓▓▓▓▓  6.39
    ▒▒▒▒▒  6.71
    ░░░░░  7.1

 6. typescript (jit)
    ████████████  17.82
    ▓▓▓▓▓▓▓▓▓▓▓▓  17.98
    ▒▒▒▒▒▒▒▒▒▒▒▒  18.49
    ░░░░░░░░░░░░░  20.05

 7. effect/schema
    ██████████████  21.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  21.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  21.98
    ░░░░░░░░░░░░░░░  23.13

 8. arktype
    ██████████████████████████████████████████████████████████████████████████████  129.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  125.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  135.97
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  151.68
```
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. stnl (jit)
    █  0.66
    ▓  0.66
    ▒  0.67
    ░  0.74

 2. typebox (jit)
    ████████  12.93
    ▓▓▓▓▓▓▓▓  12.99
    ▒▒▒▒▒▒▒▒▒  13.24
    ░░░░░░░░░  13.91

 3. typescript (jit)
    ██████████████████████  36.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  36.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  37.52
    ░░░░░░░░░░░░░░░░░░░░░░░░  39.58

 4. arktype
    ████████████████████████████████████████████████████████████████████████████████  137.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  135.99
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  157.67
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ███  0.28
    ▓▓▓  0.28
    ▒▒▒  0.29
    ░░░░  0.34

 2. itty-router
    ████  0.38
    ▓▓▓▓  0.38
    ▒▒▒▒  0.4
    ░░░░  0.47

 3. hono (quick)
    ██████  0.64
    ▓▓▓▓▓▓  0.63
    ▒▒▒▒▒▒  0.65
    ░░░░░░░  0.83

 4. mapl (jit)
    ███████  0.84
    ▓▓▓▓▓▓▓  0.84
    ▒▒▒▒▒▒▒  0.86
    ░░░░░░░░  0.9

 5. hono (tiny)
    ████████  0.9
    ▓▓▓▓▓▓▓▓  0.9
    ▒▒▒▒▒▒▒▒  0.92
    ░░░░░░░░  0.97

 6. hono
    █████████  1.14
    ▓▓▓▓▓▓▓▓▓  1.14
    ▒▒▒▒▒▒▒▒▒  1.15
    ░░░░░░░░░░  1.21

 7. elysia
    ████████████████████████████████████  4.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5.09

 8. elysia (jit)
    ██████████████████████████████████████████████████████████████████████████  9.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  12.19
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

 1. stnl (jit)
    ██  0.79
    ▓▓  0.78
    ▒▒  0.82
    ░░  1.06

 2. typebox (jit)
    ████████  10.06
    ▓▓▓▓▓▓▓▓  9.91
    ▒▒▒▒▒▒▒▒  10.62
    ░░░░░░░░░  11.54

 3. typescript (jit)
    █████████████████████████  34.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  35.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  36.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  42.5

 4. arktype
    ███████████████████████████████████████████████████████████████████████████████████  117.9
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  117.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  119.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  129.05
```
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. valibot
    █  0.34
    ▓  0.32
    ▒  0.35
    ░  0.47

 2. stnl (jit)
    █  0.54
    ▓  0.51
    ▒  0.54
    ░░  0.7

 3. sury
    ███  2.27
    ▓▓▓  2.22
    ▒▒▒  2.33
    ░░░  2.72

 4. zod
    ███  3.38
    ▓▓▓  3.34
    ▒▒▒  3.39
    ░░░░  4.06

 5. typebox (jit)
    █████  5.3
    ▓▓▓▓▓  5.22
    ▒▒▒▒▒  5.33
    ░░░░░░  6.59

 6. effect/schema
    ██████████  12
    ▓▓▓▓▓▓▓▓▓▓  11.81
    ▒▒▒▒▒▒▒▒▒▒  12.07
    ░░░░░░░░░░░░  15.06

 7. typescript (jit)
    ████████████  15.05
    ▓▓▓▓▓▓▓▓▓▓▓▓  15.12
    ▒▒▒▒▒▒▒▒▒▒▒▒  15.48
    ░░░░░░░░░░░░░░  17.41

 8. arktype
    █████████████████████████████████████████████████████████████████████████████████  110.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  109.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  110.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  124.05
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ███  0.3
    ▓▓▓  0.29
    ▒▒▒▒  0.32
    ░░░░  0.39

 2. itty-router
    █████  0.54
    ▓▓▓▓▓  0.54
    ▒▒▒▒▒▒  0.56
    ░░░░░░  0.67

 3. hono (quick)
    ██████  0.63
    ▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒  0.65
    ░░░░░░░  0.77

 4. hono (tiny)
    ████████  0.8
    ▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒  0.81
    ░░░░░░░░░  0.96

 5. hono
    ████████  0.9
    ▓▓▓▓▓▓▓▓  0.89
    ▒▒▒▒▒▒▒▒▒  0.93
    ░░░░░░░░░░  1.05

 6. mapl (jit)
    █████████  1.02
    ▓▓▓▓▓▓▓▓▓  0.99
    ▒▒▒▒▒▒▒▒▒  1.02
    ░░░░░░░░░░░░  1.31

 7. elysia
    ███████████████████████████████  3.71
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.89

 8. elysia (jit)
    █████████████████████████████████████████████████████████████████████████████  9.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  11.04
```
<a name="3_bm9kZS0yNS42LjE=">

### node-25.6.1
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. valibot
    █  0.28
    ▓  0.29
    ▒  0.3
    ░  0.36

 2. stnl (jit)
    █  0.45
    ▓  0.46
    ▒  0.48
    ░  0.52

 3. sury
    ███  2.14
    ▓▓▓  2.14
    ▒▒▒  2.18
    ░░░  2.43

 4. zod
    ████  3.37
    ▓▓▓  3.32
    ▒▒▒▒  3.4
    ░░░░  4.27

 5. typebox (jit)
    █████  5.01
    ▓▓▓▓▓  4.95
    ▒▒▒▒▒  5.04
    ░░░░░░  6.56

 6. effect/schema
    █████████  11.24
    ▓▓▓▓▓▓▓▓▓  11.11
    ▒▒▒▒▒▒▒▒▒  11.23
    ░░░░░░░░░░░░  14.35

 7. typescript (jit)
    ████████████  14.22
    ▓▓▓▓▓▓▓▓▓▓▓▓  14.15
    ▒▒▒▒▒▒▒▒▒▒▒▒  14.39
    ░░░░░░░░░░░░░  16.54

 8. arktype
    ████████████████████████████████████████████████████████████████████████████████████  111.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  110.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  113.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  121.16
```
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. stnl (jit)
    █  0.7
    ▓  0.7
    ▒▒  0.73
    ░░  0.85

 2. typebox (jit)
    ███████  9.37
    ▓▓▓▓▓▓▓  9.13
    ▒▒▒▒▒▒▒▒  9.67
    ░░░░░░░░░░  13.11

 3. typescript (jit)
    ██████████████████████  31.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  30.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  32.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  40.62

 4. arktype
    ███████████████████████████████████████████████████████████████████████████████████  118.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  118.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  119.94
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  130.9
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ████  0.35
    ▓▓▓▓  0.36
    ▒▒▒▒  0.37
    ░░░░  0.41

 2. itty-router
    █████  0.49
    ▓▓▓▓▓  0.49
    ▒▒▒▒▒  0.51
    ░░░░░░  0.6

 3. hono (quick)
    █████  0.53
    ▓▓▓▓▓  0.52
    ▒▒▒▒▒  0.54
    ░░░░░░  0.64

 4. hono (tiny)
    ███████  0.74
    ▓▓▓▓▓▓▓  0.73
    ▒▒▒▒▒▒▒  0.75
    ░░░░░░░░  0.86

 5. hono
    ████████  0.81
    ▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒  0.82
    ░░░░░░░░░░  1.05

 6. mapl (jit)
    █████████  0.98
    ▓▓▓▓▓▓▓▓▓  0.97
    ▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░  1.36

 7. elysia
    ███████████████████████████████████  4.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.93

 8. elysia (jit)
    ██████████████████████████████████████████████████████████████████████████████████████  10.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  11.01
```
<a name="3_ZGVuby0yLjYuOQ==">

### deno-2.6.9
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. valibot
    █  0.35
    ▓  0.33
    ▒  0.35
    ░  0.62

 2. stnl (jit)
    █  0.54
    ▓  0.52
    ▒  0.54
    ░░  0.74

 3. sury
    ███  2.28
    ▓▓▓  2.25
    ▒▒▒  2.31
    ░░░  2.65

 4. zod
    ████  3.44
    ▓▓▓▓  3.4
    ▒▒▒▒  3.47
    ░░░░  4.33

 5. typebox (jit)
    █████  5.22
    ▓▓▓▓▓  5.19
    ▒▒▒▒▒  5.3
    ░░░░░░  6.14

 6. effect/schema
    ██████████  11.9
    ▓▓▓▓▓▓▓▓▓▓  11.8
    ▒▒▒▒▒▒▒▒▒▒  12.02
    ░░░░░░░░░░░  14.08

 7. typescript (jit)
    ████████████  15.26
    ▓▓▓▓▓▓▓▓▓▓▓▓  15.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  15.62
    ░░░░░░░░░░░░░░░  18.4

 8. arktype
    ███████████████████████████████████████████████████████████████████████████████████  111.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  110.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  113.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  121.69
```
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. stnl (jit)
    ██  0.81
    ▓▓  0.8
    ▒▒  0.83
    ░░  1.02

 2. typebox (jit)
    ████████  10.1
    ▓▓▓▓▓▓▓▓  10.28
    ▒▒▒▒▒▒▒▒  10.7
    ░░░░░░░░░░  12.36

 3. typescript (jit)
    ████████████████████████  33.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  33.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  36.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  38.41

 4. arktype
    ███████████████████████████████████████████████████████████████████████████████████  118.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  117.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  120.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  129.6
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ████  0.3
    ▓▓▓  0.29
    ▒▒▒▒  0.31
    ░░░░░  0.41

 2. itty-router
    ██████  0.57
    ▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒  0.59
    ░░░░░░░░  0.79

 3. hono (quick)
    ███████  0.64
    ▓▓▓▓▓▓  0.63
    ▒▒▒▒▒▒▒  0.66
    ░░░░░░░░  0.83

 4. hono (tiny)
    ████████  0.8
    ▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒  0.82
    ░░░░░░░░░  0.91

 5. hono
    █████████  0.93
    ▓▓▓▓▓▓▓▓▓  0.9
    ▒▒▒▒▒▒▒▒▒  0.93
    ░░░░░░░░░░░░  1.25

 6. mapl (jit)
    ██████████  1.02
    ▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒  1.03
    ░░░░░░░░░░░  1.17

 7. elysia
    █████████████████████████████████  3.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.4

 8. elysia (jit)
    █████████████████████████████████████████████████████████████████████████████████  9.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.45
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

 1. ciorent (mutex)
    ███████████  133.21
    ▓▓▓▓▓▓▓▓▓▓▓  131.63
    ▒▒▒▒▒▒▒▒▒▒▒  133.07
    ░░░░░░░░░░░░░░░  178.15

 2. manual
    ████████████  141.53
    ▓▓▓▓▓▓▓▓▓▓▓▓  141.01
    ▒▒▒▒▒▒▒▒▒▒▒▒  141.7
    ░░░░░░░░░░░░░░  166.27

 3. ciorent (semaphore)
    █████████████  156.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  154.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  157.28
    ░░░░░░░░░░░░░░░░░░  218.47

 4. p-mutex
    ██████████████████████████  324.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  314.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  425.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  505.35

 5. p-limit
    █████████████████████████████████████████  519.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  464.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  682.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  791

 6. async-mutex
    █████████████████████████████████████████████████████████████████████  888.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  878.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1035.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1181.8
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ████████  0.16
    ▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░  0.18

 2. p-limit
    ████████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 3. async-mutex
    █████████████████████████████████████  0.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.13

 4. manual
    ██████████████████████████████████████████████████████████████████████████████████████████  2.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.09
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ██████████  0.16
    ▓▓▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░░░  0.18

 2. p-limit
    ███████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 3. async-mutex
    ██████████████████████████████████████████████  0.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.93
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.12

 4. manual
    ██████████████████████████████████████████████████████████████████  1.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.65
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  154.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  153.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  156.34
    ░░░░░░░░░░░░░░░  173.43

 2. p-limit
    ██████████████████████████████████████████  506.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  459.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  642.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  782.11

 3. manual
    ██████████████████████████████████████████████████████████  703.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  688.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  739.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  864.58

 4. async-mutex
    ████████████████████████████████████████████████████████████████████  827.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  794.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  952.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1112.98
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  152.87
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  151.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  153
    ░░░░░░░░░░░░░░░  170.12

 2. manual
    ███████████████████████████████████  425.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  439.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  464.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  488.63

 3. p-limit
    ██████████████████████████████████████████  514.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  475.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  678.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  788.26

 4. async-mutex
    ███████████████████████████████████████████████████████████████████  818.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  766.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  928.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1117.33
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  150.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  149.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  151.04
    ░░░░░░░░░░░░░░░  167.4

 2. manual
    ███████████████████████  266.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  274.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  281.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░  299.84

 3. p-limit
    ████████████████████████████████████████████  529.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  503.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  683.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  819.07

 4. async-mutex
    ████████████████████████████████████████████████████████████████████  834.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  804.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  969.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1115.18
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  149.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  148.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  150.12
    ░░░░░░░░░░░░░░  168.22

 2. manual
    ███████████████  175.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  179.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  184.3
    ░░░░░░░░░░░░░░░░░  203.53

 3. p-limit
    ████████████████████████████████████████████  540.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  522.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  694.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  821.17

 4. async-mutex
    ██████████████████████████████████████████████████████████████████  818.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  782.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  933.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1127.47
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

 1. deuri
    █████████████████████████████████████████████████████████████  261.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  260.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  264.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  295.02

 2. fast-decode-uri-component
    ████████████████████████████████████████████████████████████████████████  311.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  314.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  323.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  383.97

 3. native
    █████████████████████████████████████████████████████████████████████████████████████  366.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  366.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  380.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  394.15
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.26
    ▓  1.11
    ▒  1.15
    ░░  2.34

 2. fast-decode-uri-component
    ██  2.38
    ▓▓  2.26
    ▒▒  2.27
    ░░  3.86

 3. native
    ███████████████████████████████████████████████████████████████████████████████████  266.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  268.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  274.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  292.97
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

 1. mapl (jit)
    ███  15.31
    ▓▓  9.88
    ▒▒  9.93
    ░░░░░░░░░░  69.92

 2. mapl (tree)
    ██████  35.33
    ▓▓▓▓▓  31.68
    ▒▒▒▒▒▒  34.97
    ░░░░░░░░░  57.83

 3. mapl (regexp)
    ██████  37.8
    ▓▓▓▓▓  32.48
    ▒▒▒▒▒▒  36.4
    ░░░░░░░░░  61.02

 4. rou3 (jit)
    ██████  38.19
    ▓▓▓▓▓  27.24
    ▒▒▒▒▒▒▒▒  52.2
    ░░░░░░░░░░░░░░░  108.39

 5. hono (regexp)
    ███████  49.05
    ▓▓▓▓▓▓▓  45.61
    ▒▒▒▒▒▒▒  49.4
    ░░░░░░░░░░  71.52

 6. rou3 (tree)
    ████████  51.91
    ▓▓▓▓▓▓▓  46.85
    ▒▒▒▒▒▒▒▒  51.06
    ░░░░░░░░░░  72.27

 7. find-my-way
    ██████████████████  129.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  118.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  136.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░  187.1

 8. hono (trie)
    █████████████████████████████████████████████████████  396.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  327.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  535.25
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  554.88

 9. hono (pattern)
    █████████████████████████████████████████████████████████████  461.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  403.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  427.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  691.35
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  17.87
    ▓▓▓  15.28
    ▒▒▒  15.34
    ░░░░░  36.89

 2. rou3 (jit)
    █████  36.42
    ▓▓▓▓  28.46
    ▒▒▒▒▒▒  50.27
    ░░░░░░░░░░░░  112.21

 3. mapl (regexp)
    █████  37.37
    ▓▓▓▓  29.4
    ▒▒▒▒▒▒  52
    ░░░░░░░  56.85

 4. mapl (tree)
    █████  37.84
    ▓▓▓▓  32.39
    ▒▒▒▒▒  36.59
    ░░░░░░░  58.4

 5. hono (regexp)
    ██████  50.61
    ▓▓▓▓▓▓  47.04
    ▒▒▒▒▒▒  50.64
    ░░░░░░░░  72.53

 6. rou3 (tree)
    ██████  51.72
    ▓▓▓▓▓▓  48.13
    ▒▒▒▒▒▒  51.78
    ░░░░░░░░░  77.81

 7. find-my-way
    ███████████████████████████  254.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  214.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  366.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  382.77

 8. hono (pattern)
    ████████████████████████████████████████████  428.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  374.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  389.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  671.45

 9. hono (trie)
    ██████████████████████████████████████████████████████████  569.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  502.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  536.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  894.03
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  19.44
    ▓▓▓  16.48
    ▒▒▒  16.55
    ░░░░░  39.51

 2. mapl (tree)
    ████  33.09
    ▓▓▓▓  29.27
    ▒▒▒▒  32.73
    ░░░░░░░  55.03

 3. mapl (regexp)
    ████  34.68
    ▓▓▓▓  30.15
    ▒▒▒▒  33.82
    ░░░░░░░  57.11

 4. rou3 (jit)
    █████  36
    ▓▓▓▓  30.45
    ▒▒▒▒  34.17
    ░░░░░░░░░░░░░  115.35

 5. hono (regexp)
    ██████  51.49
    ▓▓▓▓▓▓  46.72
    ▒▒▒▒▒▒  50.67
    ░░░░░░░░  71.35

 6. rou3 (tree)
    ██████  53.51
    ▓▓▓▓▓▓  51.54
    ▒▒▒▒▒▒▒  55.16
    ░░░░░░░░  70.92

 7. find-my-way
    █████████████████████████  238.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  191.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  335.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  347.41

 8. hono (pattern)
    ████████████████████████████████████████████  422.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  365.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  379.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  663.35

 9. hono (trie)
    ████████████████████████████████████████████████████████████  580.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  502.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  543.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  893.09
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.22
    ▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░░  0.37

 2. rou3 (jit)
    ███████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 3. mapl (regexp)
    █████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.7

 4. mapl (tree)
    █████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 5. find-my-way
    ████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.87

 6. hono (regexp)
    ██████████████████████████  0.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.04

 7. hono (pattern)
    ██████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.17

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████  1.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.37

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████  1.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.92
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.25
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████  0.19
    ▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░  0.34

 2. rou3 (jit)
    ████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░  0.61

 3. mapl (tree)
    ███████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░  0.73

 4. mapl (regexp)
    █████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.73
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 5. find-my-way
    ███████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.02

 6. hono (regexp)
    █████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.02

 7. hono (pattern)
    ██████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.17

 8. rou3 (tree)
    ███████████████████████████████████████████████████  1.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.39

 9. hono (trie)
    █████████████████████████████████████████████████████████████  1.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.92
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.94
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.94
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████  0.17
    ▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░░  0.24

 2. rou3 (jit)
    ██████████  0.28
    ▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░  0.49

 3. mapl (tree)
    ████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░  0.55

 4. mapl (regexp)
    ███████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 5. find-my-way
    ██████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.7

 6. hono (regexp)
    ███████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.98

 7. hono (pattern)
    ████████████████████████  0.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.2

 8. rou3 (tree)
    █████████████████████████████████████████  1.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.5

 9. hono (trie)
    █████████████████████████████████████████████████████  1.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.72
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████  0.19
    ▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░  0.32

 2. rou3 (jit)
    ██████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░  0.57

 3. mapl (regexp)
    █████████████████  0.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 4. mapl (tree)
    █████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 5. find-my-way
    ███████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.91

 6. hono (pattern)
    ████████████████████████  0.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.08

 7. hono (regexp)
    ████████████████████████  0.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.97
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.07

 8. rou3 (tree)
    ████████████████████████████████████████████████  1.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.82

 9. hono (trie)
    ███████████████████████████████████████████████████████████  1.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.69
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████  0.18
    ▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒  0.18
    ░░░░░░░░  0.24

 2. rou3 (jit)
    ██████████  0.34
    ▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░  0.57

 3. mapl (regexp)
    █████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░  0.65

 4. hono (pattern)
    █████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░  0.67

 5. mapl (tree)
    ██████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░  0.69

 6. hono (regexp)
    ███████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.89

 7. find-my-way
    █████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.89

 8. rou3 (tree)
    ████████████████████████████████████████████  1.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.25

 9. hono (trie)
    ██████████████████████████████████████████████████  1.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.24
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████  0.19
    ▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒  0.19
    ░░░░░░░░░  0.29

 2. rou3 (jit)
    ████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░  0.58

 3. mapl (tree)
    █████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░  0.68

 4. mapl (regexp)
    ██████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░  0.74

 5. find-my-way
    ████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.87

 6. hono (regexp)
    ███████████████████  0.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.04

 7. hono (pattern)
    ███████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░  0.71

 8. rou3 (tree)
    ███████████████████████████████████████  1.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.1

 9. hono (trie)
    ██████████████████████████████████████████████████████  1.93
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.27
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  20.75
    ▓▓▓  17.62
    ▒▒▒  17.8
    ░░░░░░  38.63

 2. mapl (tree)
    █████  32.99
    ▓▓▓▓▓  28.96
    ▒▒▒▒▒  32.53
    ░░░░░░░░  55.87

 3. mapl (regexp)
    █████  33.08
    ▓▓▓▓▓  28.43
    ▒▒▒▒▒  32.21
    ░░░░░░░░  55.91

 4. rou3 (jit)
    ██████  40.9
    ▓▓▓▓▓  32.32
    ▒▒▒▒▒▒▒▒  54.85
    ░░░░░░░░░░░░░░░░░░░  131.27

 5. hono (regexp)
    ████████  48.99
    ▓▓▓▓▓▓▓  45.41
    ▒▒▒▒▒▒▒▒  49.29
    ░░░░░░░░░░  70.43

 6. rou3 (tree)
    ████████  50.34
    ▓▓▓▓▓▓▓  47.4
    ▒▒▒▒▒▒▒▒  50.94
    ░░░░░░░░░░  70.54

 7. find-my-way
    ████████████████████████  172.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  154.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  173.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  243.17

 8. hono (trie)
    █████████████████████████████████████████████████  359.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  323.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  339.08
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  544.03

 9. hono (pattern)
    ████████████████████████████████████████████████████████████  443.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  382.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  401.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  673.11
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███  0.02
    ▓▓▓  0.02
    ▒▒▒  0.02
    ░░░░  0.04

 2. mapl (tree)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░  0.05

 3. mapl (regexp)
    ████  0.04
    ▓▓▓  0.03
    ▒▒▒▒▒▒  0.06
    ░░░░░░  0.06

 4. rou3 (jit)
    ████  0.04
    ▓▓▓▓  0.04
    ▒▒▒▒  0.04
    ░░░░░░░░░░░  0.12

 5. rou3 (tree)
    █████  0.05
    ▓▓▓▓▓  0.05
    ▒▒▒▒▒  0.05
    ░░░░░░░  0.07

 6. hono (regexp)
    █████  0.05
    ▓▓▓▓▓  0.05
    ▒▒▒▒▒  0.05
    ░░░░░░░  0.07

 7. find-my-way
    ███████████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 8. hono (pattern)
    ███████████████████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████  1.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.1
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████  0.15
    ▓▓▓▓▓  0.14
    ▒▒▒▒▒  0.15
    ░░░░░░░  0.22

 2. mapl (tree)
    ██████████  0.31
    ▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░  0.52

 3. mapl (regexp)
    ████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░  0.61

 4. find-my-way
    ███████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░  0.74

 5. rou3 (jit)
    ████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░  0.77

 6. hono (regexp)
    ███████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.02

 7. hono (pattern)
    ██████████████████████  0.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.2

 8. rou3 (tree)
    ███████████████████████████████████████████████  1.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.38

 9. hono (trie)
    ████████████████████████████████████████████████████████  1.9
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.1
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

 1. stnl (jit)
    ███  2.56
    ▓▓▓  2.55
    ▒▒▒  2.57
    ░░░  2.74

 2. stnl (aot)
    ███  2.65
    ▓▓▓  2.65
    ▒▒▒  2.66
    ░░░  2.69

 3. sury (jit)
    ████  3.49
    ▓▓▓▓  3.53
    ▒▒▒▒  3.53
    ░░░░  3.6

 4. arktype
    █████  4.83
    ▓▓▓▓▓  4.82
    ▒▒▒▒▒  4.84
    ░░░░░  4.88

 5. typebox (jit)
    ██████  5.79
    ▓▓▓▓▓▓  5.81
    ▒▒▒▒▒▒  5.82
    ░░░░░░  5.91

 6. typebox (aot)
    ██████  6.08
    ▓▓▓▓▓▓  6.08
    ▒▒▒▒▒▒  6.11
    ░░░░░░  6.15

 7. typia (aot)
    █████████  9.8
    ▓▓▓▓▓▓▓▓▓  9.81
    ▒▒▒▒▒▒▒▒▒  9.82
    ░░░░░░░░░  9.93

 8. zod
    ██████████████████████████████  36.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  35.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  39.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  43.47

 9. valibot
    ████████████████████████████████████  43.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  43.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  46.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  46.97

 10. effect-schema
    ██████████████████████████████████████████████████████████████████████████████████████████  110.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  110.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  110.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  111.55
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

 1. ciorent (mutex)
    █████████████  117.48
    ▓▓▓▓▓▓▓▓▓▓▓▓  115.04
    ▒▒▒▒▒▒▒▒▒▒▒▒  115.77
    ░░░░░░░░░░░░░░░  143.77

 2. manual
    ██████████████  132.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  130.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  136.67
    ░░░░░░░░░░░░░░░░░  163.05

 3. ciorent (semaphore)
    ███████████████  144.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.13
    ░░░░░░░░░░░░░░░░░░  174.17

 4. p-mutex
    ████████████████████████████████  316.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  318.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  336.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  404.45

 5. p-limit
    ██████████████████████████████████████████████████  496.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  472.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  566.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  685.9

 6. async-mutex
    ██████████████████████████████████████████████████████████████████████  707.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  687.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  707.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  919.09
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    █████  0.15
    ▓▓▓▓▓  0.14
    ▒▒▒▒▒  0.15
    ░░░░░  0.16

 2. p-limit
    ███████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░  0.69

 3. async-mutex
    ████████████████████  0.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.84

 4. manual
    █████████████████████████████████████████████████████████████  2.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.21
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    █████████  0.15
    ▓▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░  0.16

 2. p-limit
    ████████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 3. async-mutex
    ██████████████████████████████████████  0.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 4. manual
    ██████████████████████████████████████████████████████████████████████  1.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.64
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████████  143.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  141.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.25
    ░░░░░░░░░░░░░░░░░░░  159.82

 2. p-limit
    █████████████████████████████████████████████████████  475.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  466.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  498.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  643.28

 3. manual
    ███████████████████████████████████████████████████████████████████  599.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  600.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  611.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  625.68

 4. async-mutex
    ██████████████████████████████████████████████████████████████████████████  668.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  664.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  674.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  820.03
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████████  141.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  140.75
    ░░░░░░░░░░░░░░░░░░░  158.07

 2. manual
    ██████████████████████████████████████████  369.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  372.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  377.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  398.17

 3. p-limit
    ███████████████████████████████████████████████████████  482.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  474.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  500.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  628.77

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████  674.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  670.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  680.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  811.36
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████████  140.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  139.14
    ░░░░░░░░░░░░░░░░░░░  156.66

 2. manual
    █████████████████████████████  253.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  252.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  259.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  272.57

 3. p-limit
    ██████████████████████████████████████████████████████  477.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  464.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  496.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  637.6

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████  674.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  672.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  679.87
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  804.44
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████  136.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  134.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  135.11
    ░░░░░░░░░░░░░░░░░░  153.02

 2. manual
    ███████████████████  162.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  160.93
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  162.84
    ░░░░░░░░░░░░░░░░░░░░░  180.83

 3. p-limit
    █████████████████████████████████████████████████████  469.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  464.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  489
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  634.86

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████  677.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  670.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  683.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  808.28
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

 1. deuri
    ███████████████████████████████████████████████████████████████  251.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  248.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  258.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  291.79

 2. fast-decode-uri-component
    ███████████████████████████████████████████████████████████████████████████  299.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  301.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  308.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  364.83

 3. native
    ██████████████████████████████████████████████████████████████████████████████  312.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  313.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  323.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  364.47
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.21
    ▓  1.12
    ▒  1.34
    ░  1.44

 2. fast-decode-uri-component
    ██  2.36
    ▓▓  2.25
    ▒▒  2.52
    ░░  2.58

 3. native
    ███████████████████████████████████████████████████████████████████████████████████  255.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  254.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  261.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  279.43
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

 1. mapl (jit)
    ███  12.35
    ▓▓  10.1
    ▒▒▒  11.66
    ░░░░░░  34.14

 2. rou3 (jit)
    █████  29.48
    ▓▓▓▓▓  27.86
    ▒▒▒▒▒  28.08
    ░░░░░░░░░  60.22

 3. mapl (regexp)
    ██████  33.1
    ▓▓▓▓▓  32.18
    ▒▒▒▒▒▒  32.69
    ░░░░░░░░░  58.08

 4. mapl (tree)
    ██████  36.62
    ▓▓▓▓▓▓  34.77
    ▒▒▒▒▒▒  35.25
    ░░░░░░░░░  61.13

 5. hono (regexp)
    ████████  49.1
    ▓▓▓▓▓▓▓  45.62
    ▒▒▒▒▒▒▒▒  49.56
    ░░░░░░░░░░░░  76.47

 6. rou3 (tree)
    ████████  52.9
    ▓▓▓▓▓▓▓▓  49.46
    ▒▒▒▒▒▒▒▒  52.9
    ░░░░░░░░░░░░  76.58

 7. find-my-way
    █████████████████  116.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  107.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  119.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  191.94

 8. hono (trie)
    ███████████████████████████████████████████  300.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  278.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  283.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  588.07

 9. hono (pattern)
    █████████████████████████████████████████████████████████████  436.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  375.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  519.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  651.19
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  16.98
    ▓▓▓  16.22
    ▒▒▒  16.3
    ░░░░░  36.47

 2. rou3 (jit)
    █████  34.11
    ▓▓▓▓  29.68
    ▒▒▒▒▒  33.04
    ░░░░░░░░  60.79

 3. mapl (tree)
    █████  35.65
    ▓▓▓▓▓  34.05
    ▒▒▒▒▒  37.5
    ░░░░░░░  57.64

 4. mapl (regexp)
    █████  40.03
    ▓▓▓▓▓  35.17
    ▒▒▒▒▒  39.03
    ░░░░░░░░  63.24

 5. rou3 (tree)
    ███████  50.5
    ▓▓▓▓▓▓  48.59
    ▒▒▒▒▒▒▒  51.43
    ░░░░░░░░░  74.16

 6. hono (regexp)
    ███████  51.84
    ▓▓▓▓▓▓  49.65
    ▒▒▒▒▒▒▒  52.27
    ░░░░░░░░░░  77.01

 7. find-my-way
    █████████████████████████  221.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  199.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  215.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  348.43

 8. hono (pattern)
    █████████████████████████████████████████████████████  472.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  382.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  624.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  651.25

 9. hono (trie)
    ███████████████████████████████████████████████████████████  523.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  500.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  505.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  815.24
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  18.41
    ▓▓▓  17.32
    ▒▒▒  17.7
    ░░░░░  37.61

 2. rou3 (jit)
    █████  32.9
    ▓▓▓▓▓  31.98
    ▒▒▒▒▒  32.44
    ░░░░░░  42.14

 3. mapl (tree)
    █████  33.21
    ▓▓▓▓▓  32.9
    ▒▒▒▒▒  35.08
    ░░░░░░░  54.86

 4. mapl (regexp)
    █████  33.31
    ▓▓▓▓  30.63
    ▒▒▒▒▒  35.27
    ░░░░░░░░  61.29

 5. rou3 (tree)
    ██████  49.6
    ▓▓▓▓▓▓  48.69
    ▒▒▒▒▒▒▒  51.09
    ░░░░░░░░░  70.62

 6. hono (regexp)
    ███████  50.31
    ▓▓▓▓▓▓  46.63
    ▒▒▒▒▒▒▒  52.56
    ░░░░░░░░░  75.45

 7. find-my-way
    █████████████████████████  221.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  180.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  300.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  328.77

 8. hono (pattern)
    █████████████████████████████████████████████████  435.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  361.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  617.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  640.21

 9. hono (trie)
    ██████████████████████████████████████████████████████████████  553.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  504.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  508.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  819.58
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░  0.23

 2. mapl (regexp)
    ███████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░  0.54

 3. rou3 (jit)
    ████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 4. mapl (tree)
    █████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 5. find-my-way
    ████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.87

 6. hono (pattern)
    ██████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 7. hono (regexp)
    ████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.84

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████████  1.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.8

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████  2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.24
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.2
    ▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░  0.31

 2. mapl (regexp)
    ███████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.56

 3. mapl (tree)
    ██████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 4. rou3 (jit)
    ███████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 5. find-my-way
    ██████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 6. hono (pattern)
    ██████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 7. hono (regexp)
    ███████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████  1.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.74

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████  1.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.03
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.19
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.15
    ▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░  0.17

 2. rou3 (jit)
    ████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.49

 3. mapl (regexp)
    █████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.49

 4. mapl (tree)
    █████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░  0.4

 5. find-my-way
    ████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 6. hono (regexp)
    ██████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 7. hono (pattern)
    █████████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████  1.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.24
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.53

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████  1.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.76
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░  0.22

 2. mapl (regexp)
    ████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 3. rou3 (jit)
    ██████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.56

 4. mapl (tree)
    ██████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 5. find-my-way
    ███████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 6. hono (regexp)
    ████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 7. hono (pattern)
    █████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████  1.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.65

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████  1.92
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.02
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.06
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.18
    ▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░░  0.27

 2. mapl (regexp)
    ██████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░  0.4

 3. hono (pattern)
    █████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 4. mapl (tree)
    ██████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 5. rou3 (jit)
    ██████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 6. find-my-way
    ███████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 7. hono (regexp)
    █████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████  1.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.66

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████  1.92
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.05
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████  0.17
    ▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░  0.18

 2. mapl (regexp)
    ███████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░  0.44

 3. mapl (tree)
    ██████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░  0.47

 4. rou3 (jit)
    ██████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 5. find-my-way
    █████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░  0.5

 6. hono (pattern)
    █████████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 7. hono (regexp)
    ██████████████████████████████  0.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████  1.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.65

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████████  1.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.05
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  19.64
    ▓▓▓  17.97
    ▒▒▒  18.03
    ░░░░░░░  42.03

 2. mapl (regexp)
    █████  29.81
    ▓▓▓▓▓  28.11
    ▒▒▒▒▒  32.03
    ░░░░░░  38.47

 3. mapl (tree)
    █████  30.18
    ▓▓▓▓▓  28.56
    ▒▒▒▒▒  31.52
    ░░░░░░░░░  56

 4. rou3 (jit)
    ██████  34.9
    ▓▓▓▓▓▓  34.15
    ▒▒▒▒▒▒  34.93
    ░░░░░░░░░  61.81

 5. rou3 (tree)
    ████████  47.95
    ▓▓▓▓▓▓▓  46.92
    ▒▒▒▒▒▒▒▒  49.72
    ░░░░░░░░░  56.82

 6. hono (regexp)
    ████████  52.4
    ▓▓▓▓▓▓▓▓  49.44
    ▒▒▒▒▒▒▒▒  52.95
    ░░░░░░░░░░░░  78.09

 7. find-my-way
    █████████████████████  145.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  151.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  242.72

 8. hono (trie)
    ████████████████████████████████████████████████  339.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  319.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  330.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  549.42

 9. hono (pattern)
    █████████████████████████████████████████████████████████████  436.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  379.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  409.93
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  655.04
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██  0.02
    ▓▓  0.02
    ▒▒  0.02
    ░░░░  0.04

 2. mapl (regexp)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░  0.06

 3. mapl (tree)
    ████  0.04
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░  0.06

 4. rou3 (jit)
    ████  0.04
    ▓▓▓▓  0.04
    ▒▒▒▒  0.04
    ░░░░░░  0.07

 5. hono (regexp)
    ████  0.05
    ▓▓▓▓  0.05
    ▒▒▒▒  0.05
    ░░░░░░  0.07

 6. rou3 (tree)
    ████  0.05
    ▓▓▓▓  0.05
    ▒▒▒▒  0.05
    ░░░░░░  0.08

 7. find-my-way
    █████████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 8. hono (pattern)
    ███████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████  1.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.38
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████  0.14
    ▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░░  0.16

 2. mapl (tree)
    ████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 3. mapl (regexp)
    ████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░  0.39

 4. find-my-way
    ███████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░  0.42

 5. rou3 (jit)
    █████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 6. hono (pattern)
    █████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 7. hono (regexp)
    ██████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████  1.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.79

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████  1.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.91
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

 1. stnl (aot)
    ███  2.47
    ▓▓▓  2.51
    ▒▒▒  2.52
    ░░░  2.6

 2. stnl (jit)
    ███  2.5
    ▓▓▓  2.5
    ▒▒▒  2.51
    ░░░  2.57

 3. sury (jit)
    ████  3.39
    ▓▓▓▓  3.38
    ▒▒▒▒  3.4
    ░░░░  3.68

 4. arktype
    █████  4.87
    ▓▓▓▓▓  4.89
    ▒▒▒▒▒  4.92
    ░░░░░░  5.05

 5. typebox (jit)
    ██████  5.36
    ▓▓▓▓▓▓  5.36
    ▒▒▒▒▒▒  5.37
    ░░░░░░  5.57

 6. typebox (aot)
    ██████  5.54
    ▓▓▓▓▓▓  5.55
    ▒▒▒▒▒▒  5.56
    ░░░░░░  5.62

 7. typia (aot)
    ██████████  9.59
    ▓▓▓▓▓▓▓▓▓▓  9.63
    ▒▒▒▒▒▒▒▒▒▒  9.65
    ░░░░░░░░░░  9.73

 8. zod
    ███████████████████████████████  34.02
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  32.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  36.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  41.2

 9. valibot
    ███████████████████████████████████████  42.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  40.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  45.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  45.64

 10. effect-schema
    ██████████████████████████████████████████████████████████████████████████████████████████  100.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  99.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  100.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  100.98
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

 1. manual
    ████████████  94.43
    ▓▓▓▓▓▓▓▓▓▓▓  92.15
    ▒▒▒▒▒▒▒▒▒▒▒  93.15
    ░░░░░░░░░░░░░░░  123.89

 2. ciorent (mutex)
    ██████████████  115.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  112.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  113.32
    ░░░░░░░░░░░░░░░░░  140.16

 3. p-mutex
    █████████████████  147.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  143.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  265.22

 4. ciorent (semaphore)
    ██████████████████  156.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  149.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  155.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░  213.67

 5. p-limit
    ███████████████████████████████  274.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  265.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  282.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  484.41

 6. async-mutex
    ███████████████████████████████████████████████████████  482.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  430.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  568.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  809.07
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ███████  0.16
    ▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒  0.15
    ░░░░░░░░░░  0.25

 2. p-limit
    ███████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░  0.31

 3. async-mutex
    ████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 4. manual
    ████████████████████████████████████████████████████████████████████████████████████████  2.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.47
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ███████  0.15
    ▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░  0.18

 2. p-limit
    █████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░  0.31

 3. async-mutex
    ██████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 4. manual
    ████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.09
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  148.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  144.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  145.73
    ░░░░░░░░░░░░░░░  176.1

 2. p-limit
    ██████████████████████  264.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  258.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  275.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░  295.85

 3. async-mutex
    ████████████████████████████████  387.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  381.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  397.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  476.11

 4. manual
    ██████████████████████████████████████████████████████████████████  811.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  667.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1097.08
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1119.88
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████████████  150.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  143.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  146.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  204.69

 2. p-limit
    ██████████████████████████████████████  263.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  255.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  273.25
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  304.7

 3. async-mutex
    ██████████████████████████████████████████████████████████  401.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  379.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  395.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  632.13

 4. manual
    ████████████████████████████████████████████████████████████  413.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  370.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  383.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  621.29
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████████████  143.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  141.25
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  174.89

 2. manual
    ████████████████████████████████████  221.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  214.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  222.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  278.71

 3. p-limit
    ██████████████████████████████████████████  262.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  254.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  272.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  297.91

 4. async-mutex
    ████████████████████████████████████████████████████████████  380.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  373.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  386.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  576.06
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████████████  140.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  136.9
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  137.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  170.01

 2. manual
    █████████████████████████  144.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  142.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  168.27

 3. p-limit
    ████████████████████████████████████████████  261.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  253.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  271.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  313.77

 4. async-mutex
    █████████████████████████████████████████████████████████████████  383.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  374.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  386.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  543.84
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

 1. deuri
    ████████████████████████  140.9
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  135.99
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  137.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  242.12

 2. native
    ███████████████████████████  158.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  154.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  156.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  180.36

 3. fast-decode-uri-component
    █████████████████████████████████████████████████████████  345.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  335.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  352.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  554.75
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    ██  0.87
    ▓▓  0.87
    ▒▒  0.89
    ░░  0.94

 2. fast-decode-uri-component
    ██████  4.21
    ▓▓▓▓▓▓  4.16
    ▒▒▒▒▒▒  4.17
    ░░░░░░░░  5.87

 3. native
    ███████████████████████████████████████████████████████████  47.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  46.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  46.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  74.02
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

 1. mapl (jit)
    ██  8.61
    ▓▓  8.19
    ▒▒  8.2
    ░░░  17.4

 2. rou3 (tree)
    ██  11.09
    ▓▓  10.21
    ▒▒  10.28
    ░░░░  26.74

 3. hono (regexp)
    ███  12.45
    ▓▓  11.62
    ▒▒  11.65
    ░░░░░  28.45

 4. rou3 (jit)
    ███  16.63
    ▓▓▓  15.97
    ▒▒▒  16.05
    ░░░░  25.98

 5. mapl (tree)
    ████  23.02
    ▓▓▓▓  21.95
    ▒▒▒▒  22.07
    ░░░░░░░  48.43

 6. mapl (regexp)
    ████  23.2
    ▓▓▓▓  21.89
    ▒▒▒▒  22.05
    ░░░░░░░  49.08

 7. find-my-way
    █████████  66.38
    ▓▓▓▓▓▓▓▓▓  61.75
    ▒▒▒▒▒▒▒▒▒  67.48
    ░░░░░░░░░░░░░░░░░░░░░░░░  187.17

 8. hono (trie)
    ████████████████████████████████████████  310.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  300.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  302.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  724.41

 9. hono (pattern)
    ███████████████████████████████████████████████████  403.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  395.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  396.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  696.36
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. hono (regexp)
    ██  13.32
    ▓▓  12.06
    ▒▒  12.38
    ░░░░  23.59

 2. mapl (jit)
    ███  14.12
    ▓▓  13.46
    ▒▒▒  14.19
    ░░░░  25.44

 3. rou3 (tree)
    ███  15.55
    ▓▓▓  14.43
    ▒▒▒  14.77
    ░░░░  31.63

 4. rou3 (jit)
    ███  17.2
    ▓▓▓  16.61
    ▒▒▒  16.69
    ░░░░  29.76

 5. mapl (tree)
    ████  28.77
    ▓▓▓▓  26.95
    ▒▒▒▒  29.66
    ░░░░░░░  58.6

 6. mapl (regexp)
    ████  29.48
    ▓▓▓▓  27.12
    ▒▒▒▒  29.53
    ░░░░░░░░  61.46

 7. find-my-way
    ███████████████  126.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  122.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  124.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  297.58

 8. hono (trie)
    ███████████████████████████████████████████  379.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  360.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  362.14
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  820.66

 9. hono (pattern)
    █████████████████████████████████████████████  405.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  398.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  400.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  613.55
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. hono (regexp)
    ███  12.38
    ▓▓▓  12.12
    ▒▒▒  12.16
    ░░░░  17.97

 2. rou3 (tree)
    ███  14.96
    ▓▓▓  14.6
    ▒▒▒  14.65
    ░░░░  20.45

 3. mapl (jit)
    ███  15.14
    ▓▓▓  14.81
    ▒▒▒  14.83
    ░░░░  19.85

 4. rou3 (jit)
    ███  17.73
    ▓▓▓  17.25
    ▒▒▒  17.33
    ░░░░  24.86

 5. mapl (tree)
    █████  25.65
    ▓▓▓▓  24.88
    ▒▒▒▒  24.95
    ░░░░░  31.35

 6. mapl (regexp)
    █████  25.82
    ▓▓▓▓▓  25.14
    ▒▒▒▒▒  25.19
    ░░░░░  31.58

 7. find-my-way
    ███████████████████████  157.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  151.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  152.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  355.96

 8. hono (trie)
    ████████████████████████████████████████████████████  363.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  357.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  358.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  643.31

 9. hono (pattern)
    ████████████████████████████████████████████████████████  392.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  389.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  390.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  530.95
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.18
    ▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░  0.19

 2. mapl (tree)
    █████████  0.2
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░░░░  0.37

 3. mapl (regexp)
    ████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒▒▒▒▒  0.24
    ░░░░░░░░░░░░░░░░  0.36

 4. find-my-way
    █████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 5. hono (regexp)
    █████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░  0.52

 6. rou3 (jit)
    ████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 7. hono (pattern)
    ██████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 8. rou3 (tree)
    ██████████████████████████████  0.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 9. hono (trie)
    █████████████████████████████████████████████████████████  1.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.13
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░░  0.32

 2. mapl (tree)
    █████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░  0.25

 3. mapl (regexp)
    █████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░  0.43

 4. hono (regexp)
    █████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░  0.52

 5. find-my-way
    █████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.71

 6. rou3 (jit)
    ████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 7. hono (pattern)
    █████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 8. rou3 (tree)
    ██████████████████████████████  0.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.91

 9. hono (trie)
    ██████████████████████████████████████████████████████████  1.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.13
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████  0.14
    ▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░  0.15

 2. mapl (tree)
    █████████  0.16
    ▓▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░░░  0.2

 3. find-my-way
    █████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.24
    ░░░░░░░░░░░░░░░░░░░░░░░  0.47

 4. mapl (regexp)
    █████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.25
    ░░░░░░░░░░░░░░░░░░░░  0.39

 5. hono (regexp)
    █████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░  0.45

 6. rou3 (jit)
    ██████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 7. hono (pattern)
    █████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 8. rou3 (tree)
    ███████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.99

 9. hono (trie)
    ████████████████████████████████████████████████████████  1.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.89
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.16
    ▓▓▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░░  0.18

 2. mapl (tree)
    █████████████  0.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░░  0.25

 3. mapl (regexp)
    ████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░  0.28

 4. find-my-way
    ████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 5. hono (regexp)
    █████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░  0.38

 6. rou3 (jit)
    ███████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 7. hono (pattern)
    ██████████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.81

 8. rou3 (tree)
    ██████████████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.91

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████  1.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.64
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.15
    ▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░  0.16

 2. mapl (tree)
    █████████████  0.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░░  0.25

 3. mapl (regexp)
    ██████████████  0.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░░░░░░░░░  0.34

 4. hono (pattern)
    ███████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 5. hono (regexp)
    ███████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░  0.35

 6. find-my-way
    ████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 7. rou3 (jit)
    ████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 8. rou3 (tree)
    █████████████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.91

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████  1.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.62
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░  0.2

 2. mapl (tree)
    ██████████████  0.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░░░░  0.25

 3. mapl (regexp)
    ██████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░░░  0.28

 4. find-my-way
    ████████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 5. hono (regexp)
    ███████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.36

 6. rou3 (jit)
    ████████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 7. hono (pattern)
    ██████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 8. rou3 (tree)
    ██████████████████████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.85

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████  1.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.42
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  13.17
    ▓▓▓  12.83
    ▒▒▒  12.87
    ░░░░░  19.01

 2. rou3 (tree)
    ████  14.67
    ▓▓▓▓  13.2
    ▒▒▒▒  13.24
    ░░░░░░  27.8

 3. hono (regexp)
    ████  16.86
    ▓▓▓▓▓  18.36
    ▒▒▒▒▒  18.42
    ░░░░░  22.93

 4. mapl (regexp)
    ██████  25.45
    ▓▓▓▓▓▓  24.85
    ▒▒▒▒▒▒  24.9
    ░░░░░░░  31.17

 5. mapl (tree)
    ██████  25.72
    ▓▓▓▓▓▓  25.02
    ▒▒▒▒▒▒  25.12
    ░░░░░░░  31.48

 6. rou3 (jit)
    ██████  26.12
    ▓▓▓▓▓▓  25.67
    ▒▒▒▒▒▒  25.8
    ░░░░░░░░░░░░░  61.2

 7. find-my-way
    ██████████████████████████  129.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  120.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  122.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  321.44

 8. hono (trie)
    ██████████████████████████████████████████████████████████████  317.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  316.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  318.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  332.98

 9. hono (pattern)
    █████████████████████████████████████████████████████████████████████████████████  415.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  415
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  415.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  468.47
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. hono (regexp)
    ██  12.88
    ▓▓  12.56
    ▒▒  12.62
    ░░░  18.47

 2. rou3 (tree)
    ███  19.29
    ▓▓▓  19.77
    ▒▒▒  19.87
    ░░░░░  42.52

 3. rou3 (jit)
    ███  23.3
    ▓▓▓  21.65
    ▒▒▒  21.77
    ░░░░░░░  70.77

 4. mapl (jit)
    ███  26.24
    ▓▓▓  25.73
    ▒▒▒  25.91
    ░░░░  30.17

 5. mapl (regexp)
    ███  27.61
    ▓▓▓  26.73
    ▒▒▒  26.87
    ░░░░  34.11

 6. mapl (tree)
    ███  28.4
    ▓▓▓  27.86
    ▒▒▒  27.96
    ░░░░  32.39

 7. find-my-way
    ████████████████  176.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  157.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  160.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  382.49

 8. hono (pattern)
    █████████████████████████████████████  412.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  411.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  412.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  474.44

 9. hono (trie)
    ████████████████████████████████████████████████████████  635.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  625.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  627.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1044.61
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.17
    ▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░  0.19

 2. mapl (tree)
    ███████████  0.2
    ▓▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░  0.24

 3. mapl (regexp)
    █████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░  0.32

 4. hono (regexp)
    ████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░  0.4

 5. find-my-way
    █████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 6. rou3 (jit)
    ████████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 7. hono (pattern)
    █████████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 8. rou3 (tree)
    ████████████████████████████████████████  0.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.99

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████  1.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.77
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

 1. stnl (jit)
    ██  1.25
    ▓▓  1.22
    ▒▒  1.23
    ░░░  1.92

 2. stnl (aot)
    ██  1.4
    ▓▓  1.32
    ▒▒  1.33
    ░░░  1.99

 3. sury (jit)
    ███  2.1
    ▓▓  1.82
    ▒▒▒  2.2
    ░░░░░  4.54

 4. typia (aot)
    ███  2.84
    ▓▓▓  2.76
    ▒▒▒  2.8
    ░░░░  4.31

 5. arktype
    ███  2.94
    ▓▓▓  2.6
    ▒▒▒  2.87
    ░░░░░  4.53

 6. typebox (aot)
    ████  4.05
    ▓▓▓▓  3.89
    ▒▒▒▒  3.91
    ░░░░░  5.48

 7. typebox (jit)
    ████  4.19
    ▓▓▓▓  4.02
    ▒▒▒▒  4.04
    ░░░░░░  5.8

 8. valibot
    ████████████████  18.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  18.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  18.26
    ░░░░░░░░░░░░░░░░░  19.51

 9. zod
    █████████████████████  24.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  24.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  25
    ░░░░░░░░░░░░░░░░░░░░░░  26.49

 10. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████  110.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  110.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  111.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  112.5
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

 1. ciorent (mutex)
    ██████████  112.56
    ▓▓▓▓▓▓▓▓▓▓  112.53
    ▒▒▒▒▒▒▒▒▒▒▒  126.68
    ░░░░░░░░░░░░  131.3

 2. manual
    ███████████  123.52
    ▓▓▓▓▓▓▓▓▓▓▓  124.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  141.56
    ░░░░░░░░░░░░░░  160.31

 3. ciorent (semaphore)
    █████████████  148.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  142.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  159.02
    ░░░░░░░░░░░░░░░░  184.15

 4. p-mutex
    ██████████████████████████████  359.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  374.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  380.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  412.19

 5. p-limit
    ███████████████████████████████████████████  517.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  521.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  542.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  653.27

 6. async-mutex
    ████████████████████████████████████████████████████████████████  767.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  736.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  818.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1104.95
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ██████  0.15
    ▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒  0.15
    ░░░░░░  0.17

 2. p-limit
    █████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░  0.65

 3. async-mutex
    ████████████████████████  0.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.9

 4. manual
    ███████████████████████████████████████████████████████████████████  2.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.98
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    █████████████  0.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░░░  0.16

 2. p-limit
    █████████████████████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 3. async-mutex
    █████████████████████████████████████████████████████████  0.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.81

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████  1.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.16
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████  141.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  142.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  143.3
    ░░░░░░░░░░░░░░░░░░  161.29

 2. p-limit
    ███████████████████████████████████████████████████████  521.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  521
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  550.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  627.54

 3. manual
    ███████████████████████████████████████████████████████████████████  641.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  648.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  654.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  772.54

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████  727.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  724.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  729.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  868.69
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████  139.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  141.19
    ░░░░░░░░░░░░░░░░░░  158.64

 2. manual
    ████████████████████████████████████████████  413.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  424.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  432.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  449.68

 3. p-limit
    ██████████████████████████████████████████████████████  512.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  522.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  545.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  659.75

 4. async-mutex
    ███████████████████████████████████████████████████████████████████████████  712.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  721.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  727.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  863.15
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████  139.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.93
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  140.36
    ░░░░░░░░░░░░░░░░░░  157.56

 2. manual
    ███████████████████████████  243.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  249.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  252.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  270.09

 3. p-limit
    ███████████████████████████████████████████████████████  512.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  522
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  547.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  642.02

 4. async-mutex
    ██████████████████████████████████████████████████████████████████████████████  723.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  726.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  733.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  848.5
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  131.9
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  133.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  134.4
    ░░░░░░░░░░░░░░░░░  152.7

 2. manual
    █████████████████  153.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  158.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  159.82
    ░░░░░░░░░░░░░░░░░░░  177.03

 3. p-limit
    ███████████████████████████████████████████████████████  514.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  522.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  543.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  625.7

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████  729.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  730.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  739.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  862.28
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

 1. deuri
    ██████████████████████████████████████████████████████  235.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  240.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  243.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  280.79

 2. fast-decode-uri-component
    ███████████████████████████████████████████████████████████████████████  313.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  313.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  327.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  365.3

 3. native
    ████████████████████████████████████████████████████████████████████████████████████  372.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  383.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  395.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  401.2
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.26
    ▓  1.14
    ▒  1.43
    ░  1.45

 2. fast-decode-uri-component
    ██  2.42
    ▓  2.35
    ▒▒  2.54
    ░░  2.65

 3. native
    ████████████████████████████████████████████████████████████████████████████████████  400.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  410.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  421.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  434.18
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

 1. mapl (jit)
    ███  12.26
    ▓▓▓  10.97
    ▒▒▒  11.72
    ░░░░░░  36.29

 2. rou3 (jit)
    █████  32.03
    ▓▓▓▓▓  29.53
    ▒▒▒▒▒  30.65
    ░░░░░░░░░  59.33

 3. mapl (regexp)
    ██████  33.87
    ▓▓▓▓▓  32.78
    ▒▒▒▒▒▒  33.51
    ░░░░░░░░░░░  74.6

 4. mapl (tree)
    ██████  34.14
    ▓▓▓▓▓  32.12
    ▒▒▒▒▒▒  33.53
    ░░░░░░░░░░░  73.89

 5. hono (regexp)
    ████████  50.26
    ▓▓▓▓▓▓▓▓  50.55
    ▒▒▒▒▒▒▒▒  51.62
    ░░░░░░░░░░░  73.71

 6. rou3 (tree)
    ████████  51.26
    ▓▓▓▓▓▓▓▓  49.79
    ▒▒▒▒▒▒▒▒  53.32
    ░░░░░░░░░░░░  78.29

 7. find-my-way
    ███████████████████  132.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  129.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  147.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  201.32

 8. hono (trie)
    ███████████████████████████████████████████████  338.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  305.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  335.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  533.2

 9. hono (pattern)
    ███████████████████████████████████████████████████████████  423.98
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  388.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  399.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  658.17
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  16.77
    ▓▓▓  16.1
    ▒▒▒  16.52
    ░░░░░  40.01

 2. rou3 (jit)
    ████  29.84
    ▓▓▓▓  29.6
    ▒▒▒▒  30.51
    ░░░░░░░  58.09

 3. mapl (tree)
    █████  35.35
    ▓▓▓▓▓  35.66
    ▒▒▒▒▒  37.03
    ░░░░░░░░  66.23

 4. mapl (regexp)
    █████  38.46
    ▓▓▓▓▓  35.8
    ▒▒▒▒▒  37.07
    ░░░░░░░░  66.44

 5. hono (regexp)
    ██████  48.98
    ▓▓▓▓▓▓  46.25
    ▒▒▒▒▒▒  51.13
    ░░░░░░░░░  72.27

 6. rou3 (tree)
    ██████  49.62
    ▓▓▓▓▓▓  48.02
    ▒▒▒▒▒▒  50.95
    ░░░░░░░░░  73.74

 7. find-my-way
    ██████████████████████████  242.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  230.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  250.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  348.54

 8. hono (pattern)
    █████████████████████████████████████████████  415.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  376.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  399.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  663.99

 9. hono (trie)
    ████████████████████████████████████████████████████████████  564.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  504.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  566.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  855.05
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  17.99
    ▓▓▓  16.76
    ▒▒▒  17
    ░░░░░░  41.7

 2. mapl (tree)
    ████  29.45
    ▓▓▓▓  28.7
    ▒▒▒▒▒  32.35
    ░░░░░  38.57

 3. rou3 (jit)
    █████  33.49
    ▓▓▓▓▓  30.69
    ▒▒▒▒▒  31.95
    ░░░░░░░░  63.64

 4. mapl (regexp)
    █████  37.49
    ▓▓▓▓▓  33.73
    ▒▒▒▒▒  37.41
    ░░░░░░░░  61.37

 5. hono (regexp)
    ██████  47.36
    ▓▓▓▓▓▓  45.22
    ▒▒▒▒▒▒▒  51.03
    ░░░░░░░░░  69.86

 6. rou3 (tree)
    ███████  49.41
    ▓▓▓▓▓▓▓  49.15
    ▒▒▒▒▒▒▒  52.68
    ░░░░░░░░░  68.7

 7. find-my-way
    ████████████████████████  203.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  192.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  213.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  319.21

 8. hono (pattern)
    ████████████████████████████████████████████  374.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  356.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  368.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  651.44

 9. hono (trie)
    ██████████████████████████████████████████████████████████  499
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  476.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  490.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  784.37
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.21
    ▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░  0.31

 2. mapl (regexp)
    ███████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░  0.51

 3. mapl (tree)
    ███████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 4. find-my-way
    ████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 5. hono (regexp)
    ██████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.83

 6. hono (pattern)
    ██████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.85

 7. rou3 (jit)
    █████████████████████████████  0.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████  1.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.8

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████  2.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.33
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░  0.27

 2. mapl (regexp)
    ████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░  0.52

 3. mapl (tree)
    ████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░  0.48

 4. find-my-way
    ████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 5. hono (regexp)
    █████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 6. hono (pattern)
    █████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 7. rou3 (jit)
    ████████████████████████████████  0.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████  1.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.79

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████  2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.99
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.22
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.17
    ▓▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░░░░  0.22

 2. rou3 (jit)
    █████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 3. mapl (regexp)
    █████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░  0.4

 4. mapl (tree)
    █████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 5. find-my-way
    █████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 6. hono (regexp)
    ████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 7. hono (pattern)
    ██████████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████  1.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.58

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████  1.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.71
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.2
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░  0.28

 2. mapl (regexp)
    ████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 3. mapl (tree)
    █████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░  0.49

 4. rou3 (jit)
    ███████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 5. find-my-way
    ████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 6. hono (regexp)
    ███████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 7. hono (pattern)
    ██████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.83

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████████████  1.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.8

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████  1.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.07
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░  0.28

 2. mapl (regexp)
    █████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░░  0.43

 3. hono (pattern)
    ██████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░  0.49

 4. mapl (tree)
    █████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 5. rou3 (jit)
    ███████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 6. find-my-way
    ████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.88

 7. hono (regexp)
    █████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.74

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████████  1.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.84

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████  1.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.08
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.18
    ▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░  0.24

 2. mapl (tree)
    ████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░  0.4

 3. mapl (regexp)
    ████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░  0.44

 4. rou3 (jit)
    ███████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.56

 5. find-my-way
    ██████████████████████  0.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 6. hono (regexp)
    ███████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 7. hono (pattern)
    ██████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.44

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████  1.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.92

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████  1.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.08
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  21.17
    ▓▓▓▓  19.31
    ▒▒▒▒  21.33
    ░░░░░░░  45.05

 2. mapl (regexp)
    █████  30.46
    ▓▓▓▓▓  29.26
    ▒▒▒▒▒  32.99
    ░░░░░░░░░  59.04

 3. mapl (tree)
    █████  30.75
    ▓▓▓▓▓  28.89
    ▒▒▒▒▒  32.72
    ░░░░░░░░░  60.42

 4. rou3 (jit)
    ██████  35.26
    ▓▓▓▓▓▓  34.15
    ▒▒▒▒▒▒  36.35
    ░░░░░░░░░░  64.56

 5. hono (regexp)
    ███████  47.71
    ▓▓▓▓▓▓▓  44.52
    ▒▒▒▒▒▒▒▒  48.41
    ░░░░░░░░░░░  72.97

 6. rou3 (tree)
    ████████  51.18
    ▓▓▓▓▓▓▓▓  49.41
    ▒▒▒▒▒▒▒▒  51.61
    ░░░░░░░░░░░  74.47

 7. find-my-way
    █████████████████████  150.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  151.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  154.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  212.72

 8. hono (trie)
    █████████████████████████████████████████████  323.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  301.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  324.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  490.81

 9. hono (pattern)
    ████████████████████████████████████████████████████████████████  461.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  392.12
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  635.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  663.26
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██  0.02
    ▓▓  0.02
    ▒▒  0.02
    ░░░░  0.04

 2. mapl (tree)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░  0.06

 3. mapl (regexp)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░  0.06

 4. rou3 (jit)
    ████  0.04
    ▓▓▓▓  0.04
    ▒▒▒▒  0.04
    ░░░░░  0.07

 5. rou3 (tree)
    ████  0.05
    ▓▓▓▓  0.05
    ▒▒▒▒  0.05
    ░░░░░  0.07

 6. hono (regexp)
    ████  0.05
    ▓▓▓▓  0.05
    ▒▒▒▒  0.05
    ░░░░░  0.07

 7. find-my-way
    ████████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 8. hono (pattern)
    █████████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████  1.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.41
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████  0.15
    ▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒  0.15
    ░░░░░░░░  0.2

 2. mapl (tree)
    ████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░  0.37

 3. mapl (regexp)
    █████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░  0.46

 4. find-my-way
    ████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░  0.5

 5. rou3 (jit)
    █████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 6. hono (regexp)
    ████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 7. hono (pattern)
    ████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████  1.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.46

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████  1.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.94
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

 1. stnl (aot)
    ███  2.74
    ▓▓▓  2.68
    ▒▒▒▒  2.9
    ░░░░  3.8

 2. stnl (jit)
    ███  2.78
    ▓▓▓  2.71
    ▒▒▒  2.78
    ░░░░  3.75

 3. sury (jit)
    ████  3.74
    ▓▓▓▓  3.63
    ▒▒▒▒  3.9
    ░░░░░  4.12

 4. arktype
    ██████  5.1
    ▓▓▓▓▓  5.01
    ▒▒▒▒▒▒  5.11
    ░░░░░░  5.95

 5. typebox (jit)
    ██████  5.74
    ▓▓▓▓▓▓  5.65
    ▒▒▒▒▒▒  5.68
    ░░░░░░░  6.9

 6. typebox (aot)
    ██████  6.13
    ▓▓▓▓▓▓  6.04
    ▒▒▒▒▒▒  6.2
    ░░░░░░░  7.03

 7. typia (aot)
    ██████████  9.64
    ▓▓▓▓▓▓▓▓▓▓  9.66
    ▒▒▒▒▒▒▒▒▒▒  9.71
    ░░░░░░░░░░  9.91

 8. zod
    █████████████████████████████████████  40.12
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  39.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  42.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  43.17

 9. valibot
    █████████████████████████████████████████  44.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  44.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  44.91
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  47.13

 10. effect-schema
    ██████████████████████████████████████████████████████████████████████████████████████████  100.13
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  100.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  101.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  101.6
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

 1. ciorent (mutex)
    ████████████  115.1
    ▓▓▓▓▓▓▓▓▓▓▓  111.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  124.37
    ░░░░░░░░░░░░░░░  146.38

 2. manual
    ████████████  120.06
    ▓▓▓▓▓▓▓▓▓▓▓▓  122.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  128.41
    ░░░░░░░░░░░░░░░░  156.55

 3. ciorent (semaphore)
    ███████████████  145.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  151.95
    ░░░░░░░░░░░░░░░░░░░  189.32

 4. p-mutex
    ███████████████████████████████  324.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  327.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  336.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  390.91

 5. p-limit
    ███████████████████████████████████████████████  489.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  477.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  514.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  676.87

 6. async-mutex
    ███████████████████████████████████████████████████████████████████  704.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  675.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  714.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  961.72
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    █████  0.14
    ▓▓▓▓▓  0.14
    ▒▒▒▒▒  0.14
    ░░░░░░  0.16

 2. p-limit
    ████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░  0.63

 3. async-mutex
    ██████████████████████  0.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.84

 4. manual
    ██████████████████████████████████████████████████████████████  2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.96
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    █████████████  0.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░░░░░░░  0.16

 2. p-limit
    █████████████████████████████████████████  0.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 3. async-mutex
    █████████████████████████████████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 4. manual
    ████████████████████████████████████████████████████████████████████████████████████████  1.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.07
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████████  138.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  137.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  138.12
    ░░░░░░░░░░░░░░░░░░░░  154.94

 2. p-limit
    ██████████████████████████████████████████████████████████  473.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  471.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  488.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  637.72

 3. manual
    █████████████████████████████████████████████████████████████████████████  597.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  601.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  608.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  629.24

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████████  658.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  657.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  668.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  747.28
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████████  140.71
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  139.45
    ░░░░░░░░░░░░░░░░░░░  157.17

 2. manual
    ████████████████████████████████████████████  370.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  370.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  380.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  392.53

 3. p-limit
    ██████████████████████████████████████████████████████████  485.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  478.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  499.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  630.45

 4. async-mutex
    ██████████████████████████████████████████████████████████████████████████████  659.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  654.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  662.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  769.82
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████  135.91
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  134.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  135.48
    ░░░░░░░░░░░░░░░░░░  153.5

 2. manual
    █████████████████████████████  244.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  244.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  245.94
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  265.99

 3. p-limit
    █████████████████████████████████████████████████████████  487.98
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  483
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  498.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  630.52

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████  666.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  658.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  668.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  791.06
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  132.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  131.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  132.2
    ░░░░░░░░░░░░░░  149.55

 2. manual
    ███████████████  156.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  156.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  157
    ░░░░░░░░░░░░░░░░░  175.14

 3. p-limit
    ██████████████████████████████████████████████  509.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  483.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  517.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1008.67

 4. async-mutex
    █████████████████████████████████████████████████████████████  672.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  662.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  675.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  824.84
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

 1. deuri
    ███████████████████████████████████████████████████████████████  254.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  252.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  265.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  291.15

 2. fast-decode-uri-component
    ███████████████████████████████████████████████████████████████████████████  302.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  301.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  314.94
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  342.62

 3. native
    ███████████████████████████████████████████████████████████████████████████████████  334.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  333.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  346.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  366.98
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.34
    ▓  1.41
    ▒  1.42
    ░  1.47

 2. fast-decode-uri-component
    ██  2.46
    ▓▓  2.57
    ▒▒  2.6
    ░░  2.65

 3. native
    ████████████████████████████████████████████████████████████████████████████████████  263.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  263.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  276.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  286.5
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

 1. mapl (jit)
    ███  11.75
    ▓▓  10.45
    ▒▒▒  11.38
    ░░░░░░  34.21

 2. rou3 (jit)
    ██████  32.69
    ▓▓▓▓▓  27.85
    ▒▒▒▒▒  30.65
    ░░░░░░░░░  57.75

 3. mapl (tree)
    ██████  32.76
    ▓▓▓▓▓  31.87
    ▒▒▒▒▒▒  33.1
    ░░░░░░░░░░  65.4

 4. mapl (regexp)
    ██████  35.46
    ▓▓▓▓▓  32.51
    ▒▒▒▒▒▒  36.36
    ░░░░░░░░░░  65.46

 5. hono (regexp)
    ████████  48.52
    ▓▓▓▓▓▓▓  46.02
    ▒▒▒▒▒▒▒▒  49.82
    ░░░░░░░░░░░  72.69

 6. rou3 (tree)
    ████████  51.77
    ▓▓▓▓▓▓▓▓  49.78
    ▒▒▒▒▒▒▒▒  52.97
    ░░░░░░░░░░░  73.41

 7. find-my-way
    █████████████████  115.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  111.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  115.21
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  205.31

 8. hono (trie)
    █████████████████████████████████████████████████  347.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  309.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  354.14
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  532.15

 9. hono (pattern)
    ████████████████████████████████████████████████████████████████████  484.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  387.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  629.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  650.43
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  19.66
    ▓▓▓  16.07
    ▒▒▒  16.65
    ░░░░░░  39.45

 2. rou3 (jit)
    ████  29.36
    ▓▓▓▓  28.45
    ▒▒▒▒  28.6
    ░░░░░  35.51

 3. mapl (tree)
    █████  34.37
    ▓▓▓▓▓  32.89
    ▒▒▒▒▒  33.4
    ░░░░░░░░  58.95

 4. mapl (regexp)
    █████  38.19
    ▓▓▓▓▓  34.92
    ▒▒▒▒▒▒  42.98
    ░░░░░░░░░  68.58

 5. rou3 (tree)
    ███████  47.64
    ▓▓▓▓▓▓  46.62
    ▒▒▒▒▒▒  47.02
    ░░░░░░░░░  69.43

 6. hono (regexp)
    ███████  48.6
    ▓▓▓▓▓▓  46.19
    ▒▒▒▒▒▒▒  51.63
    ░░░░░░░░░  70.84

 7. find-my-way
    ███████████████████████████  224.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  203.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  211.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  361.34

 8. hono (pattern)
    █████████████████████████████████████████████████  410.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  351.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  416.26
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  653.83

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████  619.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  548.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  754.08
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  769.64
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  19.14
    ▓▓▓  17.96
    ▒▒▒  18.15
    ░░░░░░  38.46

 2. mapl (regexp)
    █████  31.91
    ▓▓▓▓  28.62
    ▒▒▒▒▒  32.57
    ░░░░░░░░  57.27

 3. rou3 (jit)
    █████  33.43
    ▓▓▓▓▓  30.09
    ▒▒▒▒▒  31.29
    ░░░░░░░░  62.81

 4. mapl (tree)
    █████  34.58
    ▓▓▓▓▓  30.9
    ▒▒▒▒▒  34.74
    ░░░░░░░░  61.22

 5. hono (regexp)
    ███████  48.5
    ▓▓▓▓▓▓  45.88
    ▒▒▒▒▒▒▒  49.73
    ░░░░░░░░░░  72.94

 6. rou3 (tree)
    ███████  51.18
    ▓▓▓▓▓▓▓  49.42
    ▒▒▒▒▒▒▒  51.73
    ░░░░░░░░░  71.48

 7. find-my-way
    ██████████████████████  177
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  175.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  177.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  236.89

 8. hono (pattern)
    █████████████████████████████████████████████  376.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  341.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  352.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  628.51

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████  605.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  491.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  755.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  768.92
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.22
    ▓▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░░  0.29

 2. mapl (regexp)
    ███████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░  0.47

 3. mapl (tree)
    ██████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░  0.45

 4. find-my-way
    ████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 5. hono (regexp)
    ██████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.74

 6. hono (pattern)
    ███████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 7. rou3 (jit)
    ██████████████████████████████  0.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████  1.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.69

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████  2.02
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.2
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████  0.17
    ▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░░░░  0.28

 2. mapl (regexp)
    ████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.56

 3. mapl (tree)
    ██████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 4. find-my-way
    ████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 5. hono (pattern)
    █████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 6. hono (regexp)
    ██████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 7. rou3 (jit)
    ████████████████████████████████  0.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████  1.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.68

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████  1.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.97
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.14
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████  0.13
    ▓▓▓▓▓▓▓▓  0.13
    ▒▒▒▒▒▒▒▒  0.13
    ░░░░░░░░░░░  0.19

 2. mapl (tree)
    █████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░  0.34

 3. mapl (regexp)
    █████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░  0.36

 4. rou3 (jit)
    ██████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 5. find-my-way
    ██████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 6. hono (regexp)
    ████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 7. hono (pattern)
    ██████████████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████████  1.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.5

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████  1.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.7
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.18
    ▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░░░  0.28

 2. mapl (regexp)
    ████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░  0.47

 3. rou3 (jit)
    ██████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░  0.47

 4. mapl (tree)
    ██████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 5. find-my-way
    ████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 6. hono (pattern)
    ████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.7

 7. hono (regexp)
    █████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████  1.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.6

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████  1.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.96
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.18
    ▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░  0.27

 2. mapl (regexp)
    ██████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░░  0.42

 3. hono (pattern)
    ███████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░  0.4

 4. mapl (tree)
    █████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 5. rou3 (jit)
    ██████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░  0.48

 6. find-my-way
    ████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 7. hono (regexp)
    ██████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████  1.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.61

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████  1.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.93
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░  0.28

 2. mapl (regexp)
    ██████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.54

 3. mapl (tree)
    ███████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 4. rou3 (jit)
    ██████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 5. find-my-way
    ██████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 6. hono (pattern)
    ████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 7. hono (regexp)
    ██████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████  1.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.6

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████████  1.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.87
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  19.58
    ▓▓▓▓  18.74
    ▒▒▒▒  18.9
    ░░░░░░  39.28

 2. mapl (tree)
    ██████  32.29
    ▓▓▓▓▓▓  32.62
    ▒▒▒▒▒▒  33.01
    ░░░░░░░░░  53.92

 3. mapl (regexp)
    ██████  34.77
    ▓▓▓▓▓▓  33.58
    ▒▒▒▒▒▒  34.92
    ░░░░░░░░░  55.88

 4. rou3 (jit)
    ██████  36.31
    ▓▓▓▓▓▓  33.07
    ▒▒▒▒▒▒  35.56
    ░░░░░░░░░░  66.6

 5. rou3 (tree)
    ████████  47.84
    ▓▓▓▓▓▓▓  46.29
    ▒▒▒▒▒▒▒▒  49.15
    ░░░░░░░░░░░  69.22

 6. hono (regexp)
    ████████  48.14
    ▓▓▓▓▓▓▓  46.17
    ▒▒▒▒▒▒▒▒  49.99
    ░░░░░░░░░░  64.65

 7. find-my-way
    ██████████████████████  146.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  144.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  242.25

 8. hono (trie)
    ███████████████████████████████████████████████  329.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  319.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  328.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  544.64

 9. hono (pattern)
    ██████████████████████████████████████████████████████████  404.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  364.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  378.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  643.67
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██  0.02
    ▓▓  0.02
    ▒▒  0.02
    ░░░  0.03

 2. mapl (regexp)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░  0.05

 3. mapl (tree)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░  0.05

 4. rou3 (jit)
    ████  0.04
    ▓▓▓▓  0.04
    ▒▒▒▒  0.04
    ░░░░░░  0.07

 5. hono (regexp)
    ████  0.05
    ▓▓▓▓  0.05
    ▒▒▒▒  0.05
    ░░░░░░  0.07

 6. rou3 (tree)
    ████  0.05
    ▓▓▓▓  0.05
    ▒▒▒▒  0.05
    ░░░░░░  0.07

 7. find-my-way
    ███████████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 8. hono (pattern)
    █████████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████  1.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.34
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████  0.13
    ▓▓▓▓▓▓▓  0.13
    ▒▒▒▒▒▒▒  0.13
    ░░░░░░░░░  0.17

 2. mapl (tree)
    ███████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░░░░░  0.45

 3. mapl (regexp)
    ██████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 4. find-my-way
    ██████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 5. rou3 (jit)
    █████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 6. hono (regexp)
    ██████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 7. hono (pattern)
    ████████████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████  1.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.73

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████████  1.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.81
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

 1. stnl (jit)
    ███  2.62
    ▓▓▓  2.6
    ▒▒▒  2.63
    ░░░░  3.01

 2. stnl (aot)
    ███  2.68
    ▓▓▓  2.68
    ▒▒▒  2.7
    ░░░░  3.11

 3. sury (jit)
    ████  3.51
    ▓▓▓▓  3.5
    ▒▒▒▒  3.52
    ░░░░  3.59

 4. arktype
    █████  4.92
    ▓▓▓▓▓  5
    ▒▒▒▒▒  5.04
    ░░░░░░  5.17

 5. typebox (jit)
    ██████  5.72
    ▓▓▓▓▓▓  5.69
    ▒▒▒▒▒▒  5.73
    ░░░░░░░  6.21

 6. typebox (aot)
    ██████  5.78
    ▓▓▓▓▓▓  5.75
    ▒▒▒▒▒▒  5.78
    ░░░░░░░  6.31

 7. typia (aot)
    ██████████  9.96
    ▓▓▓▓▓▓▓▓▓▓  9.92
    ▒▒▒▒▒▒▒▒▒▒  9.95
    ░░░░░░░░░░  10.51

 8. zod
    ████████████████████████████████  35.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  34.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  38.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  42.65

 9. valibot
    ██████████████████████████████████████  42.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  39.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  45.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  46.74

 10. effect-schema
    ████████████████████████████████████████████████████████████████████████████████████████  98.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  98.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  99.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  101.55
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

 1. ciorent (mutex)
    ███████████  123.86
    ▓▓▓▓▓▓▓▓▓▓▓  122.18
    ▒▒▒▒▒▒▒▒▒▒▒▒  134.67
    ░░░░░░░░░░░░░  153.85

 2. manual
    ███████████  126.42
    ▓▓▓▓▓▓▓▓▓▓▓  124.47
    ▒▒▒▒▒▒▒▒▒▒▒▒  136.29
    ░░░░░░░░░░░░░  155.88

 3. ciorent (semaphore)
    ████████████  145.42
    ▓▓▓▓▓▓▓▓▓▓▓▓  145.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  155.11
    ░░░░░░░░░░░░░░░  173.29

 4. p-mutex
    ████████████████████████████  342.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  349.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  380.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  402.45

 5. p-limit
    ██████████████████████████████████████████  522.91
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  522.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  548.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  653.25

 6. async-mutex
    ███████████████████████████████████████████████████████████████  786.71
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  745.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  842.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1139.68
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ████████  0.15
    ▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░  0.17

 2. p-limit
    ███████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 3. async-mutex
    ██████████████████████████████████████  0.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.91

 4. manual
    ████████████████████████████████████████████████████████████████████████████████████████  1.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.83
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  145.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  146.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  149.5
    ░░░░░░░░░░░░░░░  167.59

 2. p-limit
    █████████████████████████████████████████████  519.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  520.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  550.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  619.74

 3. async-mutex
    ███████████████████████████████████████████████████████████████  733.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  730.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  746.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  915.33

 4. manual
    ████████████████████████████████████████████████████████████████████████████████████  979.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  978.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  985.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1058.63
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  141.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  143.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  145.34
    ░░░░░░░░░░░░░░░░░░  163.62

 2. p-limit
    ███████████████████████████████████████████████████████  526.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  522.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  549.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  636.33

 3. manual
    █████████████████████████████████████████████████████████████  591
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  595.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  602.92
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  660.41

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████  734.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  729.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  753.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  884.96
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  139.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.02
    ░░░░░░░░░░░░░░░░░  161.64

 2. manual
    ███████████████████████████████████████  384.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  386.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  401.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  413.5

 3. p-limit
    █████████████████████████████████████████████████████  523.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  525.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  545.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  663.15

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████  731.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  726.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  739.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  912.58
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████  137.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  139.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  141.76
    ░░░░░░░░░░░░░░░░░░  161.64

 2. manual
    ██████████████████████████  230.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  229.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  233.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  252.64

 3. p-limit
    █████████████████████████████████████████████████████████  522.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  521.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  553.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  621.12

 4. async-mutex
    ███████████████████████████████████████████████████████████████████████████████  727.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  727.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  746.92
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  841.89
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████  131.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  132.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  134.39
    ░░░░░░░░░░░░░░░░░  151.81

 2. manual
    ████████████████  149.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  151.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  152.36
    ░░░░░░░░░░░░░░░░░░  170.29

 3. p-limit
    ███████████████████████████████████████████████████████  531.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  523.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  563.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  667.82

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████  740.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  736.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  753.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  880.91
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

 1. deuri
    ██████████████████████████████████████████████  216.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  214.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  219.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  266.26

 2. fast-decode-uri-component
    ████████████████████████████████████████████████████████████████  303.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  303.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  317.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  339.04

 3. native
    ███████████████████████████████████████████████████████████████████████████████████  395.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  402.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  413.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  432.04
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.13
    ▓  1.11
    ▒  1.16
    ░  1.18

 2. fast-decode-uri-component
    █  2.4
    ▓  2.37
    ▒  2.41
    ░░  2.78

 3. native
    ███████████████████████████████████████████████████████████████████████████████████  409.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  417.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  429.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  451.36
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

 1. mapl (jit)
    ███  13.67
    ▓▓▓  10.56
    ▒▒▒  11.34
    ░░░░░░  37.2

 2. mapl (tree)
    █████  29.13
    ▓▓▓▓▓  27.22
    ▒▒▒▒▒  30.77
    ░░░░░░░░░░░  70.08

 3. rou3 (jit)
    █████  30.88
    ▓▓▓▓▓  28.33
    ▒▒▒▒▒  30.18
    ░░░░░░░░░  57.63

 4. mapl (regexp)
    ██████  32.09
    ▓▓▓▓▓  30.82
    ▒▒▒▒▒▒  31.48
    ░░░░░░░░░  58.46

 5. hono (regexp)
    ████████  50.69
    ▓▓▓▓▓▓▓▓  48.17
    ▒▒▒▒▒▒▒▒  51.71
    ░░░░░░░░░░░░░  81.55

 6. rou3 (tree)
    █████████  52.78
    ▓▓▓▓▓▓▓▓  50
    ▒▒▒▒▒▒▒▒▒  54
    ░░░░░░░░░░░░░  81.48

 7. find-my-way
    ████████████████████  129.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  126.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  130.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  174.26

 8. hono (trie)
    ███████████████████████████████████████████████████████  375.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  350.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  402.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  504.64

 9. hono (pattern)
    ██████████████████████████████████████████████████████████████████  450.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  456.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  469.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  623.7
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  15.84
    ▓▓▓  15.48
    ▒▒▒  16.04
    ░░░░░░  35.38

 2. rou3 (jit)
    █████  29.81
    ▓▓▓▓▓  28.06
    ▒▒▒▒▒▒  31.69
    ░░░░░░░░░  59.22

 3. mapl (tree)
    █████  29.96
    ▓▓▓▓▓  28.48
    ▒▒▒▒▒▒  32.05
    ░░░░░░░░░  52.61

 4. mapl (regexp)
    ██████  33.12
    ▓▓▓▓▓  29.05
    ▒▒▒▒▒▒  33.1
    ░░░░░░░░░  57.69

 5. hono (regexp)
    ████████  49.25
    ▓▓▓▓▓▓▓▓  49.59
    ▒▒▒▒▒▒▒▒  50.55
    ░░░░░░░░░░░░  76.46

 6. rou3 (tree)
    ████████  52.21
    ▓▓▓▓▓▓▓▓  50.32
    ▒▒▒▒▒▒▒▒  51.92
    ░░░░░░░░░░░░  76.56

 7. find-my-way
    ██████████████████████████████  204.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  199.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  202.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  327.32

 8. hono (pattern)
    ███████████████████████████████████████████████████████████████  435.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  447.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  466.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  509.1

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████  539.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  515.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  572.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  627.54
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  17.37
    ▓▓▓  15.88
    ▒▒▒  16.5
    ░░░░░░░  39.54

 2. mapl (tree)
    █████  29.4
    ▓▓▓▓▓  27.28
    ▒▒▒▒▒  31
    ░░░░░░░░░  57.35

 3. mapl (regexp)
    █████  31.02
    ▓▓▓▓▓  29.39
    ▒▒▒▒▒  31.28
    ░░░░░░░░░  55.68

 4. rou3 (jit)
    ██████  31.6
    ▓▓▓▓▓  29.97
    ▒▒▒▒▒▒  32.3
    ░░░░░░░░░  57.61

 5. rou3 (tree)
    ████████  50.52
    ▓▓▓▓▓▓▓▓  49.4
    ▒▒▒▒▒▒▒▒  52.04
    ░░░░░░░░░░░░  77.23

 6. hono (regexp)
    ████████  52.2
    ▓▓▓▓▓▓▓▓  50.16
    ▒▒▒▒▒▒▒▒▒  53.75
    ░░░░░░░░░░░░  79.76

 7. find-my-way
    ███████████████████████████████  212.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  195.93
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  220.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  316.08

 8. hono (pattern)
    █████████████████████████████████████████████████████████████  421.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  403.12
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  458.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  499.52

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████  544.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  514.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  581.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  629.93
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.21
    ▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░░░░  0.31

 2. mapl (regexp)
    ███████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.7

 3. mapl (tree)
    ████████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 4. find-my-way
    ███████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 5. hono (regexp)
    ███████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 6. hono (pattern)
    ███████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.94

 7. rou3 (jit)
    ███████████████████████████████████  0.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.97

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████  1.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.04

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████████  1.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.97
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.01
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.2
    ▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░  0.29

 2. mapl (tree)
    ██████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 3. mapl (regexp)
    ██████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 4. find-my-way
    ██████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.9

 5. hono (pattern)
    ███████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.97

 6. hono (regexp)
    █████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 7. rou3 (jit)
    █████████████████████████████████████  0.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.02

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████  1.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.69

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████████████  1.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.97
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.16
    ▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░░░░░  0.21

 2. rou3 (jit)
    ██████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 3. mapl (regexp)
    █████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 4. find-my-way
    █████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 5. mapl (tree)
    ██████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 6. hono (pattern)
    ████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.98

 7. hono (regexp)
    ████████████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.9

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████████  1.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.49

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████  1.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.53
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.2
    ▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░░  0.28

 2. rou3 (jit)
    ████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 3. mapl (regexp)
    ███████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 4. mapl (tree)
    ██████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.74

 5. find-my-way
    ███████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 6. hono (regexp)
    ███████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 7. hono (pattern)
    ███████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████  1.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.59

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████████████  1.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.81
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░  0.26

 2. hono (pattern)
    ███████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░░░░  0.46

 3. rou3 (jit)
    █████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.56

 4. mapl (regexp)
    ██████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 5. mapl (tree)
    ████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 6. find-my-way
    █████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 7. hono (regexp)
    ███████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.84

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.56

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████  1.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.91
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.17
    ▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░  0.25

 2. rou3 (jit)
    ██████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 3. mapl (tree)
    ███████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░  0.46

 4. mapl (regexp)
    ███████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 5. find-my-way
    ████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 6. hono (pattern)
    ████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.84

 7. hono (regexp)
    ██████████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.94

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.57

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████  1.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.96
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  19.61
    ▓▓▓▓  18.11
    ▒▒▒▒  18.95
    ░░░░░░░░  40.48

 2. mapl (tree)
    ██████  30.07
    ▓▓▓▓▓▓  27.13
    ▒▒▒▒▒▒  30.94
    ░░░░░░░░░░░  56.17

 3. mapl (regexp)
    ██████  31.46
    ▓▓▓▓▓▓  27.51
    ▒▒▒▒▒▒  31.13
    ░░░░░░░░░░░  58.96

 4. rou3 (jit)
    ███████  34.73
    ▓▓▓▓▓▓▓  33.03
    ▒▒▒▒▒▒▒  35.33
    ░░░░░░░░░░░░  64.25

 5. rou3 (tree)
    ██████████  51.14
    ▓▓▓▓▓▓▓▓▓  48.04
    ▒▒▒▒▒▒▒▒▒▒  51.51
    ░░░░░░░░░░░░░░  74.97

 6. hono (regexp)
    ██████████  54.3
    ▓▓▓▓▓▓▓▓▓▓  50.49
    ▒▒▒▒▒▒▒▒▒▒▒  54.79
    ░░░░░░░░░░░░░░░  79.95

 7. find-my-way
    █████████████████████████████  163.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  156.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  171.26
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  226.88

 8. hono (trie)
    █████████████████████████████████████████████████████████████████  366
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  350.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  405.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  446.48

 9. hono (pattern)
    ████████████████████████████████████████████████████████████████████████████  434.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  411.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  467.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  517.75
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███  0.02
    ▓▓▓  0.02
    ▒▒▒  0.02
    ░░░░  0.04

 2. mapl (regexp)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░░  0.06

 3. mapl (tree)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░░  0.06

 4. rou3 (jit)
    ████  0.04
    ▓▓▓▓  0.04
    ▒▒▒▒  0.04
    ░░░░░░  0.06

 5. rou3 (tree)
    █████  0.05
    ▓▓▓▓▓  0.05
    ▒▒▒▒▒  0.05
    ░░░░░░  0.07

 6. hono (regexp)
    █████  0.05
    ▓▓▓▓▓  0.05
    ▒▒▒▒▒  0.05
    ░░░░░░░  0.08

 7. find-my-way
    ████████████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 8. hono (pattern)
    ████████████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████████  1.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.15
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████  0.14
    ▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░░░  0.18

 2. mapl (tree)
    ███████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.54

 3. find-my-way
    ████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 4. mapl (regexp)
    ██████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 5. rou3 (jit)
    ██████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 6. hono (regexp)
    ████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 7. hono (pattern)
    ██████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.98

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████  1.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.68

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████  1.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.85
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

 1. stnl (jit)
    ███  3.17
    ▓▓▓  3.13
    ▒▒▒  3.18
    ░░░░  3.88

 2. stnl (aot)
    ████  3.47
    ▓▓▓▓  3.44
    ▒▒▒▒  3.51
    ░░░░  3.74

 3. sury (jit)
    ████  4.02
    ▓▓▓▓  4.03
    ▒▒▒▒  4.1
    ░░░░  4.43

 4. arktype
    █████  5.5
    ▓▓▓▓▓  5.5
    ▒▒▒▒▒  5.53
    ░░░░░  5.72

 5. typebox (jit)
    ██████  6.25
    ▓▓▓▓▓▓  6.23
    ▒▒▒▒▒▒  6.31
    ░░░░░░  6.63

 6. typebox (aot)
    ██████  6.53
    ▓▓▓▓▓▓  6.4
    ▒▒▒▒▒▒  6.7
    ░░░░░░░  7.49

 7. typia (aot)
    █████████  10.84
    ▓▓▓▓▓▓▓▓▓  10.82
    ▒▒▒▒▒▒▒▒▒  11.08
    ░░░░░░░░░░  11.49

 8. zod
    ████████████████████████████████  40.98
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  40.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  40.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  45.13

 9. valibot
    █████████████████████████████████████  48.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  47.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  50.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  51.28

 10. effect-schema
    ████████████████████████████████████████████████████████████████████████████████  104.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  101.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  103.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  119.83
```
<a name="3_ZGVuby0yLjYuMTA=">

### deno-2.6.10
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (mutex)
    ███████████  119.78
    ▓▓▓▓▓▓▓▓▓▓▓  115.51
    ▒▒▒▒▒▒▒▒▒▒▒  127.01
    ░░░░░░░░░░░░░  144.07

 2. manual
    ███████████  123.01
    ▓▓▓▓▓▓▓▓▓▓▓  125.43
    ▒▒▒▒▒▒▒▒▒▒▒▒  136.74
    ░░░░░░░░░░░░░░  154.82

 3. ciorent (semaphore)
    █████████████  149.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  142.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  161.13
    ░░░░░░░░░░░░░░░░  187.37

 4. p-mutex
    ███████████████████████████████  357.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  361.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  384.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  422.14

 5. p-limit
    ████████████████████████████████████████████  517.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  507.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  525.91
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  652.78

 6. async-mutex
    ██████████████████████████████████████████████████████████████████  786.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  760.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  833.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1090.92
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ██████  0.15
    ▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒  0.15
    ░░░░░░░  0.17

 2. p-limit
    ████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.84

 3. async-mutex
    ████████████████████████████  0.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.05

 4. manual
    █████████████████████████████████████████████████████████████████  1.87
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.61
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████  148.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  146.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  153.1
    ░░░░░░░░░░░░░░░░░  174.14

 2. p-limit
    █████████████████████████████████████████████████  534.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  526.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  547.91
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  635.22

 3. async-mutex
    ███████████████████████████████████████████████████████████████████  737.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  731.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  750.97
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  878.27

 4. manual
    ██████████████████████████████████████████████████████████████████████████████████████████  985.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  986.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  990.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1000.21
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████  143.16
    ▓▓▓▓▓▓▓▓▓▓▓▓  140.83
    ▒▒▒▒▒▒▒▒▒▒▒▒  144.06
    ░░░░░░░░░░░░░░  159.66

 2. p-limit
    ██████████████████████████████████████████████  569.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  533.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  585.94
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1134.18

 3. manual
    ████████████████████████████████████████████████  596.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  596.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  604.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  617.97

 4. async-mutex
    ████████████████████████████████████████████████████████████  740.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  734.99
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  756.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  870.96
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  142.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  139.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.34
    ░░░░░░░░░░░░░░░░░  159.06

 2. manual
    ███████████████████████████████████████  392.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  387.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  401.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  408.85

 3. p-limit
    ███████████████████████████████████████████████████████  554.87
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  538.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  582.02
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  795.28

 4. async-mutex
    ███████████████████████████████████████████████████████████████████████████  750.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  743.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  768.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  918.04
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████  140.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  141.65
    ░░░░░░░░░░░░░░░░░░  157.81

 2. manual
    ██████████████████████████  235.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  233.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  243.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  259.49

 3. p-limit
    ████████████████████████████████████████████████████████████  547.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  532.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  578.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  772.5

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████████  738.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  729.92
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  756.91
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  838.8
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  135.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  133.12
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  136.46
    ░░░░░░░░░░░░░░░░░  152.41

 2. manual
    █████████████████  158.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  155.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  160.61
    ░░░░░░░░░░░░░░░░░░░  180.92

 3. p-limit
    ██████████████████████████████████████████████████████████  555.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  545.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  574.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  738.59

 4. async-mutex
    ███████████████████████████████████████████████████████████████████████████  727.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  721.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  742.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  880.37
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

 1. deuri
    ██████████████████████████████████████████████  212.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  206.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  219.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  272.87

 2. fast-decode-uri-component
    ████████████████████████████████████████████████████████████████████  315.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  309.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  324.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  367.81

 3. native
    ██████████████████████████████████████████████████████████████████████████████████████  403.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  401.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  413.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  425.59
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.15
    ▓  1.13
    ▒  1.17
    ░  1.2

 2. fast-decode-uri-component
    █  2.36
    ▓  2.35
    ▒▒  2.39
    ░░  2.59

 3. native
    ███████████████████████████████████████████████████████████████████████████████████████  409.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  407.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  420.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  429.47
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

 1. mapl (jit)
    ███  12.59
    ▓▓▓  10.5
    ▒▒▒  11.4
    ░░░░░░░  36.36

 2. mapl (tree)
    ██████  30.73
    ▓▓▓▓▓▓  27.48
    ▒▒▒▒▒▒  30.93
    ░░░░░░░░░░░░░░  75.73

 3. mapl (regexp)
    ███████  31.91
    ▓▓▓▓▓▓  27.63
    ▒▒▒▒▒▒  29.83
    ░░░░░░░░░░░░░░  76.74

 4. rou3 (jit)
    ███████  34.25
    ▓▓▓▓▓▓  28.98
    ▒▒▒▒▒▒▒  34.06
    ░░░░░░░░░░░░░  69.23

 5. hono (regexp)
    ██████████  51.35
    ▓▓▓▓▓▓▓▓▓▓  49.34
    ▒▒▒▒▒▒▒▒▒▒  51.94
    ░░░░░░░░░░░░░░░░░  92.5

 6. rou3 (tree)
    ███████████  55.4
    ▓▓▓▓▓▓▓▓▓▓  50.38
    ▒▒▒▒▒▒▒▒▒▒  54.83
    ░░░░░░░░░░░░░░░░░░░░░░░  127.01

 7. find-my-way
    ███████████████████████████  147.9
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  143.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  161.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  225.94

 8. hono (trie)
    █████████████████████████████████████████████████████████████████  370.91
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  343.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  392.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  519.71

 9. hono (pattern)
    █████████████████████████████████████████████████████████████████████████████  438.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  450.12
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  464.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  479.09
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  16.52
    ▓▓▓  15.59
    ▒▒▒▒  16.25
    ░░░░░░░  35.78

 2. mapl (tree)
    ██████  30.73
    ▓▓▓▓▓  28.79
    ▒▒▒▒▒▒  32.62
    ░░░░░░░░░  53.48

 3. rou3 (jit)
    ██████  34.25
    ▓▓▓▓▓▓  29.07
    ▒▒▒▒▒▒  33.73
    ░░░░░░░░░░░░  68.74

 4. mapl (regexp)
    ██████  34.78
    ▓▓▓▓▓▓  33.43
    ▒▒▒▒▒▒  33.94
    ░░░░░░░░░░░  62.46

 5. hono (regexp)
    █████████  52.55
    ▓▓▓▓▓▓▓▓▓  50.56
    ▒▒▒▒▒▒▒▒▒  53.95
    ░░░░░░░░░░░░░  79.6

 6. rou3 (tree)
    ██████████  57.34
    ▓▓▓▓▓▓▓▓▓  50.71
    ▒▒▒▒▒▒▒▒▒▒▒▒  70.64
    ░░░░░░░░░░░░░░░  89.35

 7. find-my-way
    ███████████████████████████████████████  240.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  232.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  257.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  353.73

 8. hono (pattern)
    ███████████████████████████████████████████████████████████████████  425.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  433.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  452.14
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  469.57

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████  530.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  508.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  563.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  576.14
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  17.51
    ▓▓▓  15.93
    ▒▒▒▒  16.61
    ░░░░░░░  39.65

 2. rou3 (jit)
    ██████  33.86
    ▓▓▓▓▓▓  32.04
    ▒▒▒▒▒▒  33.55
    ░░░░░░░░░░  59.06

 3. mapl (tree)
    ██████  33.88
    ▓▓▓▓▓▓  30.27
    ▒▒▒▒▒▒  35.46
    ░░░░░░░░░░  58.31

 4. mapl (regexp)
    ██████  35.27
    ▓▓▓▓▓▓  31.96
    ▒▒▒▒▒▒▒  36.29
    ░░░░░░░░░░░  65.19

 5. rou3 (tree)
    █████████  51.51
    ▓▓▓▓▓▓▓▓▓  49.71
    ▒▒▒▒▒▒▒▒▒  51.98
    ░░░░░░░░░░░░░░░░  97.97

 6. hono (regexp)
    █████████  53.39
    ▓▓▓▓▓▓▓▓▓  49.12
    ▒▒▒▒▒▒▒▒▒  52.95
    ░░░░░░░░░░░░░░░░  94.31

 7. find-my-way
    ███████████████████████████████████  221.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  212.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  235.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  330.65

 8. hono (pattern)
    ███████████████████████████████████████████████████████████████████  426.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  441.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  453
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  466.05

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████  527.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  509.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  570.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  583.63
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.21
    ▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░  0.32

 2. mapl (regexp)
    ████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 3. hono (pattern)
    ████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 4. mapl (tree)
    ██████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.86

 5. hono (regexp)
    ████████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.71

 6. find-my-way
    ████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 7. rou3 (jit)
    ████████████████████████████████████  0.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.91
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.16

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████  1.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.97

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████  2.02
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.16
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.21
    ▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░  0.31

 2. mapl (tree)
    ████████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 3. mapl (regexp)
    █████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 4. hono (pattern)
    █████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 5. find-my-way
    ███████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 6. hono (regexp)
    ██████████████████████████████  0.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 7. rou3 (jit)
    ████████████████████████████████████  0.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.12

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████  1.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.93

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████  1.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.12
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.15
    ▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░  0.19

 2. rou3 (jit)
    ██████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 3. find-my-way
    ███████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 4. mapl (tree)
    ████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 5. mapl (regexp)
    ████████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 6. hono (pattern)
    ████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 7. hono (regexp)
    █████████████████████████████████████  0.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████  1.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.57

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████  1.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.71
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.2
    ▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░  0.22

 2. rou3 (jit)
    ██████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 3. mapl (tree)
    █████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 4. mapl (regexp)
    █████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 5. find-my-way
    ███████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 6. hono (pattern)
    ████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 7. hono (regexp)
    ████████████████████████████████  0.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████  1.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.92

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████  1.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.99
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.19
    ▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░  0.26

 2. hono (pattern)
    ██████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░  0.32

 3. rou3 (jit)
    ████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░  0.55

 4. mapl (regexp)
    ███████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 5. mapl (tree)
    ██████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 6. find-my-way
    ██████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.92

 7. hono (regexp)
    ███████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.92

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████  1.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.79

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████  1.87
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.23
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.17
    ▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░  0.2

 2. rou3 (jit)
    ██████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░  0.44

 3. mapl (tree)
    █████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.74

 4. find-my-way
    ███████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 5. mapl (regexp)
    ███████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.83

 6. hono (pattern)
    █████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.97

 7. hono (regexp)
    ███████████████████████████████████  0.71
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.96

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████  1.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.81

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████  1.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.89
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    █████  20.19
    ▓▓▓▓  18.13
    ▒▒▒▒▒  19.07
    ░░░░░░░░░  43.19

 2. mapl (tree)
    ███████  32.71
    ▓▓▓▓▓▓  27.74
    ▒▒▒▒▒▒▒  31.63
    ░░░░░░░░░░░░  59.92

 3. mapl (regexp)
    ███████  33.95
    ▓▓▓▓▓▓  28.49
    ▒▒▒▒▒▒▒▒▒  44.94
    ░░░░░░░░░░░░  59.02

 4. rou3 (jit)
    ██████████  45.54
    ▓▓▓▓▓▓▓▓  37.52
    ▒▒▒▒▒▒▒▒▒▒▒▒  57.94
    ░░░░░░░░░░░░░░░░  77.88

 5. hono (regexp)
    ██████████  49.78
    ▓▓▓▓▓▓▓▓▓▓  49.13
    ▒▒▒▒▒▒▒▒▒▒▒  50.95
    ░░░░░░░░░░░░░░░  73.36

 6. rou3 (tree)
    ██████████  50.4
    ▓▓▓▓▓▓▓▓▓▓  47.3
    ▒▒▒▒▒▒▒▒▒▒▒  51.21
    ░░░░░░░░░░░░░░░░░  83.44

 7. find-my-way
    █████████████████████████████████  170.12
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  161.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  185.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  220.62

 8. hono (trie)
    ███████████████████████████████████████████████████████████████  330.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  325.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  327.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  388.96

 9. hono (pattern)
    ██████████████████████████████████████████████████████████████████████████████████  434.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  445.99
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  464.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  480.71
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███  0.02
    ▓▓▓  0.02
    ▒▒▒  0.02
    ░░░░  0.04

 2. mapl (tree)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░  0.05

 3. mapl (regexp)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░░░░  0.06

 4. rou3 (jit)
    ████  0.04
    ▓▓▓▓  0.04
    ▒▒▒▒  0.04
    ░░░░░░  0.06

 5. rou3 (tree)
    █████  0.05
    ▓▓▓▓▓  0.05
    ▒▒▒▒▒  0.05
    ░░░░░░░  0.08

 6. hono (regexp)
    █████  0.05
    ▓▓▓▓▓  0.05
    ▒▒▒▒▒  0.05
    ░░░░░░░  0.08

 7. find-my-way
    ████████████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 8. hono (pattern)
    ████████████████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.49

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████  1.12
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.2
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █  0.15
    ▓  0.14
    ▒  0.15
    ░  0.19

 2. find-my-way
    █  0.45
    ▓  0.44
    ▒▒  0.46
    ░░  0.67

 3. mapl (tree)
    ██  0.48
    ▓▓  0.46
    ▒▒  0.48
    ░░  0.74

 4. rou3 (jit)
    ██  0.55
    ▓▓  0.52
    ▒▒  0.58
    ░░  0.79

 5. hono (pattern)
    ██  0.55
    ▓▓  0.55
    ▒▒  0.55
    ░░  0.67

 6. mapl (regexp)
    ███████████████  13
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  12.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  13.55
    ░░░░░░░░░░░░░░░░░░░░  17.74

 7. hono (regexp)
    ████████████████████  16.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  16.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  17.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  26.37

 8. hono (trie)
    ██████████████████████  19.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  17.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  20.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  33.63

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████  55.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  55.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  57.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  82.14
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

 1. stnl (jit)
    █████  4.93
    ▓▓▓▓▓  4.88
    ▒▒▒▒▒  5.05
    ░░░░░░  5.53

 2. stnl (aot)
    █████  5.18
    ▓▓▓▓▓  5.16
    ▒▒▒▒▒▒  5.32
    ░░░░░░  5.83

 3. sury (jit)
    ██████  5.75
    ▓▓▓▓▓▓  5.76
    ▒▒▒▒▒▒  5.9
    ░░░░░░  6.17

 4. arktype
    ███████  7.58
    ▓▓▓▓▓▓▓  7.59
    ▒▒▒▒▒▒▒▒  7.74
    ░░░░░░░░  8.77

 5. typebox (jit)
    ████████  8.1
    ▓▓▓▓▓▓▓▓  8.09
    ▒▒▒▒▒▒▒▒  8.21
    ░░░░░░░░  8.53

 6. typebox (aot)
    ████████  8.66
    ▓▓▓▓▓▓▓▓  8.67
    ▒▒▒▒▒▒▒▒  8.77
    ░░░░░░░░░  9.25

 7. typia (aot)
    ████████████  12.76
    ▓▓▓▓▓▓▓▓▓▓▓▓  12.78
    ▒▒▒▒▒▒▒▒▒▒▒▒  12.91
    ░░░░░░░░░░░░  13.48

 8. zod
    ██████████████████████████████████████  43.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  43.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  43.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  47.8

 9. valibot
    █████████████████████████████████████████████  51.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  51.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  53.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  54.63

 10. effect-schema
    ██████████████████████████████████████████████████████████████████████████████████████████  104.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  104.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  104.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  106
```

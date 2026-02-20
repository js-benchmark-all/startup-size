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
        1. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        2. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    4. [`deno-2.5.7`](#3_ZGVuby0yLjUuNw==)
        1. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        2. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    5. [`node-25.6.1`](#3_bm9kZS0yNS42LjE=)
        1. [`validators/simple`](#4_dmFsaWRhdG9ycy9zaW1wbGU=)
        2. [`validators/references`](#4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz)
        3. [`web-frameworks/wintercg`](#4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=)
    6. [`deno-2.6.10`](#3_ZGVuby0yLjYuMTA=)
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
    6. [`deno-2.6.10`](#3_ZGVuby0yLjYuMTA=)
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
3. [`heap usage`](#2_aGVhcCB1c2FnZQ==)
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
    3. [`node-25.6.1`](#3_bm9kZS0yNS42LjE=)
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
    4. [`bun-1.3.9`](#3_YnVuLTEuMy45)
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
    5. [`deno-2.5.7`](#3_ZGVuby0yLjUuNw==)
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
    6. [`deno-2.6.10`](#3_ZGVuby0yLjYuMTA=)
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
    █  0.78
    ▓  0.77
    ▒  0.79
    ░  0.86

 2. typebox (jit)
    ███████  10.36
    ▓▓▓▓▓▓▓  10.17
    ▒▒▒▒▒▒▒▒  10.73
    ░░░░░░░░░  12.12

 3. typescript (jit)
    ████████████████████████  34.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  35.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  35.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  37.17

 4. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████  136.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  136.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  137.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  142.29
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
    ▓  0.32
    ▒  0.33
    ░  0.41

 2. stnl (jit)
    █  0.48
    ▓  0.47
    ▒  0.49
    ░  0.54

 3. sury
    ██  2.49
    ▓▓  2.48
    ▒▒  2.51
    ░░  2.66

 4. zod
    ███  3.66
    ▓▓▓  3.65
    ▒▒▒  3.71
    ░░░  3.89

 5. typebox (jit)
    ████  5.41
    ▓▓▓▓  5.41
    ▒▒▒▒  5.45
    ░░░░░  5.57

 6. effect/schema
    ██████████  12.41
    ▓▓▓▓▓▓▓▓▓▓  12.39
    ▒▒▒▒▒▒▒▒▒▒  12.45
    ░░░░░░░░░░  13.02

 7. typescript (jit)
    ██████████████  18.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  17.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  21.99
    ░░░░░░░░░░░░░░░░░  22.83

 8. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████  126.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  126.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  127.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  131.53
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ███  0.33
    ▓▓▓  0.32
    ▒▒▒▒  0.34
    ░░░░  0.39

 2. itty-router
    █████  0.46
    ▓▓▓▓▓  0.46
    ▒▒▒▒▒  0.47
    ░░░░░  0.51

 3. hono (quick)
    █████  0.56
    ▓▓▓▓▓  0.56
    ▒▒▒▒▒▒  0.57
    ░░░░░░  0.62

 4. hono (tiny)
    ███████  0.75
    ▓▓▓▓▓▓▓  0.75
    ▒▒▒▒▒▒▒  0.76
    ░░░░░░░░  0.84

 5. hono
    ████████  0.82
    ▓▓▓▓▓▓▓▓  0.82
    ▒▒▒▒▒▒▒▒  0.83
    ░░░░░░░░  0.88

 6. mapl (jit)
    █████████  1.01
    ▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒  1.02
    ░░░░░░░░░░  1.09

 7. elysia
    ████████████████████████████████████████  4.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5.39

 8. elysia (jit)
    █████████████████████████████████████████████████████████████████████████████████████████████  10.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.88
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
    █  0.73
    ▓  0.72
    ▒  0.74
    ░  0.82

 2. typebox (jit)
    ████████  10.32
    ▓▓▓▓▓▓▓▓  10.1
    ▒▒▒▒▒▒▒▒  10.48
    ░░░░░░░░░░  13.49

 3. typescript (jit)
    ████████████████████████  32.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  32.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  35.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  37.07

 4. arktype
    ████████████████████████████████████████████████████████████████████████████████████████████  130.12
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  129.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  131.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  136.84
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
    ▓  0.32
    ▒  0.33
    ░  0.38

 2. stnl (jit)
    █  0.45
    ▓  0.45
    ▒  0.47
    ░  0.5

 3. sury
    ██  2.37
    ▓▓  2.36
    ▒▒  2.4
    ░░  2.54

 4. zod
    ███  3.58
    ▓▓▓  3.56
    ▒▒▒  3.62
    ░░░  3.79

 5. typebox (jit)
    ████  5.29
    ▓▓▓▓  5.27
    ▒▒▒▒  5.34
    ░░░░░  5.64

 6. effect/schema
    ██████████  12.83
    ▓▓▓▓▓▓▓▓▓▓  12.75
    ▒▒▒▒▒▒▒▒▒▒  12.86
    ░░░░░░░░░░░░  15.41

 7. typescript (jit)
    ████████████  15.92
    ▓▓▓▓▓▓▓▓▓▓▓▓  15.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  16.82
    ░░░░░░░░░░░░░░  18.29

 8. arktype
    █████████████████████████████████████████████████████████████████████████████████████████  120.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  120.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  121.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  130.91
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
    ░░░░  0.43

 2. itty-router
    █████  0.47
    ▓▓▓▓▓  0.47
    ▒▒▒▒▒  0.48
    ░░░░░  0.54

 3. hono (quick)
    █████  0.56
    ▓▓▓▓▓  0.56
    ▒▒▒▒▒  0.57
    ░░░░░░  0.61

 4. hono (tiny)
    ███████  0.72
    ▓▓▓▓▓▓▓  0.72
    ▒▒▒▒▒▒▒  0.74
    ░░░░░░░  0.8

 5. hono
    ████████  0.84
    ▓▓▓▓▓▓▓▓  0.84
    ▒▒▒▒▒▒▒▒  0.85
    ░░░░░░░░░  0.92

 6. mapl (jit)
    ██████████  1.04
    ▓▓▓▓▓▓▓▓▓▓  1.04
    ▒▒▒▒▒▒▒▒▒▒  1.05
    ░░░░░░░░░░  1.14

 7. elysia
    ███████████████████████████████████████  4.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.56

 8. elysia (jit)
    █████████████████████████████████████████████████████████████████████████████████████████████  10.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  11.04
```
<a name="3_YnVuLTEuMy45">

### bun-1.3.9
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. stnl (jit)
    █  0.79
    ▓  0.79
    ▒  0.8
    ░  0.85

 2. typebox (jit)
    ████████  12
    ▓▓▓▓▓▓▓▓  11.98
    ▒▒▒▒▒▒▒▒  12.06
    ░░░░░░░░░  12.41

 3. typescript (jit)
    ████████████████████████████  42.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  42.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  42.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  43.51

 4. arktype
    ██████████████████████████████████████████████████████████████████████████████████████████████  143.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  143.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  144.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  147.9
```
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. valibot
    █  0.27
    ▓  0.26
    ▒  0.28
    ░  0.34

 2. stnl (jit)
    █  0.45
    ▓  0.45
    ▒  0.47
    ░  0.51

 3. sury
    ██  2.31
    ▓▓  2.31
    ▒▒  2.32
    ░░  2.39

 4. zod
    ███  3
    ▓▓▓  2.98
    ▒▒▒  3
    ░░░  3.56

 5. typebox (jit)
    █████  5.88
    ▓▓▓▓▓  5.86
    ▒▒▒▒▒  5.91
    ░░░░░  6.11

 6. typescript (jit)
    ████████████  16.21
    ▓▓▓▓▓▓▓▓▓▓▓▓  16.12
    ▒▒▒▒▒▒▒▒▒▒▒▒  16.22
    ░░░░░░░░░░░░░  17.9

 7. effect/schema
    ████████████████  21.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  21.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  21.53
    ░░░░░░░░░░░░░░░░  22

 8. arktype
    ██████████████████████████████████████████████████████████████████████████████████████████████  132.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  132.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  133.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  136.37
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ███  0.29
    ▓▓▓  0.28
    ▒▒▒  0.31
    ░░░░  0.36

 2. itty-router
    ████  0.39
    ▓▓▓▓  0.38
    ▒▒▒▒  0.41
    ░░░░░  0.45

 3. hono (quick)
    ███████  0.66
    ▓▓▓▓▓▓▓  0.66
    ▒▒▒▒▒▒▒  0.68
    ░░░░░░░  0.73

 4. mapl (jit)
    █████████  0.88
    ▓▓▓▓▓▓▓▓▓  0.88
    ▒▒▒▒▒▒▒▒▒  0.9
    ░░░░░░░░░░  0.96

 5. hono (tiny)
    █████████  0.94
    ▓▓▓▓▓▓▓▓▓  0.94
    ▒▒▒▒▒▒▒▒▒  0.95
    ░░░░░░░░░░  1

 6. hono
    ████████████  1.17
    ▓▓▓▓▓▓▓▓▓▓▓▓  1.17
    ▒▒▒▒▒▒▒▒▒▒▒▒  1.19
    ░░░░░░░░░░░░  1.26

 7. elysia
    █████████████████████████████████████████████  4.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.96

 8. elysia (jit)
    █████████████████████████████████████████████████████████████████████████████████████████████  9.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.16
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
    █  0.76
    ▓  0.74
    ▒  0.8
    ░  1.01

 2. typebox (jit)
    ████████  10.55
    ▓▓▓▓▓▓▓▓  10.36
    ▒▒▒▒▒▒▒▒  10.77
    ░░░░░░░░░░  12.7

 3. typescript (jit)
    █████████████████████████  33.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  33.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  34.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  38.25

 4. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████  125.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  125.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  127.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  130.75
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
    ▓  0.33
    ▒  0.35
    ░  0.6

 2. stnl (jit)
    █  0.51
    ▓  0.49
    ▒  0.52
    ░  0.78

 3. sury
    ██  2.42
    ▓▓  2.39
    ▒▒  2.5
    ░░░  2.68

 4. zod
    ███  3.66
    ▓▓▓  3.64
    ▒▒▒  3.7
    ░░░░  4

 5. typebox (jit)
    █████  5.47
    ▓▓▓▓▓  5.53
    ▒▒▒▒▒  5.61
    ░░░░░  5.86

 6. effect/schema
    ██████████  12.84
    ▓▓▓▓▓▓▓▓▓▓  12.77
    ▒▒▒▒▒▒▒▒▒▒▒  12.95
    ░░░░░░░░░░░  13.74

 7. typescript (jit)
    █████████████  16.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  16.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  16.81
    ░░░░░░░░░░░░░░  17.35

 8. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████  118.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  118.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  119.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  123.66
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ███  0.29
    ▓▓▓  0.28
    ▒▒▒  0.3
    ░░░░  0.35

 2. itty-router
    █████  0.52
    ▓▓▓▓▓  0.51
    ▒▒▒▒▒▒  0.54
    ░░░░░░░  0.66

 3. hono (quick)
    ██████  0.61
    ▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒  0.63
    ░░░░░░░  0.73

 4. hono (tiny)
    ████████  0.77
    ▓▓▓▓▓▓▓▓  0.76
    ▒▒▒▒▒▒▒▒  0.78
    ░░░░░░░░░░  0.98

 5. hono
    █████████  0.88
    ▓▓▓▓▓▓▓▓▓  0.88
    ▒▒▒▒▒▒▒▒▒  0.89
    ░░░░░░░░░░  0.98

 6. mapl (jit)
    ██████████  1
    ▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒  1.03
    ░░░░░░░░░░░  1.15

 7. elysia
    ████████████████████████████████████  3.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.1

 8. elysia (jit)
    ███████████████████████████████████████████████████████████████████████████████████████████  9.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.33
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
    █  0.29
    ▓  0.29
    ▒  0.31
    ░  0.33

 2. stnl (jit)
    █  0.45
    ▓  0.45
    ▒  0.47
    ░  0.51

 3. sury
    ██  2.35
    ▓▓  2.32
    ▒▒  2.38
    ░░░  2.92

 4. zod
    ███  3.59
    ▓▓▓  3.56
    ▒▒▒  3.64
    ░░░░  3.92

 5. typebox (jit)
    █████  5.31
    ▓▓▓▓▓  5.29
    ▒▒▒▒▒  5.38
    ░░░░░  5.59

 6. effect/schema
    ██████████  12.34
    ▓▓▓▓▓▓▓▓▓▓  12.26
    ▒▒▒▒▒▒▒▒▒▒  12.36
    ░░░░░░░░░░░░░  15.51

 7. typescript (jit)
    ████████████  15.21
    ▓▓▓▓▓▓▓▓▓▓▓▓  15.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  15.4
    ░░░░░░░░░░░░░  16.07

 8. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████  117.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  117.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  118.14
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  122.09
```
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. stnl (jit)
    █  0.71
    ▓  0.72
    ▒  0.74
    ░  0.81

 2. typebox (jit)
    ████████  10.13
    ▓▓▓▓▓▓▓▓  9.92
    ▒▒▒▒▒▒▒▒  10.5
    ░░░░░░░░░░  13.14

 3. typescript (jit)
    ████████████████████████  32.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  32.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  33.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  38.23

 4. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████  129.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  128.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  130.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  134
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ███  0.35
    ▓▓▓  0.35
    ▒▒▒▒  0.36
    ░░░░  0.4

 2. itty-router
    █████  0.48
    ▓▓▓▓▓  0.47
    ▒▒▒▒▒  0.49
    ░░░░░  0.53

 3. hono (quick)
    █████  0.55
    ▓▓▓▓▓  0.55
    ▒▒▒▒▒  0.57
    ░░░░░░  0.61

 4. hono (tiny)
    ███████  0.72
    ▓▓▓▓▓▓▓  0.72
    ▒▒▒▒▒▒▒  0.74
    ░░░░░░░  0.77

 5. hono
    ███████  0.82
    ▓▓▓▓▓▓▓  0.82
    ▒▒▒▒▒▒▒▒  0.83
    ░░░░░░░░  0.89

 6. mapl (jit)
    █████████  1
    ▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒  1.02
    ░░░░░░░░░░  1.09

 7. elysia
    ██████████████████████████████████████  4.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.56

 8. elysia (jit)
    ██████████████████████████████████████████████████████████████████████████████████████████████  10.92
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.9
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  11.27
```
<a name="3_ZGVuby0yLjYuMTA=">

### deno-2.6.10
<a name="4_dmFsaWRhdG9ycy9zaW1wbGU=">

#### validators/simple
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. valibot
    █  0.38
    ▓  0.38
    ▒  0.4
    ░  0.5

 2. stnl (jit)
    █  0.56
    ▓  0.55
    ▒  0.58
    ░  0.67

 3. sury
    ██  2.45
    ▓▓  2.44
    ▒▒  2.48
    ░░░  2.68

 4. zod
    ███  3.75
    ▓▓▓  3.74
    ▒▒▒  3.81
    ░░░░  3.94

 5. typebox (jit)
    █████  5.53
    ▓▓▓▓▓  5.59
    ▒▒▒▒▒  5.68
    ░░░░░  5.9

 6. effect/schema
    ██████████  13.04
    ▓▓▓▓▓▓▓▓▓▓  12.97
    ▒▒▒▒▒▒▒▒▒▒▒  13.11
    ░░░░░░░░░░░░░  16.03

 7. typescript (jit)
    █████████████  16.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  16.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  17.21
    ░░░░░░░░░░░░░░  17.59

 8. arktype
    ████████████████████████████████████████████████████████████████████████████████████████████  118.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  118.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  120
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  125.31
```
<a name="4_dmFsaWRhdG9ycy9yZWZlcmVuY2Vz">

#### validators/references
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. stnl (jit)
    █  0.79
    ▓  0.79
    ▒  0.82
    ░  0.92

 2. typebox (jit)
    ████████  10.53
    ▓▓▓▓▓▓▓▓  10.43
    ▒▒▒▒▒▒▒▒  10.72
    ░░░░░░░░░  11.95

 3. typescript (jit)
    █████████████████████████  33.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  33.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  33.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  38.16

 4. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████  125.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  125.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  126.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  130.72
```
<a name="4_d2ViLWZyYW1ld29ya3Mvd2ludGVyY2c=">

#### web-frameworks/wintercg
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. mapl (aot)
    ████  0.34
    ▓▓▓▓  0.33
    ▒▒▒▒  0.36
    ░░░░  0.43

 2. itty-router
    ██████  0.56
    ▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒  0.59
    ░░░░░░░  0.69

 3. hono (quick)
    ██████  0.62
    ▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒  0.63
    ░░░░░░░  0.74

 4. hono (tiny)
    ████████  0.79
    ▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒  0.81
    ░░░░░░░░░  0.88

 5. hono
    █████████  0.92
    ▓▓▓▓▓▓▓▓▓  0.91
    ▒▒▒▒▒▒▒▒▒  0.93
    ░░░░░░░░░░  1.01

 6. mapl (jit)
    ██████████  1.04
    ▓▓▓▓▓▓▓▓▓▓  1.03
    ▒▒▒▒▒▒▒▒▒▒  1.06
    ░░░░░░░░░░░  1.15

 7. elysia
    ███████████████████████████████████  3.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.97

 8. elysia (jit)
    ███████████████████████████████████████████████████████████████████████████████████████████  9.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.92
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.48
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
    ███████████  134.37
    ▓▓▓▓▓▓▓▓▓▓▓  131.96
    ▒▒▒▒▒▒▒▒▒▒▒  134.72
    ░░░░░░░░░░░░░░░  179.91

 2. manual
    ████████████  146.2
    ▓▓▓▓▓▓▓▓▓▓▓▓  144.05
    ▒▒▒▒▒▒▒▒▒▒▒▒  146.17
    ░░░░░░░░░░░░░░  168.87

 3. ciorent (semaphore)
    █████████████  156.02
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  151.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  154.17
    ░░░░░░░░░░░░░░░░░░░  230.48

 4. p-mutex
    █████████████████████████  307.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  296.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  380.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  500.22

 5. p-limit
    ███████████████████████████████████████████  534.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  505.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  700.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  863.18

 6. async-mutex
    ███████████████████████████████████████████████████████████████████████  876.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  839.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1043.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1201.03
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
    █████████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.81

 3. async-mutex
    ██████████████████████████████████████  0.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.16

 4. manual
    ██████████████████████████████████████████████████████████████████████████████████████████████  2.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.1
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ██████████████  0.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░░░░░░░  0.18

 2. p-limit
    ███████████████████████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 3. async-mutex
    ██████████████████████████████████████████████████████████████████████  0.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.17

 4. manual
    ████████████████████████████████████████████████████████████████████████████████████████████  1.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.14
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  154.12
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  152.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  155
    ░░░░░░░░░░░░░░  170.89

 2. p-limit
    █████████████████████████████████████████  506.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  466.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  673.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  763.85

 3. manual
    ███████████████████████████████████████████████████  637.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  641.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  647.94
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  665.54

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████  957.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  988.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1066.24
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1212.09
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████  153.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  151.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  154.07
    ░░░░░░░░░░░░░░░  172.92

 2. manual
    ██████████████████████████████████  393.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  391.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  403.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  418.52

 3. p-limit
    █████████████████████████████████████████████  517.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  501.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  674.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  768.99

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████████  926.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  984.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1055.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1125.72
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████  153.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  151.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  154.73
    ░░░░░░░░░░░░░░░  172.16

 2. manual
    ████████████████████████  271.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  270.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  274.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  290.93

 3. p-limit
    █████████████████████████████████████████████  514.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  463.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  665.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  794.53

 4. async-mutex
    ███████████████████████████████████████████████████████████████████████████  862.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  857.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1019.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1116.76
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  150.12
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  148.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  151.85
    ░░░░░░░░░░░░░░░  170.5

 2. manual
    ████████████████  178.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  176.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  178.44
    ░░░░░░░░░░░░░░░░░  196.7

 3. p-limit
    █████████████████████████████████████████████  522.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  478.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  658.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  799.3

 4. async-mutex
    █████████████████████████████████████████████████████████████████████  801.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  731.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  910.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1124.23
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
    ███████████████████████████████████████████████████████████  267.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  265.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  277.08
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  287.78

 2. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████  317.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  316.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  326.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  392.49

 3. native
    ██████████████████████████████████████████████████████████████████████████████████  375.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  370.89
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  385.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  441.17
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.14
    ▓  1.11
    ▒  1.14
    ░  1.88

 2. fast-decode-uri-component
    █  2.55
    ▓  2.29
    ▒  2.32
    ░░  3.94

 3. native
    ████████████████████████████████████████████████████████████████████████████████████████  267.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  269.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  275.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  292.63
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
    ███  16.24
    ▓▓  9.85
    ▒▒  9.89
    ░░░░░░░░░░  66.93

 2. rou3 (jit)
    ██████  37.32
    ▓▓▓▓  27.07
    ▒▒▒▒▒▒▒▒  51.52
    ░░░░░░░░░░░░░░░░░  111.53

 3. mapl (tree)
    ██████  40.78
    ▓▓▓▓▓▓  35.08
    ▒▒▒▒▒▒▒▒  49.54
    ░░░░░░░░░  59.25

 4. mapl (regexp)
    ██████  41.01
    ▓▓▓▓▓  30.84
    ▒▒▒▒▒▒▒▒  53.32
    ░░░░░░░░░  58.42

 5. hono (regexp)
    ████████  51.94
    ▓▓▓▓▓▓▓  44.6
    ▒▒▒▒▒▒▒▒▒▒  65.93
    ░░░░░░░░░░░  71.01

 6. rou3 (tree)
    ████████  54.43
    ▓▓▓▓▓▓▓▓  48.68
    ▒▒▒▒▒▒▒▒▒  57.54
    ░░░░░░░░░░░░░  85.74

 7. find-my-way
    █████████████████████  144.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  127.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  181.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  188.53

 8. hono (trie)
    ██████████████████████████████████████████  287.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  258.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  262.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  421.93

 9. hono (pattern)
    ████████████████████████████████████████████████████████████████  440.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  369.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  640.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  663.71
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  19.79
    ▓▓▓  15.26
    ▒▒▒  18.99
    ░░░░░░  37.94

 2. mapl (tree)
    ██████  35.1
    ▓▓▓▓▓  29.44
    ▒▒▒▒▒  33.5
    ░░░░░░░░░  56.5

 3. rou3 (jit)
    ██████  35.15
    ▓▓▓▓▓  28.41
    ▒▒▒▒▒  32.33
    ░░░░░░░░░░░░░░░░░  112.79

 4. mapl (regexp)
    ██████  40.77
    ▓▓▓▓▓  30.88
    ▒▒▒▒▒▒▒▒  54.08
    ░░░░░░░░░  59.16

 5. rou3 (tree)
    ████████  53.29
    ▓▓▓▓▓▓▓  48.17
    ▒▒▒▒▒▒▒▒  52.62
    ░░░░░░░░░░░  71.33

 6. hono (regexp)
    ████████  53.38
    ▓▓▓▓▓▓▓  48.32
    ▒▒▒▒▒▒▒▒▒▒  66.24
    ░░░░░░░░░░░  71.02

 7. find-my-way
    █████████████████████████████████  226.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  206.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  209.25
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  373.5

 8. hono (trie)
    ██████████████████████████████████████████████████  344.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  298.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  355.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  502.53

 9. hono (pattern)
    █████████████████████████████████████████████████████████  388.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  370.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  373.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  663.19
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  20.59
    ▓▓▓  16.5
    ▒▒▒  16.66
    ░░░░░░  38.94

 2. mapl (tree)
    ██████  36.95
    ▓▓▓▓▓  31.61
    ▒▒▒▒▒▒  35.64
    ░░░░░░░░░  56.86

 3. mapl (regexp)
    ██████  38.92
    ▓▓▓▓▓  29.6
    ▒▒▒▒▒▒▒▒  51.8
    ░░░░░░░░░  55.95

 4. rou3 (jit)
    ██████  40.03
    ▓▓▓▓▓  30.54
    ▒▒▒▒▒▒▒▒  53.45
    ░░░░░░░░░░░░░░░░░  114.17

 5. hono (regexp)
    ████████  50.31
    ▓▓▓▓▓▓▓  45.31
    ▒▒▒▒▒▒▒▒  49.34
    ░░░░░░░░░░░  71.63

 6. rou3 (tree)
    ████████  52.11
    ▓▓▓▓▓▓▓  46.93
    ▒▒▒▒▒▒▒▒  50.73
    ░░░░░░░░░░░  71.02

 7. find-my-way
    ████████████████████████████████  218.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  193.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  207.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  342.94

 8. hono (trie)
    ███████████████████████████████████████████████████  347.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  300.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  482.21
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  500.53

 9. hono (pattern)
    ███████████████████████████████████████████████████████████  401.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  357.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  364.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  661.03
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.25
    ▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒  0.25
    ░░░░░░░░░░░░░░░  0.37

 2. rou3 (jit)
    ███████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 3. mapl (regexp)
    █████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.71

 4. mapl (tree)
    ██████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 5. hono (regexp)
    █████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.02

 6. find-my-way
    ██████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.09

 7. hono (pattern)
    ████████████████████████████  0.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.17

 8. hono (trie)
    ██████████████████████████████████████████████████████████  1.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.51

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████  1.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.45
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.25
    ▓▓▓▓▓▓▓▓▓  0.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░  0.34

 2. rou3 (jit)
    █████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 3. mapl (tree)
    █████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 4. mapl (regexp)
    █████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 5. find-my-way
    ██████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 6. hono (regexp)
    ██████████████████████████  0.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.03

 7. hono (pattern)
    ███████████████████████████  0.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.17

 8. hono (trie)
    ██████████████████████████████████████████████████████████  1.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.5

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████  1.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.37
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.18
    ▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░░░░░  0.24

 2. rou3 (jit)
    ████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 3. mapl (tree)
    ████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.54

 4. mapl (regexp)
    ██████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.7

 5. find-my-way
    ██████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.7

 6. hono (regexp)
    ████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 7. hono (pattern)
    ███████████████████████████████████  0.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.22

 8. rou3 (tree)
    ████████████████████████████████████████████████████████  1.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.12
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.61

 9. hono (trie)
    █████████████████████████████████████████████████████████  1.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.05
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░  0.34

 2. rou3 (jit)
    ██████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 3. mapl (tree)
    █████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 4. mapl (regexp)
    █████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 5. find-my-way
    ██████████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 6. hono (regexp)
    ██████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.71

 7. hono (pattern)
    ██████████████████████████████████  0.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.25

 8. hono (trie)
    ██████████████████████████████████████████████████████████████  1.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.98

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████  1.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.82
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.25
    ▓▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░  0.34

 2. rou3 (jit)
    ████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 3. mapl (tree)
    █████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 4. hono (pattern)
    ████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 5. mapl (regexp)
    █████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 6. hono (regexp)
    ████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.87

 7. find-my-way
    █████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.87
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 8. hono (trie)
    ████████████████████████████████████████████████████████  1.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.07

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████  1.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.21
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.2
    ▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░░  0.29

 2. rou3 (jit)
    ████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 3. mapl (tree)
    ████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 4. find-my-way
    ███████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.85

 5. mapl (regexp)
    ███████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 6. hono (regexp)
    ██████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.96

 7. hono (pattern)
    █████████████████████████████  0.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.86

 8. hono (trie)
    ██████████████████████████████████████████████████████  1.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.3

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████  1.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.16
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ██████  22.84
    ▓▓▓▓▓  17.74
    ▒▒▒▒▒▒▒▒▒  35.81
    ░░░░░░░░░░  40.42

 2. mapl (tree)
    ████████  33.53
    ▓▓▓▓▓▓▓  29.42
    ▒▒▒▒▒▒▒▒  32.78
    ░░░░░░░░░░░░░  54.19

 3. mapl (regexp)
    █████████  36.02
    ▓▓▓▓▓▓▓  28.53
    ▒▒▒▒▒▒▒▒▒▒▒▒  51.01
    ░░░░░░░░░░░░░  55.82

 4. rou3 (jit)
    ██████████  40.45
    ▓▓▓▓▓▓▓▓  32.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  54.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  119.17

 5. hono (regexp)
    ████████████  50.55
    ▓▓▓▓▓▓▓▓▓▓▓  44.71
    ▒▒▒▒▒▒▒▒▒▒▒▒  48.65
    ░░░░░░░░░░░░░░░░░  70.78

 6. rou3 (tree)
    ████████████  51.62
    ▓▓▓▓▓▓▓▓▓▓▓  45.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  65.32
    ░░░░░░░░░░░░░░░░  70.24

 7. find-my-way
    █████████████████████████████████████████  179.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  153.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  232.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  240.74

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████  300.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  262.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  411.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  423.87

 9. hono (pattern)
    █████████████████████████████████████████████████████████████████████████████████████  374.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  373.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  375.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  393.31
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  25.01
    ▓▓▓  19.64
    ▒▒▒▒▒  38.25
    ░░░░░░  42.96

 2. mapl (tree)
    █████  36.43
    ▓▓▓▓  28.68
    ▒▒▒▒▒▒▒  53.66
    ░░░░░░░░  59.3

 3. mapl (regexp)
    ██████  41.62
    ▓▓▓▓▓▓▓  50.91
    ▒▒▒▒▒▒▒  51.95
    ░░░░░░░  56.38

 4. rou3 (jit)
    ██████  41.82
    ▓▓▓▓▓  33.67
    ▒▒▒▒▒▒▒  56.38
    ░░░░░░░░░░░░░░░░  125.34

 5. hono (regexp)
    ███████  50.39
    ▓▓▓▓▓▓  45.5
    ▒▒▒▒▒▒  49.23
    ░░░░░░░░░  70.25

 6. rou3 (tree)
    ███████  52.41
    ▓▓▓▓▓▓  46.44
    ▒▒▒▒▒▒▒▒  65.53
    ░░░░░░░░░  70.43

 7. find-my-way
    ███████████████████████████████████████████  350.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  311.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  319.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  621.7

 8. hono (pattern)
    █████████████████████████████████████████████████  398.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  381.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  384.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  682.63

 9. hono (trie)
    █████████████████████████████████████████████████████████████████  532.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  440.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  767.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  787.83
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████  0.16
    ▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░  0.23

 2. mapl (tree)
    █████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░  0.51

 3. find-my-way
    ███████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.7

 4. rou3 (jit)
    ███████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 5. mapl (regexp)
    █████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 6. hono (regexp)
    █████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1

 7. hono (pattern)
    ███████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 8. hono (trie)
    █████████████████████████████████████████████████████████  1.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.32

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████  1.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.37
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
    ███  2.65
    ▓▓▓  2.65
    ▒▒▒  2.67
    ░░░  2.72

 2. stnl (jit)
    ███  2.73
    ▓▓▓  2.68
    ▒▒▒  2.76
    ░░░  3.06

 3. sury (jit)
    ████  3.71
    ▓▓▓▓  3.66
    ▒▒▒▒  3.83
    ░░░░  3.94

 4. arktype (jit)
    ████  4.68
    ▓▓▓▓  4.66
    ▒▒▒▒  4.71
    ░░░░░  4.79

 5. typebox (aot)
    █████  5.47
    ▓▓▓▓▓  5.36
    ▒▒▒▒▒  5.5
    ░░░░░░  6.22

 6. typebox (jit)
    █████  5.6
    ▓▓▓▓▓  5.6
    ▒▒▒▒▒  5.62
    ░░░░░  5.7

 7. typia (aot)
    █████████  10.25
    ▓▓▓▓▓▓▓▓▓  10.28
    ▒▒▒▒▒▒▒▒▒  10.37
    ░░░░░░░░░  10.6

 8. zod
    █████████████████████████████████  38.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  35.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  44.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  44.57

 9. valibot
    ██████████████████████████████████████  45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  45.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  47.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  48.83

 10. effect-schema
    ███████████████████████████████████████████████████████████████████████████████████████████████  111.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  111.92
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  112.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  113.81
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
    ██████████  116.91
    ▓▓▓▓▓▓▓▓▓▓  113.39
    ▒▒▒▒▒▒▒▒▒▒  116.57
    ░░░░░░░░░░░░  142.07

 2. manual
    ████████████  134.07
    ▓▓▓▓▓▓▓▓▓▓▓  130.74
    ▒▒▒▒▒▒▒▒▒▒▒▒  132.43
    ░░░░░░░░░░░░░░  166.87

 3. ciorent (semaphore)
    █████████████  144.93
    ▓▓▓▓▓▓▓▓▓▓▓▓  140.81
    ▒▒▒▒▒▒▒▒▒▒▒▒  142.49
    ░░░░░░░░░░░░░░░  174.73

 4. p-mutex
    ███████████████████████████  314.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  321.89
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  350.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  429.04

 5. p-limit
    ████████████████████████████████████████████  524.92
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  522
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  630.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  696.54

 6. async-mutex
    █████████████████████████████████████████████████████████████████  772.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  747.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  766.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1146.2
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
    ░░░░░░░░  0.16

 2. p-limit
    █████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.7

 3. async-mutex
    █████████████████████████████████████  0.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.92

 4. manual
    ██████████████████████████████████████████████████████████████████████████████████████████████  1.91
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.92
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.96
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
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░░░░  0.16

 2. p-limit
    ████████████████████████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 3. async-mutex
    ████████████████████████████████████████████████████████████████  0.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.98

 4. manual
    ██████████████████████████████████████████████████████████████████████████████████████████  1.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.11
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████████  144.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  141.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.97
    ░░░░░░░░░░░░░░░░░░░░  159.43

 2. p-limit
    ███████████████████████████████████████████████████████████████  506.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  511.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  600.12
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  680.35

 3. manual
    ██████████████████████████████████████████████████████████████████████████  592.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  593.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  597.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  620.47

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████  679.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  672.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  690.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  772.58
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████████  142.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  140.97
    ░░░░░░░░░░░░░░░░░░  158.6

 2. manual
    ██████████████████████████████████████████  367.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  370.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  374.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  396.27

 3. p-limit
    ████████████████████████████████████████████████████████  497.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  508.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  562.92
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  670.75

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████  684.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  675.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  694.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  856.36
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████████  140.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  139.06
    ░░░░░░░░░░░░░░░░░░░  156.32

 2. manual
    ███████████████████████████████  252.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  247.93
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  258.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  273.25

 3. p-limit
    █████████████████████████████████████████████████████████████  505.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  503.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  605.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  686.58

 4. async-mutex
    ██████████████████████████████████████████████████████████████████████████████████  680.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  671.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  690.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  796.57
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████████  135.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  133.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  134.23
    ░░░░░░░░░░░░░░░░░░░  151.27

 2. manual
    ████████████████████  163.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  160.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  161.58
    ░░░░░░░░░░░░░░░░░░░░░░  180.23

 3. p-limit
    █████████████████████████████████████████████████████████  467.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  464.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  483.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  631.2

 4. async-mutex
    ███████████████████████████████████████████████████████████████████████████████████  680.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  672.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  688.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  791.45
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
    ██████████████████████████████████████████████████████████████████  253.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  253.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  258.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  276.07

 2. fast-decode-uri-component
    ████████████████████████████████████████████████████████████████████████████████  305.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  306.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  311.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  362.67

 3. native
    ███████████████████████████████████████████████████████████████████████████████████  316.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  316.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  326.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  369.3
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
    ▓  1.09
    ▒  1.37
    ░  1.39

 2. fast-decode-uri-component
    █  2.49
    ▓  2.43
    ▒  2.53
    ░  2.74

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████  256.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  253.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  263.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  279.52
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
    ██  12.13
    ▓▓  10.59
    ▒▒  11.12
    ░░░░░░  34.75

 2. rou3 (jit)
    █████  29.31
    ▓▓▓▓▓  28.19
    ▒▒▒▒▒  28.67
    ░░░░░░░░  53.11

 3. mapl (regexp)
    ██████  35.93
    ▓▓▓▓▓▓  34.68
    ▒▒▒▒▒▒  35.03
    ░░░░░░░░░░  63.97

 4. mapl (tree)
    ██████  37.15
    ▓▓▓▓▓▓  35
    ▒▒▒▒▒▒  35.72
    ░░░░░░░░░  59.76

 5. rou3 (tree)
    ████████  51.7
    ▓▓▓▓▓▓▓▓  49.99
    ▒▒▒▒▒▒▒▒  52.79
    ░░░░░░░░░░░░  74.83

 6. hono (regexp)
    █████████  56.89
    ▓▓▓▓▓▓▓▓  52.93
    ▒▒▒▒▒▒▒▒▒  57.13
    ░░░░░░░░░░░░  75.29

 7. find-my-way
    ████████████████████  129.87
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  125.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  134.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  204.81

 8. hono (trie)
    ████████████████████████████████████████████  295.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  267.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  360.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  544.9

 9. hono (pattern)
    █████████████████████████████████████████████████████████  385.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  345.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  370.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  651.82
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  18.11
    ▓▓▓  16.63
    ▒▒▒  16.75
    ░░░░░░  37.32

 2. rou3 (jit)
    █████  33.32
    ▓▓▓▓▓  29.92
    ▒▒▒▒▒  30.52
    ░░░░░░░░░░  61.77

 3. mapl (regexp)
    █████  33.77
    ▓▓▓▓▓▓  34.41
    ▒▒▒▒▒▒  34.68
    ░░░░░░  40.81

 4. mapl (tree)
    ██████  34.34
    ▓▓▓▓▓  32.84
    ▒▒▒▒▒  33.61
    ░░░░░░░░░  58.38

 5. hono (regexp)
    ████████  50.06
    ▓▓▓▓▓▓▓▓  47.69
    ▒▒▒▒▒▒▒▒  52.47
    ░░░░░░░░░░  63.52

 6. rou3 (tree)
    █████████  57.54
    ▓▓▓▓▓▓▓▓  52.92
    ▒▒▒▒▒▒▒▒▒  56.91
    ░░░░░░░░░░░░  76.86

 7. find-my-way
    ███████████████████████████████████████  263.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  218.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  345.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  362.67

 8. hono (trie)
    █████████████████████████████████████████████████  329.71
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  310.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  315.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  536.14

 9. hono (pattern)
    ███████████████████████████████████████████████████████████  399.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  354.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  374.24
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  653.57
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  18.5
    ▓▓▓  17.33
    ▒▒▒  17.47
    ░░░░░░  37.66

 2. mapl (regexp)
    █████  30.69
    ▓▓▓▓▓  28.3
    ▒▒▒▒▒  32.21
    ░░░░░░░░░  54.91

 3. rou3 (jit)
    ██████  34.85
    ▓▓▓▓▓  32.76
    ▒▒▒▒▒  33.99
    ░░░░░░░░░  58.3

 4. mapl (tree)
    ██████  35
    ▓▓▓▓▓▓  34.86
    ▒▒▒▒▒▒  35.22
    ░░░░░░░░░  55.35

 5. rou3 (tree)
    ████████  50.47
    ▓▓▓▓▓▓▓  47.6
    ▒▒▒▒▒▒▒▒  51.1
    ░░░░░░░░░░░  74.2

 6. hono (regexp)
    █████████  55.6
    ▓▓▓▓▓▓▓▓  52.93
    ▒▒▒▒▒▒▒▒▒  56.58
    ░░░░░░░░░░░░  79.86

 7. find-my-way
    ████████████████████████████████████  244.02
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  297.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  303.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  313.48

 8. hono (trie)
    ███████████████████████████████████████████████  320.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  307.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  316.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  541.41

 9. hono (pattern)
    █████████████████████████████████████████████████████  359.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  333.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  339.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  655.73
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.2
    ▓▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░░░░░  0.32

 2. mapl (regexp)
    ██████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░  0.38

 3. mapl (tree)
    ██████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 4. rou3 (jit)
    █████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 5. find-my-way
    ████████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 6. hono (pattern)
    ███████████████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 7. hono (regexp)
    ████████████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.83

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████  1.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.68

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████  1.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.75
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.19
    ▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░░░░░  0.31

 2. mapl (regexp)
    █████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 3. mapl (tree)
    █████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 4. rou3 (jit)
    ████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 5. find-my-way
    ██████████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.03

 6. hono (regexp)
    █████████████████████████████████████  0.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 7. hono (pattern)
    █████████████████████████████████████  0.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.81

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████  1.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.62

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.75
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.15
    ▓▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░░░░  0.22

 2. rou3 (jit)
    ████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 3. mapl (tree)
    ████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 4. mapl (regexp)
    █████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 5. find-my-way
    ████████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 6. hono (regexp)
    ██████████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 7. hono (pattern)
    █████████████████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.81

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████  1.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.42

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████████  1.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.56
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░░░░  0.29

 2. mapl (regexp)
    █████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 3. mapl (tree)
    ███████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 4. rou3 (jit)
    ███████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 5. find-my-way
    ██████████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.88

 6. hono (regexp)
    ███████████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 7. hono (pattern)
    ███████████████████████████████████████  0.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.85

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████  1.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.53

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████████  1.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.68
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░░░░  0.29

 2. mapl (regexp)
    ████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░░░  0.32

 3. hono (pattern)
    ████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 4. mapl (tree)
    █████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 5. rou3 (jit)
    ████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 6. find-my-way
    █████████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 7. hono (regexp)
    ██████████████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████  1.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.55

 9. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.7
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.17
    ▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░░░░░  0.24

 2. mapl (regexp)
    █████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 3. mapl (tree)
    ████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 4. rou3 (jit)
    ████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 5. find-my-way
    ████████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 6. hono (regexp)
    ███████████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 7. hono (pattern)
    ██████████████████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████████████  1.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.53

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████  1.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.65
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  19.33
    ▓▓▓  18.02
    ▒▒▒  18.33
    ░░░░░░  39.47

 2. mapl (regexp)
    █████  30.35
    ▓▓▓▓▓  28.51
    ▒▒▒▒▒  31.77
    ░░░░░░  36.49

 3. mapl (tree)
    █████  31.52
    ▓▓▓▓▓  28.77
    ▒▒▒▒▒  32.52
    ░░░░░░░░░  56.82

 4. rou3 (jit)
    ██████  35.18
    ▓▓▓▓▓  33.2
    ▒▒▒▒▒  34.13
    ░░░░░░░░░░  67.44

 5. rou3 (tree)
    ████████  54.64
    ▓▓▓▓▓▓▓▓  49.93
    ▒▒▒▒▒▒▒▒  54.09
    ░░░░░░░░░░░  74.81

 6. hono (regexp)
    █████████  58.96
    ▓▓▓▓▓▓▓▓  54.39
    ▒▒▒▒▒▒▒▒▒  58.47
    ░░░░░░░░░░░░  80.47

 7. find-my-way
    █████████████████████  141.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  136.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  139.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  212.1

 8. hono (trie)
    ██████████████████████████████████████  255.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  237.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  261.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  429.41

 9. hono (pattern)
    █████████████████████████████████████████████████████████████████  443.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  373
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  627.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  656.09
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  20.99
    ▓▓▓  20.41
    ▒▒▒  20.59
    ░░░░░░  39.69

 2. mapl (regexp)
    ████  29.88
    ▓▓▓▓  28.1
    ▒▒▒▒▒  31.91
    ░░░░░░░  48.93

 3. mapl (tree)
    ████  30.27
    ▓▓▓▓  28.53
    ▒▒▒▒▒  32.14
    ░░░░░░░  53.53

 4. rou3 (jit)
    ██████  39.3
    ▓▓▓▓▓  36.64
    ▒▒▒▒▒  38.14
    ░░░░░░░░░░  72.93

 5. rou3 (tree)
    ███████  49.19
    ▓▓▓▓▓▓▓  47.25
    ▒▒▒▒▒▒▒  50.23
    ░░░░░░░░░░  74.3

 6. hono (regexp)
    ████████  60.95
    ▓▓▓▓▓▓▓▓  57.8
    ▒▒▒▒▒▒▒▒  61.39
    ░░░░░░░░░░░  84.9

 7. find-my-way
    ███████████████████████████████████████  305.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  278.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  288.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  503.82

 8. hono (pattern)
    ████████████████████████████████████████████████  376.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  352.92
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  357.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  660.39

 9. hono (trie)
    ██████████████████████████████████████████████████████████  449.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  418.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  423.25
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  753.91
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
    ██████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 3. mapl (regexp)
    ██████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.56

 4. find-my-way
    █████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 5. rou3 (jit)
    ███████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 6. hono (pattern)
    █████████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 7. hono (regexp)
    █████████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████████  1.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.53

 9. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████████████  1.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.79
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
    ████  3.37
    ▓▓▓  3.33
    ▒▒▒▒  3.44
    ░░░░  3.81

 2. stnl (aot)
    ████  3.6
    ▓▓▓▓  3.56
    ▒▒▒▒  3.77
    ░░░░  4.01

 3. sury (jit)
    █████  4.64
    ▓▓▓▓▓  4.61
    ▒▒▒▒▒  4.75
    ░░░░░  4.93

 4. arktype (jit)
    ██████  6.19
    ▓▓▓▓▓▓  6.14
    ▒▒▒▒▒▒  6.32
    ░░░░░░  6.6

 5. typebox (jit)
    ██████  6.47
    ▓▓▓▓▓▓  6.45
    ▒▒▒▒▒▒▒  6.69
    ░░░░░░░  7.2

 6. typebox (aot)
    ███████  6.98
    ▓▓▓▓▓▓▓  6.99
    ▒▒▒▒▒▒▒  7.32
    ░░░░░░░  7.71

 7. typia (aot)
    ██████████  10.89
    ▓▓▓▓▓▓▓▓▓▓  10.85
    ▒▒▒▒▒▒▒▒▒▒  11
    ░░░░░░░░░░░  11.4

 8. zod
    █████████████████████████████████  36.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  34.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  38.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  39.49

 9. valibot
    █████████████████████████████████████████  44.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  42.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  47.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  47.62

 10. effect-schema
    ███████████████████████████████████████████████████████████████████████████████████████████████  105.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  105.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  106.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  106.63
```
<a name="3_YnVuLTEuMy45">

### bun-1.3.9
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. manual
    ███  0.1
    ▓▓▓  0.09
    ▒▒▒  0.09
    ░░░░  0.12

 2. ciorent (mutex)
    ████  0.12
    ▓▓▓▓  0.12
    ▒▒▒▒  0.12
    ░░░░  0.14

 3. p-mutex
    █████  0.16
    ▓▓▓▓▓  0.15
    ▒▒▒▒▒  0.15
    ░░░░░░░░░  0.31

 4. ciorent (semaphore)
    ██████  0.19
    ▓▓▓▓▓  0.15
    ▒▒▒▒▒  0.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.35

 5. p-limit
    █████████  0.29
    ▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.4

 6. async-mutex
    ██████████████████████████████  1.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.41
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
    ░░░░░░░░  0.2

 2. p-limit
    ███████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░  0.36

 3. async-mutex
    ████████████████████████████████  0.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.4

 4. manual
    ███████████████████████████████████████████████████████████████████████████████████████████████  2.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.46
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ██████████  0.15
    ▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░░░░  0.21

 2. p-limit
    █████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░░░  0.33

 3. async-mutex
    ██████████████████████████████████████████████████  0.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.9
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.54

 4. manual
    ███████████████████████████████████████████████████████████████████████████████  1.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.26
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.31
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████  146.92
    ▓▓▓▓▓▓▓▓▓  143.11
    ▒▒▒▒▒▒▒▒▒  143.84
    ░░░░░░░░░░░░  179.86

 2. p-limit
    █████████████████  260.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  253.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  270.86
    ░░░░░░░░░░░░░░░░░░░  300.75

 3. manual
    ██████████████████████████████████████████  668.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  674.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  677.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  697.97

 4. async-mutex
    ██████████████████████████████████████████████████████████████  987.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1042.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1492.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1539.18
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████  150.36
    ▓▓▓▓▓▓▓▓▓  141.38
    ▒▒▒▒▒▒▒▒▒▒  150.04
    ░░░░░░░░░░░░░  205.12

 2. p-limit
    █████████████████  258.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  251.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  268.69
    ░░░░░░░░░░░░░░░░░░░  299.96

 3. manual
    ████████████████████████  368.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  359.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  382.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░  396.74

 4. async-mutex
    ███████████████████████████████████████████████████████████  930.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  892.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1487.26
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1535.23
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████  141.82
    ▓▓▓▓▓▓▓▓▓  138.49
    ▒▒▒▒▒▒▒▒▒  139.25
    ░░░░░░░░░░░  166.01

 2. manual
    ██████████████  219.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  214.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  216.1
    ░░░░░░░░░░░░░░░░  243.56

 3. p-limit
    █████████████████  260.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  251.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  268.04
    ░░░░░░░░░░░░░░░░░░░░  302.47

 4. async-mutex
    ███████████████████████████████████████████████████████  859.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1037.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1068.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1519.49
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    █████████████  138.34
    ▓▓▓▓▓▓▓▓▓▓▓▓  134.8
    ▒▒▒▒▒▒▒▒▒▒▒▒  135.61
    ░░░░░░░░░░░░░░░  169.03

 2. manual
    █████████████  144.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  142.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  142.81
    ░░░░░░░░░░░░░░░  165.85

 3. p-limit
    ███████████████████████  255.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  249.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  265.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░  279.11

 4. async-mutex
    ██████████████████████████████████████████████████████████████  710.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  790.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1049.02
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1101.21
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
    ███████████████████████████  142.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  140.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  178.47

 2. native
    ███████████████████████████████  164.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  161.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  163.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  187.28

 3. fast-decode-uri-component
    █████████████████████████████████████████████████████████████  330.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  320.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  336.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  523.16
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    ██  0.88
    ▓▓  0.89
    ▒▒  0.89
    ░░  0.91

 2. fast-decode-uri-component
    ██████  3.88
    ▓▓▓▓▓▓  3.87
    ▒▒▒▒▒▒  3.88
    ░░░░░░  4.15

 3. native
    ████████████████████████████████████████████████████████████████  48.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  47.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  47.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  73.04
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
    ██  8.46
    ▓▓  8.27
    ▒▒  8.3
    ░░░  13.82

 2. rou3 (tree)
    ██  10.48
    ▓▓  10.15
    ▒▒  10.21
    ░░░  15.84

 3. hono (regexp)
    ███  12.18
    ▓▓  11.63
    ▒▒  11.66
    ░░░░  17.63

 4. rou3 (jit)
    ███  16.78
    ▓▓▓  15.95
    ▒▒▒  16.07
    ░░░░░  25.98

 5. mapl (regexp)
    ████  22.56
    ▓▓▓▓  21.98
    ▒▒▒▒  22.03
    ░░░░░  28

 6. mapl (tree)
    ████  22.65
    ▓▓▓▓  22.16
    ▒▒▒▒  22.21
    ░░░░░  27.98

 7. find-my-way
    ████████████  67.61
    ▓▓▓▓▓▓▓▓▓▓▓  61.57
    ▒▒▒▒▒▒▒▒▒▒▒▒  65.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  216.18

 8. hono (trie)
    ███████████████████████████████  175.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  168.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  169.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  442.23

 9. hono (pattern)
    ██████████████████████████████████████████████████████████████████████  406.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  403.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  404.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  559.79
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. hono (regexp)
    ███  13.03
    ▓▓▓  12.03
    ▒▒▒  12.27
    ░░░░  21.66

 2. rou3 (tree)
    ███  15.09
    ▓▓▓  14.34
    ▒▒▒  14.59
    ░░░░  21.45

 3. mapl (jit)
    ███  15.56
    ▓▓▓  15.25
    ▒▒▒  15.29
    ░░░░  21.37

 4. rou3 (jit)
    ████  17.5
    ▓▓▓▓  16.63
    ▒▒▒▒  16.75
    ░░░░░░  27.86

 5. mapl (regexp)
    ██████  28.34
    ▓▓▓▓▓  27.32
    ▒▒▒▒▒▒  28.21
    ░░░░░░░  34.08

 6. mapl (tree)
    ██████  28.49
    ▓▓▓▓▓  27.15
    ▒▒▒▒▒▒  29.25
    ░░░░░░░░░  47.21

 7. find-my-way
    ███████████████████████  124.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  119.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  123.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  273.4

 8. hono (trie)
    █████████████████████████████████████  198.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  195.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  197.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  239.08

 9. hono (pattern)
    ██████████████████████████████████████████████████████████████████████████  403.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  399.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  403.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  525.88
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. hono (regexp)
    ██  12.44
    ▓▓  12.16
    ▒▒  12.19
    ░░░  17.78

 2. rou3 (tree)
    ███  14.7
    ▓▓▓  14.4
    ▒▒▒  14.48
    ░░░░  20.01

 3. mapl (jit)
    ███  15.08
    ▓▓▓  14.65
    ▒▒▒  14.78
    ░░░░  20.77

 4. rou3 (jit)
    ███  18.03
    ▓▓▓  17.3
    ▒▒▒  17.42
    ░░░░  24.71

 5. mapl (regexp)
    ████  25.46
    ▓▓▓▓  24.8
    ▒▒▒▒  25
    ░░░░░  30.93

 6. mapl (tree)
    ████  25.54
    ▓▓▓▓  24.91
    ▒▒▒▒  25.14
    ░░░░░  30.8

 7. find-my-way
    █████████████████████████████  185.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  147.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  149.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  631.85

 8. hono (trie)
    ██████████████████████████████  195.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  194.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  194.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  236.33

 9. hono (pattern)
    ████████████████████████████████████████████████████████████  393.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  391.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  392.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  470.78
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███████████████████  189.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  190.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  191.5
    ░░░░░░░░░░░░░░░░░░░░  201.53

 2. mapl (tree)
    ███████████████████  192.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  191.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  193.56
    ░░░░░░░░░░░░░░░░░░░░░░░  229.2

 3. mapl (regexp)
    ████████████████████████  239.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  235.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  237.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  335.05

 4. find-my-way
    ██████████████████████████████████  346.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  327.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  332.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  710.32

 5. hono (regexp)
    █████████████████████████████████████  376.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  371.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  374.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  506.11

 6. rou3 (jit)
    ████████████████████████████████████████████  450.92
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  441.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  445.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  596.78

 7. hono (pattern)
    ████████████████████████████████████████████████████████  574.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  566.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  572.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  742.48

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████████  712.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  692.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  698.21
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  931.93

 9. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████████████  937.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  934.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  939.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  991.5
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.18
    ▓▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░░░░░░░  0.29

 2. mapl (tree)
    ████████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░░  0.24

 3. mapl (regexp)
    ██████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 4. find-my-way
    ██████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 5. hono (regexp)
    ██████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.54

 6. rou3 (jit)
    ██████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 7. hono (pattern)
    █████████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 8. rou3 (tree)
    ██████████████████████████████████████████  0.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.95

 9. hono (trie)
    ███████████████████████████████████████████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.63
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████████████  132.2
    ▓▓▓▓▓▓▓▓▓▓▓▓  132.76
    ▒▒▒▒▒▒▒▒▒▒▒▒  134.5
    ░░░░░░░░░░░░░  143.03

 2. mapl (tree)
    ███████████████  165.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  164.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  166.37
    ░░░░░░░░░░░░░░░░░░░  211.54

 3. find-my-way
    █████████████████████  240.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  232.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  234.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  425.85

 4. mapl (regexp)
    ██████████████████████  256.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  252.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  254.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  376.65

 5. hono (regexp)
    ██████████████████████████████  344.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  340.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  342.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  480.6

 6. rou3 (jit)
    ████████████████████████████████  366.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  358.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  363.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  507.82

 7. hono (pattern)
    ██████████████████████████████████████████████████  579.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  574.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  576.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  767.97

 8. rou3 (tree)
    ████████████████████████████████████████████████████  605.91
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  573.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  582.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1123.2

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████  832.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  826.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  833.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  900.48
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███████████  156.68
    ▓▓▓▓▓▓▓▓▓▓▓  157.39
    ▒▒▒▒▒▒▒▒▒▒▒  158.91
    ░░░░░░░░░░░░  165.08

 2. mapl (tree)
    ██████████████  205.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  204.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  205.4
    ░░░░░░░░░░░░░░░░░  243.38

 3. mapl (regexp)
    ███████████████████  269.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  264.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  266.03
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  393.39

 4. find-my-way
    ███████████████████████  331.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  287.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  290.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  611.75

 5. hono (regexp)
    ████████████████████████  354.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  351.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  353.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  477.39

 6. rou3 (jit)
    ████████████████████████████  413.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  405.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  412.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  595.24

 7. hono (pattern)
    █████████████████████████████████████████  601.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  596.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  598.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  759.92

 8. rou3 (tree)
    ██████████████████████████████████████████████  671.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  655.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  676.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  916.41

 9. hono (trie)
    ██████████████████████████████████████████████████████████████  909.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  877.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  890.14
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1425.14
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  145.83
    ▓▓▓  146.37
    ▒▒▒  148.03
    ░░░  153.89

 2. mapl (tree)
    ████  201.11
    ▓▓▓▓  200.43
    ▒▒▒▒  201.95
    ░░░░░  233.78

 3. mapl (regexp)
    ████  221.28
    ▓▓▓▓  219.79
    ▒▒▒▒  221.2
    ░░░░░  265

 4. hono (pattern)
    ██████  322.15
    ▓▓▓▓▓▓  318.04
    ▒▒▒▒▒▒  320.07
    ░░░░░░░░░  480.06

 5. hono (regexp)
    ██████  327.12
    ▓▓▓▓▓▓  323.57
    ▒▒▒▒▒▒  326.41
    ░░░░░░░░  405.57

 6. rou3 (jit)
    ████████  421.59
    ▓▓▓▓▓▓▓▓  413.1
    ▒▒▒▒▒▒▒▒  417.23
    ░░░░░░░░░░░  589.2

 7. find-my-way
    █████████  453.4
    ▓▓▓▓▓  278.87
    ▒▒▒▒▒▒▒▒▒▒▒  600.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5383.07

 8. rou3 (tree)
    █████████████  697.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  675.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  692.06
    ░░░░░░░░░░░░░░░░░░  1006.52

 9. hono (trie)
    █████████████████  909.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  872.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  879.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  1457.02
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████████████  188.4
    ▓▓▓▓▓▓▓▓▓▓▓▓  188.76
    ▒▒▒▒▒▒▒▒▒▒▒▒  190.12
    ░░░░░░░░░░░░░  200.69

 2. mapl (tree)
    █████████████  206.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  205.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  206.79
    ░░░░░░░░░░░░░░░░  243.7

 3. mapl (regexp)
    ██████████████████  277.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  272.92
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  274.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░  398.82

 4. find-my-way
    ███████████████████  296.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  273.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  275.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  763.14

 5. hono (regexp)
    ██████████████████████  351.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  348.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  350.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  472.35

 6. rou3 (jit)
    ███████████████████████████  421.93
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  409.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  412.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  583.62

 7. hono (pattern)
    █████████████████████████████████████  597.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  590.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  593.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  770.21

 8. rou3 (tree)
    ███████████████████████████████████████████  683.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  666.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  680.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  931.45

 9. hono (trie)
    █████████████████████████████████████████████████████████  909.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  878.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  885.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1556.5
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  13.04
    ▓▓▓  12.77
    ▒▒▒  12.81
    ░░░░  16.95

 2. rou3 (tree)
    ███  13.41
    ▓▓▓  13.21
    ▒▒▒  13.23
    ░░░░  21.68

 3. hono (regexp)
    ███  16.37
    ▓▓▓▓  18.72
    ▒▒▒▒  18.84
    ░░░░░  24.69

 4. mapl (regexp)
    █████  25.45
    ▓▓▓▓▓  24.94
    ▒▒▒▒▒  24.98
    ░░░░░░  31.03

 5. mapl (tree)
    █████  25.64
    ▓▓▓▓▓  24.98
    ▒▒▒▒▒  25.02
    ░░░░░░  31.07

 6. rou3 (jit)
    █████  26.26
    ▓▓▓▓▓  26.16
    ▒▒▒▒▒  26.34
    ░░░░░░░░░░░  61.25

 7. find-my-way
    ████████████████████████  131.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  124.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  126.24
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  297.74

 8. hono (trie)
    ████████████████████████████████  177.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  174.89
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  176.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  363.32

 9. hono (pattern)
    ███████████████████████████████████████████████████████████████████████████  415.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  413.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  414.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  537.37
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. hono (regexp)
    ██  12.64
    ▓▓  12.35
    ▒▒  12.41
    ░░░  18.06

 2. rou3 (tree)
    ███  18.84
    ▓▓▓  19.81
    ▒▒▒  19.92
    ░░░░  25.89

 3. rou3 (jit)
    ███  23.61
    ▓▓▓  21.34
    ▒▒▒  21.51
    ░░░░░░░░░  71.03

 4. mapl (jit)
    ████  26.62
    ▓▓▓▓  26.12
    ▒▒▒▒  26.35
    ░░░░  31.71

 5. mapl (tree)
    ████  28.42
    ▓▓▓▓  27.8
    ▒▒▒▒  27.91
    ░░░░  32.31

 6. mapl (regexp)
    ████  28.79
    ▓▓▓▓  28.35
    ▒▒▒▒  28.43
    ░░░░░  34.39

 7. find-my-way
    █████████████████████  166.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  154.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  156.26
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  320.37

 8. hono (trie)
    █████████████████████████████████████████  335.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  315.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  320
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  788.65

 9. hono (pattern)
    ███████████████████████████████████████████████████  413.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  411.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  412.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  505.89
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
    ▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░  0.18

 2. mapl (tree)
    ███████████  0.2
    ▓▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░  0.23

 3. mapl (regexp)
    ██████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 4. find-my-way
    ████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 5. hono (regexp)
    █████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 6. rou3 (jit)
    █████████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.81

 7. hono (pattern)
    ██████████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 8. rou3 (tree)
    ███████████████████████████████████████████  0.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01

 9. hono (trie)
    ██████████████████████████████████████████████████████████████████  1.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.21
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.8
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
    ██  1.33
    ▓▓  1.31
    ▒▒  1.31
    ░░  1.54

 2. stnl (aot)
    ██  1.34
    ▓▓  1.31
    ▒▒  1.32
    ░░  1.56

 3. sury (jit)
    ██  2
    ▓▓  1.82
    ▒▒  1.93
    ░░░░  4.1

 4. typia (aot)
    ███  2.93
    ▓▓▓  2.74
    ▒▒▒  2.76
    ░░░░░  5.01

 5. arktype (jit)
    ███  3.42
    ▓▓▓  2.64
    ▒▒▒▒  3.9
    ░░░░░░░░░░░  12.42

 6. typebox (jit)
    ████  3.82
    ▓▓▓  3.66
    ▒▒▒  3.68
    ░░░░░  6.02

 7. typebox (aot)
    ████  4.08
    ▓▓▓▓  3.86
    ▒▒▒▒  3.9
    ░░░░░  5.57

 8. valibot
    ██████████████  16.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  16.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  16.14
    ░░░░░░░░░░░░░░░░░░  21.09

 9. zod
    █████████████████████  25.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  24.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  25.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  33.41

 10. effect-schema
    ███████████████████████████████████████████████████████████████████████████████████████████████  117.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  117.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  117.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  118.8
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
    ████████████  115.83
    ▓▓▓▓▓▓▓▓▓▓▓▓  113.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  128.4
    ░░░░░░░░░░░░░░░  144.87

 2. manual
    █████████████  130.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  127.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.55
    ░░░░░░░░░░░░░░░░  159.03

 3. ciorent (semaphore)
    ███████████████  146.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  143.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  159.44
    ░░░░░░░░░░░░░░░░░░░  186.79

 4. p-mutex
    ████████████████████████████████████  354.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  364.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  382.87
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  416.94

 5. p-limit
    ███████████████████████████████████████████████████  512.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  516.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  531.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  634.71

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████  774.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  742.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  828.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  966.8
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
    █████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 3. async-mutex
    ████████████████████████████████████  0.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.97

 4. manual
    ██████████████████████████████████████████████████████████████████████████████████████████████  1.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.03
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ████████████  0.14
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░░░░  0.16

 2. p-limit
    ███████████████████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 3. async-mutex
    █████████████████████████████████████████████████████████████████████  0.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.91
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.97

 4. manual
    ███████████████████████████████████████████████████████████████████████████████████████████  1.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.14
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  139.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  142.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.84
    ░░░░░░░░░░░░░░░░░  159.6

 2. p-limit
    █████████████████████████████████████████████████████  516.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  517.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  542.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  631.4

 3. manual
    █████████████████████████████████████████████████████████████████  628.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  645.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  651.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  708.02

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████████████████  860.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  907.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  913.94
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  941.8
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████  138.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  141.73
    ░░░░░░░░░░░░░░░░  162.09

 2. manual
    ████████████████████████████████████████  400.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  413.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  426.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  447.37

 3. p-limit
    ██████████████████████████████████████████████████  505.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  505.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  526.08
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  635.38

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████  861.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  906.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  913.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  973.33
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  140.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.06
    ░░░░░░░░░░░░░░░░░  160.3

 2. manual
    ██████████████████████████  247.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  249.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  252.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  269.37

 3. p-limit
    ████████████████████████████████████████████████████  508.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  511.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  536.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  611.22

 4. async-mutex
    ███████████████████████████████████████████████████████████████████████████  733.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  719.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  788.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  945.44
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████  133.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  132.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  135.57
    ░░░░░░░░░░░░░░░░  152.57

 2. manual
    █████████████████  153.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  158.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  159.13
    ░░░░░░░░░░░░░░░░░░░  176.13

 3. p-limit
    ███████████████████████████████████████████████████████  517.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  521.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  538.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  613.64

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████  719.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  716.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  729.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  916.29
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
    ██████████████████████████████████████████████████████████  242.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  242.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  251.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  294.65

 2. fast-decode-uri-component
    ██████████████████████████████████████████████████████████████████████████  311.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  313.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  327.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  361.6

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████  377.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  382.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  395.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  407.85
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
    ▓  1.14
    ▒  1.34
    ░  1.45

 2. fast-decode-uri-component
    █  2.41
    ▓  2.34
    ▒  2.55
    ░  2.65

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████  402.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  413.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  422.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  437.33
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
    ██  13.63
    ▓▓  11.2
    ▒▒  11.84
    ░░░░░░  37.34

 2. rou3 (jit)
    █████  30.24
    ▓▓▓▓▓  29.14
    ▒▒▒▒▒  29.89
    ░░░░░░░░░  56.87

 3. mapl (tree)
    █████  31.7
    ▓▓▓▓▓  29.26
    ▒▒▒▒▒  33.27
    ░░░░░░░░░░░  70.4

 4. mapl (regexp)
    ██████  37.21
    ▓▓▓▓▓  33.42
    ▒▒▒▒▒▒  36.88
    ░░░░░░░░░░░  71.6

 5. hono (regexp)
    ████████  49.04
    ▓▓▓▓▓▓▓  47.2
    ▒▒▒▒▒▒▒▒  51.29
    ░░░░░░░░░░░  74.64

 6. rou3 (tree)
    ████████  51.66
    ▓▓▓▓▓▓▓▓  52.1
    ▒▒▒▒▒▒▒▒  53.63
    ░░░░░░░░░░░  75.17

 7. find-my-way
    ████████████████████  131.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  126.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  145.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  188.47

 8. hono (trie)
    █████████████████████████████████████████  277.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  246.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  284
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  428.86

 9. hono (pattern)
    █████████████████████████████████████████████████████████████  412.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  368.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  401.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  658.48
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  16.45
    ▓▓▓  16.08
    ▒▒▒  16.28
    ░░░░░░  36.48

 2. mapl (regexp)
    █████  31.85
    ▓▓▓▓▓  31.58
    ▒▒▒▒▒  32.04
    ░░░░░░░░░░  64.2

 3. rou3 (jit)
    █████  31.9
    ▓▓▓▓▓  29.86
    ▒▒▒▒▒  30.97
    ░░░░░░░░░░  65.88

 4. mapl (tree)
    ██████  35.83
    ▓▓▓▓▓▓  35.39
    ▒▒▒▒▒▒  35.99
    ░░░░░░░░░  59.93

 5. hono (regexp)
    ███████  45.05
    ▓▓▓▓▓▓▓  44.19
    ▒▒▒▒▒▒▒▒  48.44
    ░░░░░░░░░░░  67.88

 6. rou3 (tree)
    ████████  48.81
    ▓▓▓▓▓▓▓▓  48.87
    ▒▒▒▒▒▒▒▒  50.4
    ░░░░░░░░░░░  68.97

 7. find-my-way
    ███████████████████████████████████████  255.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  226.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  327.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  346.67

 8. hono (trie)
    ███████████████████████████████████████████  282.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  274.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  276.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  460.53

 9. hono (pattern)
    ███████████████████████████████████████████████████████████████  416.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  375.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  406
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  644.08
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  16.74
    ▓▓▓▓  16.73
    ▒▒▒▒  16.92
    ░░░░░░░░  37.07

 2. rou3 (jit)
    ██████  30.89
    ▓▓▓▓▓▓  30.94
    ▒▒▒▒▒▒▒  31.97
    ░░░░░░░░  40.53

 3. mapl (regexp)
    ███████  33.37
    ▓▓▓▓▓▓▓  33.1
    ▒▒▒▒▒▒▒  33.93
    ░░░░░░░░░░░  57.51

 4. mapl (tree)
    ███████  36.01
    ▓▓▓▓▓▓▓  33.51
    ▒▒▒▒▒▒▒  34.87
    ░░░░░░░░░░░░  59.07

 5. hono (regexp)
    █████████  46.7
    ▓▓▓▓▓▓▓▓▓  45.24
    ▒▒▒▒▒▒▒▒▒▒  50.55
    ░░░░░░░░░░░░░  67.87

 6. rou3 (tree)
    ██████████  48.21
    ▓▓▓▓▓▓▓▓▓▓  48
    ▒▒▒▒▒▒▒▒▒▒  49.85
    ░░░░░░░░░░░░░░  72.36

 7. find-my-way
    ████████████████████████████████████████  205.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  190.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  210.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  319.58

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████  342.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  318.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  325.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  503.36

 9. hono (pattern)
    ████████████████████████████████████████████████████████████████████  353.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  348.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  351.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  439.82
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.2
    ▓▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░░░░  0.3

 2. mapl (regexp)
    ██████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 3. mapl (tree)
    ██████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 4. find-my-way
    ████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 5. hono (regexp)
    ██████████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 6. hono (pattern)
    ██████████████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 7. rou3 (jit)
    █████████████████████████████████████████  0.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.98

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.68

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████████████  1.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.79
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.2
    ▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░░░  0.28

 2. mapl (regexp)
    ██████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░  0.42

 3. mapl (tree)
    ████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 4. find-my-way
    ███████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.94

 5. hono (regexp)
    ████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.71

 6. hono (pattern)
    █████████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.74

 7. rou3 (jit)
    ██████████████████████████████████████████  0.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01

 8. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.66

 9. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████████████  1.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.78
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.15
    ▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░░░░  0.19

 2. rou3 (jit)
    ████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 3. mapl (tree)
    ████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 4. mapl (regexp)
    █████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.49

 5. find-my-way
    ██████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 6. hono (regexp)
    ███████████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 7. hono (pattern)
    ██████████████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████  1.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.43

 9. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████████████  1.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.57
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.19
    ▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░░  0.28

 2. mapl (regexp)
    ██████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 3. mapl (tree)
    ████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 4. rou3 (jit)
    ███████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 5. find-my-way
    ████████████████████████████  0.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.9

 6. hono (regexp)
    ███████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.91

 7. hono (pattern)
    ██████████████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.86

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████  1.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.53

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████████  1.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.85
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.19
    ▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░░░░  0.27

 2. hono (pattern)
    ████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░░  0.39

 3. mapl (regexp)
    ████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 4. mapl (tree)
    ████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 5. rou3 (jit)
    ███████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 6. hono (regexp)
    ██████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 7. find-my-way
    ███████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.85

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████  1.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.52

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████  1.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.81
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
    ▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░░░░  0.23

 2. mapl (regexp)
    ██████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 3. mapl (tree)
    ███████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 4. rou3 (jit)
    ██████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 5. find-my-way
    ██████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 6. hono (regexp)
    ██████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.88

 7. hono (pattern)
    ████████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.88

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████  1.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.52

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████████  1.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.84
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  21.59
    ▓▓▓  19.28
    ▒▒▒  19.49
    ░░░░░░░░  48.73

 2. mapl (regexp)
    █████  30.57
    ▓▓▓▓▓  28.96
    ▒▒▒▒▒  32.33
    ░░░░░░░░░  54.69

 3. mapl (tree)
    █████  31.83
    ▓▓▓▓▓  29.8
    ▒▒▒▒▒▒  33.28
    ░░░░░░░░░  57.05

 4. rou3 (jit)
    ██████  36.94
    ▓▓▓▓▓▓  33.96
    ▒▒▒▒▒▒  37.19
    ░░░░░░░░░░  63.69

 5. hono (regexp)
    ███████  46.09
    ▓▓▓▓▓▓▓  44.37
    ▒▒▒▒▒▒▒▒  48.39
    ░░░░░░░░░░░  69.3

 6. rou3 (tree)
    ████████  49.97
    ▓▓▓▓▓▓▓▓  46.87
    ▒▒▒▒▒▒▒▒  51.61
    ░░░░░░░░░░░░  76.63

 7. find-my-way
    ████████████████████████  154.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  152.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  158.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  213.45

 8. hono (trie)
    ████████████████████████████████████████████  287.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  266.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  289.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  423.63

 9. hono (pattern)
    ████████████████████████████████████████████████████████  371.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  356.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  361.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  636.9
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  20.23
    ▓▓▓  20.17
    ▒▒▒  20.37
    ░░░░  26.08

 2. mapl (regexp)
    █████  31.85
    ▓▓▓▓▓  32.48
    ▒▒▒▒▒  33.25
    ░░░░░░░░  55.49

 3. mapl (tree)
    █████  31.85
    ▓▓▓▓  28.92
    ▒▒▒▒▒  32.8
    ░░░░░░░░  58.24

 4. rou3 (jit)
    █████  36.22
    ▓▓▓▓▓  35.93
    ▒▒▒▒▒▒  39.01
    ░░░░░░░░░  66.02

 5. rou3 (tree)
    ███████  48.52
    ▓▓▓▓▓▓▓  46.09
    ▒▒▒▒▒▒▒  50.24
    ░░░░░░░░░░  72.18

 6. hono (regexp)
    ███████  50.5
    ▓▓▓▓▓▓▓  46.01
    ▒▒▒▒▒▒▒  52.43
    ░░░░░░░░░░  72.33

 7. find-my-way
    ██████████████████████████████████████████████  349.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  303.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  436.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  500.66

 8. hono (pattern)
    ██████████████████████████████████████████████████████████  442.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  381.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  485.21
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  674.53

 9. hono (trie)
    ████████████████████████████████████████████████████████████  456.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  429.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  439.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  735.96
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
    ░░░░░░░░░░  0.19

 2. mapl (tree)
    ████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 3. mapl (regexp)
    █████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░  0.35

 4. find-my-way
    ███████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 5. rou3 (jit)
    █████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 6. hono (regexp)
    ███████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 7. hono (pattern)
    ███████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 8. hono (trie)
    ████████████████████████████████████████████████████████████████████████  1.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.63

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████  1.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.87
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
    ███  2.66
    ▓▓▓  2.59
    ▒▒▒  2.61
    ░░░░  3.5

 2. stnl (aot)
    ███  2.68
    ▓▓▓  2.68
    ▒▒▒  2.74
    ░░░░  3.6

 3. sury (jit)
    ████  3.53
    ▓▓▓▓  3.52
    ▒▒▒▒  3.57
    ░░░░  3.86

 4. arktype (jit)
    █████  4.92
    ▓▓▓▓▓  4.85
    ▒▒▒▒▒  4.97
    ░░░░░  5.27

 5. typebox (jit)
    █████  5.32
    ▓▓▓▓▓  5.3
    ▒▒▒▒▒▒  5.36
    ░░░░░░░  6.48

 6. typebox (aot)
    ██████  5.57
    ▓▓▓▓▓▓  5.56
    ▒▒▒▒▒▒  5.62
    ░░░░░░░  6.98

 7. typia (aot)
    █████████  9.55
    ▓▓▓▓▓▓▓▓▓  9.5
    ▒▒▒▒▒▒▒▒▒  9.58
    ░░░░░░░░░░  10.27

 8. zod
    ████████████████████████████████████  37.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  37.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  37.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  40.57

 9. valibot
    ██████████████████████████████████████████  44.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  43.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  46.26
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  47.57

 10. effect-schema
    ███████████████████████████████████████████████████████████████████████████████████████████████  101.12
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  101.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  102.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  102.44
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
    ███████████  117.31
    ▓▓▓▓▓▓▓▓▓▓  113.18
    ▒▒▒▒▒▒▒▒▒▒▒  124.07
    ░░░░░░░░░░░░░  145.67

 2. manual
    ███████████  127.94
    ▓▓▓▓▓▓▓▓▓▓▓  125.1
    ▒▒▒▒▒▒▒▒▒▒▒  128.26
    ░░░░░░░░░░░░░░  155.66

 3. ciorent (semaphore)
    █████████████  148.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  140.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  157.14
    ░░░░░░░░░░░░░░░░░  188.31

 4. p-mutex
    ████████████████████████████  323.9
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  328.93
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  345.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  406.7

 5. p-limit
    ███████████████████████████████████████████  492.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  465.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  539.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  658.63

 6. async-mutex
    █████████████████████████████████████████████████████████████████████  804.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  763.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  886.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1121.88
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ███████  0.15
    ▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒  0.15
    ░░░░░░░░  0.17

 2. p-limit
    ████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 3. async-mutex
    █████████████████████████████████████  0.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.07

 4. manual
    ███████████████████████████████████████████████████████████████████████████████████████████  1.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.97
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.08
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
    ░░░░░░░░░░░░░░░  0.16

 2. p-limit
    █████████████████████████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 3. async-mutex
    ████████████████████████████████████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 4. manual
    ██████████████████████████████████████████████████████████████████████████████████████████████  1.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.08
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████████  143.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  143.29
    ░░░░░░░░░░░░░░░░░░░░░  162.51

 2. p-limit
    ████████████████████████████████████████████████████████████  485.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  469.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  506.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  648.15

 3. manual
    ███████████████████████████████████████████████████████████████████████████  603.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  606.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  614.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  637.69

 4. async-mutex
    ███████████████████████████████████████████████████████████████████████████████████  665.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  663.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  670.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  778.19
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████████  142.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  139.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.51
    ░░░░░░░░░░░░░░░░░░░░  165.44

 2. manual
    ██████████████████████████████████████████████  377.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  374.12
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  386.24
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  446.6

 3. p-limit
    ███████████████████████████████████████████████████████████  492.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  469.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  526.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  636.83

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████████  664.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  655.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  665.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  802.79
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████████  140.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  140.2
    ░░░░░░░░░░░░░░░░░░░░  158.31

 2. manual
    ███████████████████████████████  253.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  249.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  264.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  272.27

 3. p-limit
    ████████████████████████████████████████████████████████████  487.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  476.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  503.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  634.66

 4. async-mutex
    ██████████████████████████████████████████████████████████████████████████████████  664.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  659.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  671.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  786.71
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ████████████████  135.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  132.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  134.43
    ░░░░░░░░░░░░░░░░░░  153.49

 2. manual
    ███████████████████  161.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  159.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  160.83
    ░░░░░░░░░░░░░░░░░░░░░  180.19

 3. p-limit
    ████████████████████████████████████████████████████████  492.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  478.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  513.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  642.91

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████  675.13
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  665.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  679.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  849.32
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
    ███████████████████████████████████████████████████████████████████  261.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  257.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  270.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  297.75

 2. fast-decode-uri-component
    ██████████████████████████████████████████████████████████████████████████████  304.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  302.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  313.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  344.76

 3. native
    ██████████████████████████████████████████████████████████████████████████████████████  335.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  331.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  349.21
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  375.84
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.2
    ▓  1.14
    ▒  1.15
    ░  1.44

 2. fast-decode-uri-component
    █  2.35
    ▓  2.3
    ▒  2.32
    ░  2.63

 3. native
    ██████████████████████████████████████████████████████████████████████████████████████████  266.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  265.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  277.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  286.74
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
    ██  11.94
    ▓▓  10.45
    ▒▒  11.44
    ░░░░░░  37.13

 2. rou3 (jit)
    █████  28.63
    ▓▓▓▓▓  27.47
    ▒▒▒▒▒  28.95
    ░░░░░░░░░  56.73

 3. mapl (regexp)
    ██████  36.1
    ▓▓▓▓▓▓  33.28
    ▒▒▒▒▒▒  37.12
    ░░░░░░░░░░░  70.55

 4. mapl (tree)
    ██████  36.69
    ▓▓▓▓▓  32.49
    ▒▒▒▒▒▒▒▒  52.88
    ░░░░░░░░░░  66.01

 5. hono (regexp)
    ████████  50.68
    ▓▓▓▓▓▓▓  46.1
    ▒▒▒▒▒▒▒▒  52.51
    ░░░░░░░░░░░░  73.49

 6. rou3 (tree)
    █████████  53.33
    ▓▓▓▓▓▓▓▓  51.5
    ▒▒▒▒▒▒▒▒▒  54.74
    ░░░░░░░░░░░░  77.2

 7. find-my-way
    ████████████████████  130.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  120.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  142.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  216.09

 8. hono (trie)
    █████████████████████████████████████████  268.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  260.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  263.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  564.05

 9. hono (pattern)
    ███████████████████████████████████████████████████████████  386.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  361.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  370.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  636.45
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  16.64
    ▓▓▓  16.09
    ▒▒▒  16.13
    ░░░░░░  35.61

 2. mapl (tree)
    ██████  32.63
    ▓▓▓▓▓  31.35
    ▒▒▒▒▒▒  34.43
    ░░░░░░░░  47.61

 3. rou3 (jit)
    ██████  35.1
    ▓▓▓▓▓  29.65
    ▒▒▒▒▒▒  33.92
    ░░░░░░░░░░  58.14

 4. mapl (regexp)
    ██████  38.18
    ▓▓▓▓▓▓  36.48
    ▒▒▒▒▒▒▒  42.57
    ░░░░░░░░░░░  65.41

 5. hono (regexp)
    ████████  49.13
    ▓▓▓▓▓▓▓▓  46.48
    ▒▒▒▒▒▒▒▒▒  51.72
    ░░░░░░░░░░░  65.8

 6. rou3 (tree)
    ████████  51.06
    ▓▓▓▓▓▓▓▓  49.74
    ▒▒▒▒▒▒▒▒▒  51.28
    ░░░░░░░░░░░░  71.58

 7. find-my-way
    ██████████████████████████████████  217.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  203.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  219
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  374.94

 8. hono (trie)
    ██████████████████████████████████████████████  290.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  274.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  303.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  504.43

 9. hono (pattern)
    ████████████████████████████████████████████████████████  355.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  345.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  359.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  614.61
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  20.38
    ▓▓▓  18.56
    ▒▒▒  18.72
    ░░░░░░░  42.46

 2. mapl (tree)
    █████  31.67
    ▓▓▓▓▓  32.21
    ▒▒▒▒▒  32.63
    ░░░░░░░░░  54.25

 3. rou3 (jit)
    █████  32.1
    ▓▓▓▓▓  30.45
    ▒▒▒▒▒  31.63
    ░░░░░░░░░  58.85

 4. mapl (regexp)
    █████  32.52
    ▓▓▓▓▓  32.37
    ▒▒▒▒▒▒  32.76
    ░░░░░░░░░  54.79

 5. rou3 (tree)
    ████████  49.38
    ▓▓▓▓▓▓▓▓  46.69
    ▒▒▒▒▒▒▒▒  50.72
    ░░░░░░░░░░░  71.02

 6. hono (regexp)
    █████████  52.7
    ▓▓▓▓▓▓▓▓  51.54
    ▒▒▒▒▒▒▒▒▒  56.05
    ░░░░░░░░░░░░  74.03

 7. find-my-way
    ████████████████████████████  180.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  172.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  181.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  306.19

 8. hono (trie)
    ██████████████████████████████████████████████████  326.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  307.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  313.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  506.49

 9. hono (pattern)
    ███████████████████████████████████████████████████████████  382.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  344.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  356.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  628.22
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████████  0.21
    ▓▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░  0.25

 2. mapl (regexp)
    ███████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░  0.38

 3. mapl (tree)
    ██████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 4. hono (regexp)
    ████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.74

 5. find-my-way
    ████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 6. hono (pattern)
    ██████████████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.77

 7. rou3 (jit)
    ██████████████████████████████████████  0.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.67

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████████████  1.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.79
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.18
    ▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░░░  0.24

 2. mapl (regexp)
    ███████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░  0.4

 3. mapl (tree)
    ████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 4. hono (regexp)
    ████████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 5. find-my-way
    ████████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 6. hono (pattern)
    ██████████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 7. rou3 (jit)
    ██████████████████████████████████████████  0.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.88

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████  1.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.65

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████  1.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.73
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.13
    ▓▓▓▓▓▓▓▓▓  0.13
    ▒▒▒▒▒▒▒▒▒  0.13
    ░░░░░░░░░░░░  0.19

 2. rou3 (jit)
    █████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 3. mapl (tree)
    ███████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 4. mapl (regexp)
    ████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 5. find-my-way
    ████████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 6. hono (regexp)
    ██████████████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 7. hono (pattern)
    ████████████████████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.74

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████  1.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.39

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████████  1.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.56
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.17
    ▓▓▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░░░░░░░░  0.27

 2. mapl (regexp)
    ███████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░  0.37

 3. rou3 (jit)
    ███████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.54

 4. mapl (tree)
    ███████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 5. find-my-way
    ████████████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 6. hono (regexp)
    █████████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 7. hono (pattern)
    ███████████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.84

 8. hono (trie)
    ████████████████████████████████████████████████████████████████████████████  1.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.52

 9. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████████  1.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.67
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.17
    ▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░░░░░░  0.25

 2. mapl (regexp)
    ████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.25
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.41

 3. mapl (tree)
    ████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 4. hono (pattern)
    ██████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 5. rou3 (jit)
    ███████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 6. find-my-way
    █████████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.86

 7. hono (regexp)
    ██████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 8. hono (trie)
    ████████████████████████████████████████████████████████████████████████████  1.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.5

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████  1.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.67
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ██████████  0.16
    ▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░░░░░░░  0.25

 2. mapl (tree)
    ████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░  0.35

 3. mapl (regexp)
    ████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.54

 4. rou3 (jit)
    ██████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 5. find-my-way
    ███████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.75

 6. hono (regexp)
    █████████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 7. hono (pattern)
    ███████████████████████████████████  0.6
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████  1.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.52

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████████  1.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.65
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  20.41
    ▓▓▓  18.79
    ▒▒▒  18.85
    ░░░░░░░  42.71

 2. mapl (regexp)
    █████  31.65
    ▓▓▓▓▓  32.01
    ▒▒▒▒▒▒  32.61
    ░░░░░░░░░  55.19

 3. rou3 (jit)
    ██████  34.84
    ▓▓▓▓▓▓  33.03
    ▒▒▒▒▒▒  34.38
    ░░░░░░░░░░░  65.8

 4. mapl (tree)
    ██████  36.16
    ▓▓▓▓▓▓  35.06
    ▒▒▒▒▒▒  35.37
    ░░░░░░░░░  55.76

 5. rou3 (tree)
    ████████  48.3
    ▓▓▓▓▓▓▓▓  46.94
    ▒▒▒▒▒▒▒▒  48.93
    ░░░░░░░░░░░  69.43

 6. hono (regexp)
    ████████  48.85
    ▓▓▓▓▓▓▓▓  46.09
    ▒▒▒▒▒▒▒▒▒  51.85
    ░░░░░░░░░░░  69.46

 7. find-my-way
    ███████████████████████  144.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  147.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  215.53

 8. hono (trie)
    ████████████████████████████████████████  253.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  242.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  258
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  422.55

 9. hono (pattern)
    ████████████████████████████████████████████████████████  354.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  347.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  350.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  614.71
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ███  19.76
    ▓▓▓  19.39
    ▒▒▒  19.49
    ░░░░░  31.93

 2. mapl (tree)
    ████  31.01
    ▓▓▓▓  29.65
    ▒▒▒▒▒  32.7
    ░░░░░░░  54.17

 3. mapl (regexp)
    █████  33
    ▓▓▓▓▓  32.35
    ▒▒▒▒▒  32.61
    ░░░░░░░  52.84

 4. rou3 (jit)
    ██████  40.87
    ▓▓▓▓▓  36.88
    ▒▒▒▒▒▒  40
    ░░░░░░░░░  67.48

 5. rou3 (tree)
    ███████  50.53
    ▓▓▓▓▓▓▓  49.57
    ▒▒▒▒▒▒▒  50.79
    ░░░░░░░░░  70.03

 6. hono (regexp)
    ███████  51.17
    ▓▓▓▓▓▓  47.11
    ▒▒▒▒▒▒▒  52.38
    ░░░░░░░░░░  72.7

 7. find-my-way
    ████████████████████████████████████████████  347.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  317.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  333.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  471.31

 8. hono (pattern)
    ██████████████████████████████████████████████  361.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  351.99
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  357.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  639.42

 9. hono (trie)
    █████████████████████████████████████████████████████████████  480.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  444.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  457.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  761.9
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
    ░░░░░░░░░░  0.18

 2. mapl (tree)
    ████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 3. mapl (regexp)
    █████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 4. find-my-way
    █████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░  0.45

 5. rou3 (jit)
    ███████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 6. hono (regexp)
    █████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 7. hono (pattern)
    ███████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.6
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████  1.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.63

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████  1.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.89
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
    ███  2.7
    ▓▓▓  2.59
    ▒▒▒  2.72
    ░░░░  3.67

 2. stnl (jit)
    ███  2.83
    ▓▓▓  2.79
    ▒▒▒  2.83
    ░░░░  3.41

 3. sury (jit)
    ████  3.75
    ▓▓▓▓  3.71
    ▒▒▒▒  3.86
    ░░░░░  4.25

 4. arktype (jit)
    █████  4.91
    ▓▓▓▓▓  4.82
    ▒▒▒▒▒  4.97
    ░░░░░░  5.39

 5. typebox (jit)
    ██████  5.61
    ▓▓▓▓▓▓  5.53
    ▒▒▒▒▒▒  5.63
    ░░░░░░░  6.9

 6. typebox (aot)
    ██████  5.85
    ▓▓▓▓▓▓  5.76
    ▒▒▒▒▒▒  5.78
    ░░░░░░░░  8.28

 7. typia (aot)
    █████████  9.48
    ▓▓▓▓▓▓▓▓▓  9.36
    ▒▒▒▒▒▒▒▒▒▒  9.51
    ░░░░░░░░░░░  10.97

 8. zod
    ██████████████████████████████████  35.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  34.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  38.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  42.73

 9. valibot
    ████████████████████████████████████████  41.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  42.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  45.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  46.17

 10. effect-schema
    ███████████████████████████████████████████████████████████████████████████████████████████████  99.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  99.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  99.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  101.33
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
    ███████████  118.19
    ▓▓▓▓▓▓▓▓▓▓▓  113.87
    ▒▒▒▒▒▒▒▒▒▒▒▒  126.05
    ░░░░░░░░░░░░░  143.02

 2. manual
    ████████████  129.13
    ▓▓▓▓▓▓▓▓▓▓▓  123.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  136.94
    ░░░░░░░░░░░░░░  152.36

 3. ciorent (semaphore)
    █████████████  145.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  138.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  154.86
    ░░░░░░░░░░░░░░░░  178.25

 4. p-mutex
    ████████████████████████████████  355.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  355.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  375.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  417.76

 5. p-limit
    ██████████████████████████████████████████████  510.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  508.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  517.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  614.7

 6. async-mutex
    █████████████████████████████████████████████████████████████████████  768.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  734.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  825.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1081.63
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (ms)
 ▓  p50 (ms)
 ▒  p75 (ms)
 ░  p99 (ms)

 1. ciorent (semaphore)
    ████████  0.14
    ▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░░  0.16

 2. p-limit
    ████████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 3. async-mutex
    ████████████████████████████████████████  0.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.89

 4. manual
    ███████████████████████████████████████████████████████████████████████████████████████████████  1.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.81
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████  143.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  142.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  143.5
    ░░░░░░░░░░░░░░░  159.45

 2. p-limit
    ████████████████████████████████████████████████  504.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  504.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  512.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  571.81

 3. async-mutex
    █████████████████████████████████████████████████████████████████████  727.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  718.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  731.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  913.58

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████  992.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  992.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  996.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1027.05
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  141.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  139.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  140.32
    ░░░░░░░░░░░░░░░░░  156.32

 2. p-limit
    ██████████████████████████████████████████████████████  510.93
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  505.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  522.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  611.18

 3. manual
    ███████████████████████████████████████████████████████████████  600.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  600.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  605.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  680.65

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████████  764.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  785.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  796.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  921.33
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  140.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  138.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  139.34
    ░░░░░░░░░░░░░░░░  155.1

 2. manual
    █████████████████████████████████████████  394.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  389.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  403.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  408.98

 3. p-limit
    ████████████████████████████████████████████████████  506.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  506.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  516.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  574.45

 4. async-mutex
    ██████████████████████████████████████████████████████████████████████████████████  799.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  793
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  815.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  941.98
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ███████████████  139
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  137.12
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  137.79
    ░░░░░░░░░░░░░░░░  154.66

 2. manual
    █████████████████████████  234.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  230.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  233.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  247.79

 3. p-limit
    █████████████████████████████████████████████████████  509.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  508.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  520.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  589.29

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████  818.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  798.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  887.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  928.51
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. ciorent (semaphore)
    ██████████████  134.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  132.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  133.27
    ░░░░░░░░░░░░░░░░  149.71

 2. manual
    ████████████████  154.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  151.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  152.26
    ░░░░░░░░░░░░░░░░░░  168.21

 3. p-limit
    ████████████████████████████████████████████████████  507.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  506.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  512.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  629.24

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████  745.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  732.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  786.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  949.43
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
    █████████████████████████████████████████████████  217.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  212.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  216.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  263.36

 2. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████  327.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  320.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  335.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  376.59

 3. native
    ██████████████████████████████████████████████████████████████████████████████████████████  405.98
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  401.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  413.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  433.79
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. deuri
    █  1.14
    ▓  1.13
    ▒  1.17
    ░  1.18

 2. fast-decode-uri-component
    █  2.33
    ▓  2.33
    ▒  2.35
    ░  2.39

 3. native
    ███████████████████████████████████████████████████████████████████████████████████████████  401.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  396.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  411.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  423.99
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
    ███  14.43
    ▓▓  10.5
    ▒▒  11.29
    ░░░░░░░  37.64

 2. rou3 (jit)
    █████  28.8
    ▓▓▓▓▓  26.69
    ▒▒▒▒▒  30.04
    ░░░░░░░░░░  56.13

 3. mapl (tree)
    █████  29.3
    ▓▓▓▓▓  27.29
    ▒▒▒▒▒▒  30.46
    ░░░░░░░░░░░  64.67

 4. mapl (regexp)
    █████  29.94
    ▓▓▓▓▓  27.3
    ▒▒▒▒▒▒  30.85
    ░░░░░░░░░░░░  69.16

 5. hono (regexp)
    █████████  52.09
    ▓▓▓▓▓▓▓▓  48.45
    ▒▒▒▒▒▒▒▒▒  51.69
    ░░░░░░░░░░░░░░  81.58

 6. rou3 (tree)
    ██████████  55.14
    ▓▓▓▓▓▓▓▓▓  50.74
    ▒▒▒▒▒▒▒▒▒  53.74
    ░░░░░░░░░░░░░░  81.77

 7. find-my-way
    █████████████████████████  150.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  140.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  161.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  193.4

 8. hono (trie)
    ███████████████████████████████████████████████████████  328.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  334.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  336.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  545.71

 9. hono (pattern)
    ███████████████████████████████████████████████████████████████████████  428.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  407.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  454.97
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  583.24
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  17.08
    ▓▓▓▓  15.93
    ▒▒▒▒  16.36
    ░░░░░░░░  39.48

 2. rou3 (jit)
    ██████  29.67
    ▓▓▓▓▓▓  28
    ▒▒▒▒▒▒▒  29.7
    ░░░░░░░░░░░░  58.34

 3. mapl (tree)
    ███████  30.03
    ▓▓▓▓▓▓  28.56
    ▒▒▒▒▒▒▒  31.73
    ░░░░░░░░░░░  53.33

 4. mapl (regexp)
    ███████  31.8
    ▓▓▓▓▓▓  28.99
    ▒▒▒▒▒▒▒  32.83
    ░░░░░░░░░░░░  57.47

 5. rou3 (tree)
    ███████████  50.83
    ▓▓▓▓▓▓▓▓▓▓▓  50.04
    ▒▒▒▒▒▒▒▒▒▒▒  50.59
    ░░░░░░░░░░░░░░░  73.68

 6. hono (regexp)
    ███████████  54.2
    ▓▓▓▓▓▓▓▓▓▓▓  50.57
    ▒▒▒▒▒▒▒▒▒▒▒▒  54.46
    ░░░░░░░░░░░░░░░░  76.42

 7. find-my-way
    ██████████████████████████████████████████████████  243.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  236.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  237.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  338.86

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████  362.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  373.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  376.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  386.75

 9. hono (pattern)
    ███████████████████████████████████████████████████████████████████████████████████████  427.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  411.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  460.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  475.2
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    █████  20.04
    ▓▓▓▓  15.98
    ▒▒▒▒  16.73
    ░░░░░░░░░  40.33

 2. mapl (regexp)
    ██████  28.76
    ▓▓▓▓▓▓  27.16
    ▒▒▒▒▒▒▒  30.54
    ░░░░░░░░░░░  52.9

 3. rou3 (jit)
    ███████  31.59
    ▓▓▓▓▓▓▓  29.8
    ▒▒▒▒▒▒▒  32.26
    ░░░░░░░░░░░░░  59.48

 4. mapl (tree)
    ███████  33.04
    ▓▓▓▓▓▓▓  31.04
    ▒▒▒▒▒▒▒  31.44
    ░░░░░░░░░░░░  55.71

 5. rou3 (tree)
    ███████████  49.67
    ▓▓▓▓▓▓▓▓▓▓  47.61
    ▒▒▒▒▒▒▒▒▒▒▒  49.84
    ░░░░░░░░░░░░░░░░  77.44

 6. hono (regexp)
    ███████████  50.69
    ▓▓▓▓▓▓▓▓▓▓  48.15
    ▒▒▒▒▒▒▒▒▒▒▒  51.24
    ░░░░░░░░░░░░░░░░  77.15

 7. find-my-way
    █████████████████████████████████████████████  216.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  191.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  220.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  325.1

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████  357.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  377.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  381.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  392.77

 9. hono (pattern)
    ███████████████████████████████████████████████████████████████████████████████████████  423.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  400.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  455.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  468.54
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████████  0.2
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░  0.23

 2. mapl (regexp)
    █████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 3. mapl (tree)
    █████████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 4. hono (pattern)
    ██████████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 5. hono (regexp)
    ███████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 6. find-my-way
    ███████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 7. rou3 (jit)
    ██████████████████████████████████████████████  0.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.91

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████  1.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.41

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████████████  1.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.61
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░░░░  0.29

 2. mapl (regexp)
    █████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 3. mapl (tree)
    ███████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 4. find-my-way
    █████████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 5. hono (pattern)
    █████████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.94

 6. hono (regexp)
    ██████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 7. rou3 (jit)
    █████████████████████████████████████████████  0.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████  1.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.41

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████████  1.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.68
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████████  0.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░░░  0.19

 2. find-my-way
    ██████████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.41

 3. rou3 (jit)
    ████████████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 4. mapl (tree)
    █████████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 5. mapl (regexp)
    █████████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 6. hono (regexp)
    ████████████████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 7. hono (pattern)
    █████████████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████  1.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.18

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████████████  1.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.37
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ███████████████  0.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░░░░░  0.23

 2. rou3 (jit)
    ████████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 3. mapl (regexp)
    █████████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 4. mapl (tree)
    ██████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 5. find-my-way
    ██████████████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 6. hono (pattern)
    ████████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.73

 7. hono (regexp)
    ████████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 8. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████  1.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.28

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████████████████████  1.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.45
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████████  0.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░░░░  0.22

 2. hono (pattern)
    ███████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░░░  0.33

 3. mapl (regexp)
    ███████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.37

 4. rou3 (jit)
    ████████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.53

 5. mapl (tree)
    █████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 6. find-my-way
    ████████████████████████████████  0.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 7. hono (regexp)
    ██████████████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.54

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████  1.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.32

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████████████  1.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.49
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    ████████████  0.17
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░░░░░░░  0.25

 2. rou3 (jit)
    ███████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.52

 3. mapl (regexp)
    ████████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 4. mapl (tree)
    █████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 5. find-my-way
    ███████████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 6. hono (pattern)
    ██████████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.6

 7. hono (regexp)
    ███████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.6
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████  1.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.32

 9. rou3 (tree)
    ███████████████████████████████████████████████████████████████████████████████████████████  1.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.47
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    ████  18.76
    ▓▓▓▓  18.08
    ▒▒▒▒  18.66
    ░░░░░  23.11

 2. mapl (tree)
    ███████  33.15
    ▓▓▓▓▓▓  27.39
    ▒▒▒▒▒▒▒  31.06
    ░░░░░░░░░░░░  56.35

 3. rou3 (jit)
    ████████  34.66
    ▓▓▓▓▓▓▓  32.96
    ▒▒▒▒▒▒▒▒  34.69
    ░░░░░░░░░░░░░  59.06

 4. rou3 (tree)
    ███████████  49.18
    ▓▓▓▓▓▓▓▓▓▓  46.96
    ▒▒▒▒▒▒▒▒▒▒  48.99
    ░░░░░░░░░░░░░░░░  74.21

 5. hono (regexp)
    ███████████  50.76
    ▓▓▓▓▓▓▓▓▓▓  48.01
    ▒▒▒▒▒▒▒▒▒▒▒  51.34
    ░░░░░░░░░░░░░░░░  75.36

 6. mapl (regexp)
    ███████████  53.8
    ▓▓▓▓▓▓▓▓▓▓▓  52.44
    ▒▒▒▒▒▒▒▒▒▒▒▒  55.67
    ░░░░░░░░░░░░░  60.11

 7. find-my-way
    █████████████████████████████████  160.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  153.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  157.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  225.38

 8. hono (trie)
    ████████████████████████████████████████████████████████████████████  333.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  342.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  347.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  356.79

 9. hono (pattern)
    ██████████████████████████████████████████████████████████████████████████████████████  417.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  408.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  412.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  471.18
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (ns)
 ▓  p50 (ns)
 ▒  p75 (ns)
 ░  p99 (ns)

 1. mapl (jit)
    █████  26.48
    ▓▓▓▓  20.02
    ▒▒▒▒▒▒▒  39.4
    ░░░░░░░░  43.85

 2. mapl (tree)
    ██████  31.97
    ▓▓▓▓▓  27.36
    ▒▒▒▒▒▒  30.82
    ░░░░░░░░░░  56.55

 3. rou3 (jit)
    ███████  37.92
    ▓▓▓▓▓▓▓  34.85
    ▒▒▒▒▒▒▒  37.92
    ░░░░░░░░░░░░  64.27

 4. rou3 (tree)
    ██████████  52.15
    ▓▓▓▓▓▓▓▓▓  49.36
    ▒▒▒▒▒▒▒▒▒▒  52.7
    ░░░░░░░░░░░░░░  75.91

 5. mapl (regexp)
    ██████████  53.73
    ▓▓▓▓▓▓▓▓▓▓  52.36
    ▒▒▒▒▒▒▒▒▒▒  55.79
    ░░░░░░░░░░░  60.38

 6. hono (regexp)
    ██████████  53.97
    ▓▓▓▓▓▓▓▓▓▓  51.73
    ▒▒▒▒▒▒▒▒▒▒  55.17
    ░░░░░░░░░░░░░░  77.88

 7. find-my-way
    ███████████████████████████████████████████████████████████████████  377.98
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  402.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  414.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  430.31

 8. hono (pattern)
    █████████████████████████████████████████████████████████████████████████████  436.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  429.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  432.03
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  491.19

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████  521.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  530.99
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  537.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  546.83
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (µs)
 ▓  p50 (µs)
 ▒  p75 (µs)
 ░  p99 (µs)

 1. mapl (jit)
    █████████  0.16
    ▓▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░░░░  0.2

 2. mapl (tree)
    █████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 3. mapl (regexp)
    ███████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 4. find-my-way
    ███████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 5. rou3 (jit)
    ██████████████████████████████  0.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 6. hono (pattern)
    ███████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 7. hono (regexp)
    ████████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.76

 8. hono (trie)
    ████████████████████████████████████████████████████████████████████████  1.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.51

 9. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████████████  1.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.72
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
    ███  2.61
    ▓▓▓  2.6
    ▒▒▒  2.62
    ░░░  2.69

 2. stnl (aot)
    ███  2.96
    ▓▓▓  2.76
    ▒▒▒  3.11
    ░░░░  3.88

 3. sury (jit)
    ████  3.53
    ▓▓▓▓  3.49
    ▒▒▒▒  3.63
    ░░░░  3.89

 4. arktype (jit)
    █████  4.92
    ▓▓▓▓▓  4.88
    ▒▒▒▒▒  4.98
    ░░░░░  5.29

 5. typebox (aot)
    ██████  5.61
    ▓▓▓▓▓▓  5.57
    ▒▒▒▒▒▒  5.6
    ░░░░░░░  6.85

 6. typebox (jit)
    ██████  5.68
    ▓▓▓▓▓▓  5.62
    ▒▒▒▒▒▒  5.75
    ░░░░░░  6.11

 7. typia (aot)
    ██████████  10.31
    ▓▓▓▓▓▓▓▓▓▓  10.18
    ▒▒▒▒▒▒▒▒▒▒  10.59
    ░░░░░░░░░░░  11.13

 8. zod
    ███████████████████████████████████████  40.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  39.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  42.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  44.9

 9. valibot
    ███████████████████████████████████████████████  49.02
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  49.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  50.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  51.45

 10. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████  98.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  98.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  99.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  102
```
<a name="2_aGVhcCB1c2FnZQ==">

## heap usage
<a name="3_bm9kZS0yMi4yMi4w">

### node-22.22.0
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. manual
    █████████████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.34

 2. ciorent (mutex)
    ██████████████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.35

 3. ciorent (semaphore)
    ██████████████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 4. p-mutex
    █████████████████████████████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 5. p-limit
    ████████████████████████████████████████████████████████████████████████████████  0.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.94
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.94

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.14
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.14
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████  0.44
    ▓▓▓▓▓  0.44
    ▒▒▒▒▒  0.44
    ░░░░░  0.44

 2. p-limit
    ██████████  0.95
    ▓▓▓▓▓▓▓▓▓▓  0.95
    ▒▒▒▒▒▒▒▒▒▒  0.95
    ░░░░░░░░░░  0.95

 3. async-mutex
    ████████████  1.09
    ▓▓▓▓▓▓▓▓▓▓▓▓  1.09
    ▒▒▒▒▒▒▒▒▒▒▒▒  1.09
    ░░░░░░░░░░░░  1.09

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  9.23
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████████  0.44
    ▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░  0.44

 2. p-limit
    ████████████████████  0.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.97
    ░░░░░░░░░░░░░░░░░░░░  0.97

 3. async-mutex
    ███████████████████████  1.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.11
    ░░░░░░░░░░░░░░░░░░░░░░░  1.11

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.73
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ██████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░  0.44

 2. p-limit
    █████████████████████████████████████  0.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.95

 3. async-mutex
    ███████████████████████████████████████████  1.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.48
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ████████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 2. p-limit
    ████████████████████████████████████████████████████████████████████  0.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.96

 3. async-mutex
    █████████████████████████████████████████████████████████████████████████████  1.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.09

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.36
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ██████████████████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 2. manual
    ██████████████████████████████████████████████████████████████████████  0.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 3. p-limit
    ████████████████████████████████████████████████████████████████████████████████████  0.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.95

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.09
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████████████████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 2. manual
    █████████████████████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████████████  0.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.96

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.09
```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. native
    ███████████████████████████  58.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  58.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  58.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  58.07

 2. fast-decode-uri-component
    ███████████████████████████████████████████████████████████████████████████████████████████████  204.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  204.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  204.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  204.85

 3. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  207.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  207.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  207.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  207.27
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. fast-decode-uri-component
    █  0
    ▓  0
    ▒  0
    ░  0

 2. deuri
    █  0.08
    ▓  0.08
    ▒  0.08
    ░  0.08

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  36.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  36.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  36.78
```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (tree)
    █  0.5
    ▓  0.5
    ▒  0.5
    ░  0.5

 2. mapl (regexp)
    █  0.91
    ▓  0.91
    ▒  0.91
    ░  0.91

 3. rou3 (tree)
    █  1.3
    ▓  1.3
    ▒  1.3
    ░  1.3

 4. mapl (jit)
    █  1.46
    ▓  1.46
    ▒  1.46
    ░  1.46

 5. hono (regexp)
    █  1.49
    ▓  1.49
    ▒  1.49
    ░  1.49

 6. rou3 (jit)
    ████  33.65
    ▓▓▓▓  33.65
    ▒▒▒▒  33.65
    ░░░░  33.65

 7. find-my-way
    █████████████████████████  225.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  225.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  225.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░  225.79

 8. hono (pattern)
    ███████████████████████████████████████████  387.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  387.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  387.27
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  387.27

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  880.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  880.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  880.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  880.7
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 6. rou3 (jit)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░  0.03

 7. find-my-way
    ██████████████████████  0.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.24
    ░░░░░░░░░░░░░░░░░░░░░░  0.24

 8. hono (pattern)
    ███████████████████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.39

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.07
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 6. rou3 (jit)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░  0.03

 7. find-my-way
    █████████████████████  0.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░░░░░░░░░░░░░░  0.23

 8. hono (pattern)
    ███████████████████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.39

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.08
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.08
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ████████  0.14
    ▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░  0.14

 2. mapl (tree)
    ███████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░  0.28

 3. mapl (regexp)
    █████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░  0.32

 4. rou3 (jit)
    ████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░  0.39

 5. hono (regexp)
    ██████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░  0.42

 6. find-my-way
    █████████████████████████  0.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.48

 7. hono (pattern)
    ███████████████████████████████████  0.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.68

 8. rou3 (tree)
    ██████████████████████████████████████████████████████  1.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.05

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.89
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.89
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.14
    ▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒  0.14
    ░░░░░░░  0.14

 2. mapl (tree)
    ██████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░  0.28

 3. mapl (regexp)
    ██████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░  0.36

 4. rou3 (jit)
    ████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░  0.4

 5. hono (regexp)
    ██████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░  0.44

 6. find-my-way
    ████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 7. hono (pattern)
    █████████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 8. rou3 (tree)
    ██████████████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.95
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    █████████  0.12
    ▓▓▓▓▓▓▓▓▓  0.12
    ▒▒▒▒▒▒▒▒▒  0.12
    ░░░░░░░░░  0.12

 2. mapl (tree)
    █████████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░  0.3

 3. rou3 (jit)
    █████████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░░░  0.3

 4. mapl (regexp)
    █████████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.36

 5. hono (regexp)
    ███████████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.39

 6. find-my-way
    ████████████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 7. hono (pattern)
    ██████████████████████████████████████████████████  0.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 8. rou3 (tree)
    █████████████████████████████████████████████████████████  0.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.83

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.41
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    █████████  0.15
    ▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░  0.15

 2. mapl (tree)
    ████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░  0.27

 3. rou3 (jit)
    ████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░  0.34

 4. mapl (regexp)
    ████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░  0.35

 5. hono (regexp)
    █████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 6. find-my-way
    ███████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 7. hono (pattern)
    ███████████████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 8. rou3 (tree)
    ██████████████████████████████████████████████████████  0.93
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.93
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.93
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.93

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.68
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.68
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.68
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.68
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ████████  0.14
    ▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░  0.14

 2. mapl (tree)
    ████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░  0.28

 3. mapl (regexp)
    █████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░  0.29

 4. hono (regexp)
    ███████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░  0.33

 5. rou3 (jit)
    ████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░  0.34

 6. find-my-way
    █████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 7. hono (pattern)
    ███████████████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 8. rou3 (tree)
    ███████████████████████████████████████████████████████  0.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.96

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.69
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ████████  0.13
    ▓▓▓▓▓▓▓▓  0.13
    ▒▒▒▒▒▒▒▒  0.13
    ░░░░░░░░  0.13

 2. mapl (tree)
    ████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░  0.28

 3. rou3 (jit)
    ████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░  0.34

 4. mapl (regexp)
    █████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░  0.36

 5. hono (regexp)
    ███████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░  0.4

 6. find-my-way
    █████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 7. hono (pattern)
    ██████████████████████████████████████  0.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.67

 8. rou3 (tree)
    ██████████████████████████████████████████████████████  0.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.96
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.96

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.71
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.71
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0.12
    ▓  0.12
    ▒  0.12
    ░  0.12

 2. mapl (regexp)
    █  0.22
    ▓  0.22
    ▒  0.22
    ░  0.22

 3. mapl (tree)
    █  0.33
    ▓  0.33
    ▒  0.33
    ░  0.33

 4. rou3 (tree)
    █  0.82
    ▓  0.82
    ▒  0.82
    ░  0.82

 5. hono (regexp)
    █  0.92
    ▓  0.92
    ▒  0.92
    ░  0.92

 6. rou3 (jit)
    ████  33.18
    ▓▓▓▓  33.18
    ▒▒▒▒  33.18
    ░░░░  33.18

 7. find-my-way
    █████████████████████████  227.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  227.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  227.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░  227.33

 8. hono (pattern)
    ██████████████████████████████████████████  378.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  378.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  378.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  378.4

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  875.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  875.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  875.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  875.79
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 6. rou3 (jit)
    ██  0.03
    ▓▓  0.03
    ▒▒  0.03
    ░░  0.03

 7. find-my-way
    ██████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.25
    ░░░░░░░░░░░░░░  0.25

 8. hono (pattern)
    █████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░  0.39

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.84
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ████████  0.13
    ▓▓▓▓▓▓▓▓  0.13
    ▒▒▒▒▒▒▒▒  0.13
    ░░░░░░░░  0.13

 2. mapl (tree)
    ███████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░  0.27

 3. mapl (regexp)
    ██████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░  0.33

 4. rou3 (jit)
    ███████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░  0.41

 5. hono (regexp)
    █████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 6. find-my-way
    ██████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 7. hono (pattern)
    ███████████████████████████████████  0.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.64

 8. rou3 (tree)
    ████████████████████████████████████████████████████  0.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.95

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.78
```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. stnl (aot)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. arktype (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. stnl (jit)
    ██  0.22
    ▓▓  0.22
    ▒▒  0.22
    ░░  0.22

 4. typebox (aot)
    ███  0.28
    ▓▓▓  0.28
    ▒▒▒  0.28
    ░░░  0.28

 5. typia (aot)
    ███  0.28
    ▓▓▓  0.28
    ▒▒▒  0.28
    ░░░  0.28

 6. typebox (jit)
    ███  0.31
    ▓▓▓  0.31
    ▒▒▒  0.31
    ░░░  0.31

 7. effect-schema
    █████████████████████████  3.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░  3.2

 8. zod
    █████████████████████████████  3.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.65

 9. sury (jit)
    ███████████████████████████████████  4.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.48

 10. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  12.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  12.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  12.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  12.37
```
<a name="3_bm9kZS0yNC4xMy4w">

### node-24.13.0
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. manual
    ███████████████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.33

 2. ciorent (mutex)
    ████████████████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.35

 3. ciorent (semaphore)
    ██████████████████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 4. p-mutex
    █████████████████████████████████████████████████████  0.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.57

 5. p-limit
    ████████████████████████████████████████████████████████████████████████████████  0.87
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.87
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.87

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.05
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████  0.44
    ▓▓▓▓▓  0.44
    ▒▒▒▒▒  0.44
    ░░░░░  0.44

 2. p-limit
    ██████████  0.89
    ▓▓▓▓▓▓▓▓▓▓  0.89
    ▒▒▒▒▒▒▒▒▒▒  0.89
    ░░░░░░░░░░  0.89

 3. async-mutex
    ███████████  1
    ▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  9.23
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████████  0.44
    ▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░  0.44

 2. p-limit
    ██████████████████  0.87
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.87
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.87
    ░░░░░░░░░░░░░░░░░░  0.87

 3. async-mutex
    █████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.73
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ██████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░  0.44

 2. p-limit
    ███████████████████████████████████  0.9
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.9
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.9

 3. async-mutex
    ███████████████████████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.48
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ████████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 2. p-limit
    █████████████████████████████████████████████████████████████  0.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.86

 3. async-mutex
    ███████████████████████████████████████████████████████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.36
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. ciorent (semaphore)
    ██████████████████████████████████████████  431.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  431.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  431.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  431.78

 2. manual
    █████████████████████████████████████████████████████████████████████████████  793.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  793.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  793.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  793.41

 3. p-limit
    ██████████████████████████████████████████████████████████████████████████████████████  889.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  889.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  889.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  889.17

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  998.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  998.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  998.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  998.1
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. ciorent (semaphore)
    █████████████████████████████████████████  418.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  418.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  418.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  418.57

 2. manual
    ██████████████████████████████████████████████████  513.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  513.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  513.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  513.22

 3. p-limit
    ██████████████████████████████████████████████████████████████████████████████  810.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  810.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  810.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  810.3

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  997.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  997.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  997.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  997.35
```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. native
    ███████████████████████████  58.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  58.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  58.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  58.52

 2. fast-decode-uri-component
    ██████████████████████████████████████████████████████████████████████████████████████████████  205.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  205.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  205.53
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  205.53

 3. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  210.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  210.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  210.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  210.09
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. deuri
    █  0
    ▓  0
    ▒  0
    ░  0

 2. fast-decode-uri-component
    █  0
    ▓  0
    ▒  0
    ░  0

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  37.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  37.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  37.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  37.45
```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (regexp)
    █  0.99
    ▓  0.99
    ▒  0.99
    ░  0.99

 2. mapl (tree)
    █  1.11
    ▓  1.11
    ▒  1.11
    ░  1.11

 3. rou3 (tree)
    █  1.2
    ▓  1.2
    ▒  1.2
    ░  1.2

 4. mapl (jit)
    █  1.53
    ▓  1.53
    ▒  1.53
    ░  1.53

 5. hono (regexp)
    █  2.64
    ▓  2.64
    ▒  2.64
    ░  2.64

 6. rou3 (jit)
    ████  32.91
    ▓▓▓▓  32.91
    ▒▒▒▒  32.91
    ░░░░  32.91

 7. find-my-way
    ████████████████████████  204.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  204.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  204.42
    ░░░░░░░░░░░░░░░░░░░░░░░░  204.42

 8. hono (pattern)
    ███████████████████████████████████████████  368.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  368.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  368.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  368.45

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  838.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  838.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  838.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  838.22
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 6. rou3 (jit)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░  0.03

 7. find-my-way
    ███████████████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░░░░░░  0.19

 8. hono (pattern)
    ██████████████████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.35

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 6. rou3 (jit)
    ███  0.03
    ▓▓▓  0.03
    ▒▒▒  0.03
    ░░░  0.03

 7. find-my-way
    ███████████████████████  0.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.24
    ░░░░░░░░░░░░░░░░░░░░░░░  0.24

 8. hono (pattern)
    ██████████████████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.36

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.04
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.04
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.04
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.04
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 2. rou3 (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 3. hono (regexp)
    ██████████  0.17
    ▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░  0.17

 4. mapl (tree)
    █████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░  0.29

 5. mapl (regexp)
    █████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░  0.29

 6. find-my-way
    ███████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 7. hono (pattern)
    ███████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 8. rou3 (tree)
    ████████████████████████████████████████  0.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.67
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 2. mapl (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 3. hono (regexp)
    █████████  0.15
    ▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░  0.15

 4. mapl (tree)
    █████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░  0.29

 5. mapl (regexp)
    ███████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░  0.32

 6. find-my-way
    ███████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 7. hono (pattern)
    ███████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 8. rou3 (tree)
    █████████████████████████████████████████  0.71
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.71
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.71
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.71

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.69
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ████████  0.09
    ▓▓▓▓▓▓▓▓  0.09
    ▒▒▒▒▒▒▒▒  0.09
    ░░░░░░░░  0.09

 2. hono (regexp)
    ████████████  0.15
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░░  0.15

 3. rou3 (jit)
    ███████████████████  0.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.24
    ░░░░░░░░░░░░░░░░░░░  0.24

 4. mapl (tree)
    ██████████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░░░░░░  0.27

 5. mapl (regexp)
    █████████████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.31

 6. hono (pattern)
    ███████████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 7. find-my-way
    ████████████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 8. rou3 (tree)
    ████████████████████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.22
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    ████  0.06
    ▓▓▓▓  0.06
    ▒▒▒▒  0.06
    ░░░░  0.06

 2. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. hono (regexp)
    ██████████  0.15
    ▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░  0.15

 4. mapl (tree)
    ███████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░  0.28

 5. mapl (regexp)
    █████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░  0.32

 6. find-my-way
    █████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 7. hono (pattern)
    ███████████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 8. rou3 (tree)
    ███████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.47
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    ████  0.06
    ▓▓▓▓  0.06
    ▒▒▒▒  0.06
    ░░░░  0.06

 2. hono (regexp)
    █████  0.07
    ▓▓▓▓▓  0.07
    ▒▒▒▒▒  0.07
    ░░░░░  0.07

 3. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 4. mapl (regexp)
    ███████████████  0.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░░░░  0.22

 5. mapl (tree)
    ███████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░  0.28

 6. find-my-way
    █████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 7. rou3 (tree)
    ███████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 8. hono (pattern)
    ██████████████████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.49
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.49
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.49
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.49
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    ██████  0.09
    ▓▓▓▓▓▓  0.09
    ▒▒▒▒▒▒  0.09
    ░░░░░░  0.09

 2. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. hono (regexp)
    ██████████  0.15
    ▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░  0.15

 4. mapl (tree)
    ██████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░░  0.27

 5. mapl (regexp)
    █████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░  0.32

 6. hono (pattern)
    ████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 7. find-my-way
    █████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 8. rou3 (tree)
    █████████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.51
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (regexp)
    █  0.21
    ▓  0.21
    ▒  0.21
    ░  0.21

 2. mapl (tree)
    █  0.32
    ▓  0.32
    ▒  0.32
    ░  0.32

 3. mapl (jit)
    █  0.34
    ▓  0.34
    ▒  0.34
    ░  0.34

 4. rou3 (tree)
    █  2.71
    ▓  2.71
    ▒  2.71
    ░  2.71

 5. hono (regexp)
    █  3.15
    ▓  3.15
    ▒  3.15
    ░  3.15

 6. rou3 (jit)
    ████  32.64
    ▓▓▓▓  32.64
    ▒▒▒▒  32.64
    ░░░░  32.64

 7. find-my-way
    ████████████████████████  207.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  207.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  207.33
    ░░░░░░░░░░░░░░░░░░░░░░░░  207.33

 8. hono (pattern)
    ██████████████████████████████████████  332.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  332.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  332.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  332.48

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  847.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  847.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  847.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  847.84
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 6. rou3 (jit)
    ██  0.03
    ▓▓  0.03
    ▒▒  0.03
    ░░  0.03

 7. find-my-way
    ████████████  0.22
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.22
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░  0.22

 8. hono (pattern)
    ███████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░  0.36

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.84
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 2. rou3 (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 3. hono (regexp)
    █████████  0.13
    ▓▓▓▓▓▓▓▓▓  0.13
    ▒▒▒▒▒▒▒▒▒  0.13
    ░░░░░░░░░  0.13

 4. mapl (tree)
    ██████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░  0.28

 5. mapl (regexp)
    █████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░  0.32

 6. hono (pattern)
    ███████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.41

 7. find-my-way
    ██████████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 8. rou3 (tree)
    ███████████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.51
```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. stnl (aot)
    █  0.03
    ▓  0.03
    ▒  0.03
    ░  0.03

 2. arktype (jit)
    █  0.03
    ▓  0.03
    ▒  0.03
    ░  0.03

 3. stnl (jit)
    █  0.24
    ▓  0.24
    ▒  0.24
    ░  0.24

 4. typia (aot)
    █  0.29
    ▓  0.29
    ▒  0.29
    ░  0.29

 5. typebox (aot)
    █  0.37
    ▓  0.37
    ▒  0.37
    ░  0.37

 6. typebox (jit)
    █  0.4
    ▓  0.4
    ▒  0.4
    ░  0.4

 7. sury (jit)
    ██████████  4.32
    ▓▓▓▓▓▓▓▓▓▓  4.32
    ▒▒▒▒▒▒▒▒▒▒  4.32
    ░░░░░░░░░░  4.32

 8. zod
    ██████████████████████████████████████████  19.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  19.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  19.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  19.61

 9. effect-schema
    ███████████████████████████████████████████████████████████████  29.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  29.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  29.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  29.56

 10. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  45.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  45.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  45.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  45.43
```
<a name="3_bm9kZS0yNS42LjE=">

### node-25.6.1
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. manual
    ███████████████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.33

 2. ciorent (mutex)
    ████████████████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.35

 3. ciorent (semaphore)
    ██████████████████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 4. p-mutex
    ███████████████████████████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 5. p-limit
    █████████████████████████████████████████████████████████████████████████  0.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.05
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████  0.44
    ▓▓▓▓▓  0.44
    ▒▒▒▒▒  0.44
    ░░░░░  0.44

 2. p-limit
    █████████  0.79
    ▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░  0.79

 3. async-mutex
    ███████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░  1.01

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  9.23
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████████  0.44
    ▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░  0.44

 2. p-limit
    ████████████████  0.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.78
    ░░░░░░░░░░░░░░░░  0.78

 3. async-mutex
    █████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.73
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ██████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░  0.44

 2. p-limit
    ███████████████████████████████  0.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 3. async-mutex
    ███████████████████████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.48
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ████████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 2. p-limit
    ████████████████████████████████████████████████████████  0.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 3. async-mutex
    ███████████████████████████████████████████████████████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.36
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. ciorent (semaphore)
    ██████████████████████████████████████████  431.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  431.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  431.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  431.82

 2. p-limit
    ████████████████████████████████████████████████████████████████████████████  784.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  784.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  784.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  784.2

 3. manual
    █████████████████████████████████████████████████████████████████████████████  793.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  793.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  793.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  793.41

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  999.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  999.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  999.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  999.34
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. ciorent (semaphore)
    █████████████████████████████████████████  418.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  418.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  418.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  418.57

 2. manual
    ██████████████████████████████████████████████████  513.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  513.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  513.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  513.22

 3. p-limit
    ████████████████████████████████████████████████████████████████████████████  785
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  785
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  785
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  785

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  998.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  998.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  998.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  998.79
```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. native
    ███████████████████████████  58.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  58.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  58.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  58.16

 2. fast-decode-uri-component
    ███████████████████████████████████████████████████████████████████████████████████████████████  204.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  204.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  204.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  204.86

 3. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  207.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  207.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  207.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  207.5
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. deuri
    █  0
    ▓  0
    ▒  0
    ░  0

 2. fast-decode-uri-component
    █  0
    ▓  0
    ▒  0
    ░  0

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  36.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  36.15
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  36.15
```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (regexp)
    █  0.74
    ▓  0.74
    ▒  0.74
    ░  0.74

 2. mapl (tree)
    █  0.86
    ▓  0.86
    ▒  0.86
    ░  0.86

 3. mapl (jit)
    █  0.96
    ▓  0.96
    ▒  0.96
    ░  0.96

 4. rou3 (tree)
    █  1.44
    ▓  1.44
    ▒  1.44
    ░  1.44

 5. hono (regexp)
    █  1.84
    ▓  1.84
    ▒  1.84
    ░  1.84

 6. rou3 (jit)
    █████  32.77
    ▓▓▓▓▓  32.77
    ▒▒▒▒▒  32.77
    ░░░░░  32.77

 7. find-my-way
    ███████████████████████████  211.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  211.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  211.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  211.51

 8. hono (pattern)
    ████████████████████████████████████████████████████████  443.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  443.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  443.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  443.52

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  764.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  764.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  764.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  764.34
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0.11
    ▓  0.11
    ▒  0.11
    ░  0.11

 2. mapl (tree)
    █  0.18
    ▓  0.18
    ▒  0.18
    ░  0.18

 3. hono (regexp)
    █  0.27
    ▓  0.27
    ▒  0.27
    ░  0.27

 4. mapl (regexp)
    █  0.79
    ▓  0.79
    ▒  0.79
    ░  0.79

 5. rou3 (tree)
    █  0.86
    ▓  0.86
    ▒  0.86
    ░  0.86

 6. rou3 (jit)
    ████  32.37
    ▓▓▓▓  32.37
    ▒▒▒▒  32.37
    ░░░░  32.37

 7. find-my-way
    █████████████████████  206.53
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  206.53
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  206.53
    ░░░░░░░░░░░░░░░░░░░░░  206.53

 8. hono (pattern)
    █████████████████████████████████████  369.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  369.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  369.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  369.74

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  973.13
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  973.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  973.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  973.13
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0.25
    ▓  0.25
    ▒  0.25
    ░  0.25

 2. mapl (tree)
    █  0.28
    ▓  0.28
    ▒  0.28
    ░  0.28

 3. mapl (regexp)
    █  0.52
    ▓  0.52
    ▒  0.52
    ░  0.52

 4. rou3 (tree)
    █  1.03
    ▓  1.03
    ▒  1.03
    ░  1.03

 5. hono (regexp)
    █  1.41
    ▓  1.41
    ▒  1.41
    ░  1.41

 6. rou3 (jit)
    ████  32.43
    ▓▓▓▓  32.43
    ▒▒▒▒  32.43
    ░░░░  32.43

 7. find-my-way
    █████████████████████  209.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  209.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  209.85
    ░░░░░░░░░░░░░░░░░░░░░  209.85

 8. hono (pattern)
    ██████████████████████████████████████  380.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  380.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  380.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  380.66

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  962.13
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  962.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  962.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  962.13
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███  0.04
    ▓▓▓  0.04
    ▒▒▒  0.04
    ░░░  0.04

 2. rou3 (jit)
    ████████  0.12
    ▓▓▓▓▓▓▓▓  0.12
    ▒▒▒▒▒▒▒▒  0.12
    ░░░░░░░░  0.12

 3. mapl (regexp)
    ███████████  0.18
    ▓▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░  0.18

 4. mapl (tree)
    ███████████  0.18
    ▓▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░░  0.18

 5. hono (regexp)
    ████████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░  0.19

 6. find-my-way
    ███████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░  0.32

 7. hono (pattern)
    ███████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 8. rou3 (tree)
    ███████████████████████████████████████████  0.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.72

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.64
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.64
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.64
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.64
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 2. rou3 (jit)
    ████████  0.12
    ▓▓▓▓▓▓▓▓  0.12
    ▒▒▒▒▒▒▒▒  0.12
    ░░░░░░░░  0.12

 3. hono (regexp)
    ███████████  0.17
    ▓▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░░  0.17

 4. mapl (tree)
    ████████████████  0.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.26
    ░░░░░░░░░░░░░░░░  0.26

 5. mapl (regexp)
    ████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░  0.33

 6. find-my-way
    ████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░  0.33

 7. hono (pattern)
    █████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 8. rou3 (tree)
    ████████████████████████████████████████  0.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.66

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.62
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ████████  0.09
    ▓▓▓▓▓▓▓▓  0.09
    ▒▒▒▒▒▒▒▒  0.09
    ░░░░░░░░  0.09

 2. hono (regexp)
    █████████████  0.15
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░░░  0.15

 3. rou3 (jit)
    ██████████████████████  0.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.26
    ░░░░░░░░░░░░░░░░░░░░░░  0.26

 4. mapl (tree)
    ███████████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░░░░░  0.28

 5. mapl (regexp)
    ██████████████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.31

 6. find-my-way
    ███████████████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.38

 7. hono (pattern)
    █████████████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.4

 8. rou3 (tree)
    ██████████████████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.18
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 2. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. hono (regexp)
    ████████████  0.17
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░░░  0.17

 4. mapl (tree)
    █████████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.25
    ░░░░░░░░░░░░░░░░░  0.25

 5. mapl (regexp)
    ██████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░  0.32

 6. find-my-way
    ███████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░  0.34

 7. rou3 (tree)
    ████████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 8. hono (pattern)
    ██████████████████████████████████████████  0.62
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.62
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.62
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.62

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.42
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. hono (regexp)
    █████  0.07
    ▓▓▓▓▓  0.07
    ▒▒▒▒▒  0.07
    ░░░░░  0.07

 2. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. rou3 (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 4. mapl (regexp)
    ████████████████  0.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░░░░░░░░░  0.23

 5. mapl (tree)
    ███████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░  0.28

 6. find-my-way
    ██████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 7. hono (pattern)
    ████████████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 8. rou3 (tree)
    ████████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.42
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    ██████  0.08
    ▓▓▓▓▓▓  0.08
    ▒▒▒▒▒▒  0.08
    ░░░░░░  0.08

 2. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. hono (regexp)
    ███████████  0.15
    ▓▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░░  0.15

 4. mapl (tree)
    ███████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░  0.28

 5. mapl (regexp)
    ███████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░  0.34

 6. find-my-way
    ███████████████████████████████  0.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.46

 7. rou3 (tree)
    ████████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 8. hono (pattern)
    ███████████████████████████████████████████  0.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.63

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.43
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0.24
    ▓  0.24
    ▒  0.24
    ░  0.24

 2. mapl (regexp)
    █  0.32
    ▓  0.32
    ▒  0.32
    ░  0.32

 3. hono (regexp)
    █  0.36
    ▓  0.36
    ▒  0.36
    ░  0.36

 4. rou3 (tree)
    █  0.62
    ▓  0.62
    ▒  0.62
    ░  0.62

 5. mapl (tree)
    █  1.14
    ▓  1.14
    ▒  1.14
    ░  1.14

 6. rou3 (jit)
    █████  32.52
    ▓▓▓▓▓  32.52
    ▒▒▒▒▒  32.52
    ░░░░░  32.52

 7. find-my-way
    ██████████████████████████  209.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  209.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  209.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  209.63

 8. hono (pattern)
    █████████████████████████████████████████████  363.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  363.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  363.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  363.55

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  777.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  777.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  777.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  777.37
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 6. rou3 (jit)
    ██  0.03
    ▓▓  0.03
    ▒▒  0.03
    ░░  0.03

 7. find-my-way
    ██████████  0.18
    ▓▓▓▓▓▓▓▓▓▓  0.18
    ▒▒▒▒▒▒▒▒▒▒  0.18
    ░░░░░░░░░░  0.18

 8. hono (pattern)
    ████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░  0.36

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.73
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 2. rou3 (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. hono (regexp)
    ████████  0.12
    ▓▓▓▓▓▓▓▓  0.12
    ▒▒▒▒▒▒▒▒  0.12
    ░░░░░░░░  0.12

 4. mapl (tree)
    ███████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░  0.28

 5. mapl (regexp)
    ██████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░  0.32

 6. hono (pattern)
    ██████████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.39

 7. find-my-way
    ██████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 8. rou3 (tree)
    ███████████████████████████████████████████████████████  0.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.83

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.46
```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. stnl (aot)
    █  0.03
    ▓  0.03
    ▒  0.03
    ░  0.03

 2. arktype (jit)
    █  0.06
    ▓  0.06
    ▒  0.06
    ░  0.06

 3. stnl (jit)
    █  0.23
    ▓  0.23
    ▒  0.23
    ░  0.23

 4. typia (aot)
    █  0.3
    ▓  0.3
    ▒  0.3
    ░  0.3

 5. typebox (jit)
    ██  0.48
    ▓▓  0.48
    ▒▒  0.48
    ░░  0.48

 6. typebox (aot)
    ██  0.52
    ▓▓  0.52
    ▒▒  0.52
    ░░  0.52

 7. sury (jit)
    ██████████  4.32
    ▓▓▓▓▓▓▓▓▓▓  4.32
    ▒▒▒▒▒▒▒▒▒▒  4.32
    ░░░░░░░░░░  4.32

 8. zod
    ████████████████████████████████████████████  20.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  20.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  20.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  20.42

 9. effect-schema
    █████████████████████████████████████████████████████████████████████████████  36.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  36.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  36.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  36.42

 10. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  45.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  45.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  45.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  45.51
```
<a name="3_YnVuLTEuMy45">

### bun-1.3.9
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. manual
    ███████████████  1.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.07
    ░░░░░░░░░░░░░░░  1.07

 2. ciorent (mutex)
    █████████████████████  1.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.48
    ░░░░░░░░░░░░░░░░░░░░░  1.48

 3. p-mutex
    ███████████████████████  1.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.69
    ░░░░░░░░░░░░░░░░░░░░░░░  1.69

 4. p-limit
    ████████████████████████████████████████████  3.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.24
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.24

 5. ciorent (semaphore)
    ████████████████████████████████████████████████████████  4.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.09

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  7.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  7.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  7.07
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. p-limit
    ███████████████████████████████████████████████████████  1.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.56

 2. ciorent (semaphore)
    ███████████████████████████████████████████████████████████████  1.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.8

 3. manual
    ██████████████████████████████████████████████████████████████████████████████  2.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.21
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.21

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.75
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. manual
    █  0
    ▓  0
    ▒  0
    ░  0

 2. p-limit
    ██████████████████████████████████████████████████████████████████  1.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.09

 3. async-mutex
    ████████████████████████████████████████████████████████████████████████████████  1.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.31

 4. ciorent (semaphore)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.59
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. p-limit
    █████████████  0.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.24
    ░░░░░░░░░░░░░  0.24

 2. ciorent (semaphore)
    ████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░  0.31

 3. manual
    █████████████████████████████████████████████  0.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.88

 4. async-mutex
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.9
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.9
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.9
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.9
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. manual
    █  0
    ▓  0
    ▒  0
    ░  0

 2. p-limit
    ████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░  0.35

 3. async-mutex
    ████████████████████████████████████████████████████████████████████  1.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.22

 4. ciorent (semaphore)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.74
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.74
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. manual
    ██████████████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.41

 2. ciorent (semaphore)
    ██████████████████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 3. async-mutex
    ██████████████████████████████████████████████████████████████████████████████████████████  1.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.11

 4. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.19
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.19
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. manual
    █  0
    ▓  0
    ▒  0
    ░  0

 2. ciorent (semaphore)
    ███████████████  0.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.2
    ░░░░░░░░░░░░░░░  0.2

 3. p-limit
    █████████████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.37
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.37
```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. native
    █████  0.11
    ▓▓▓▓▓  0.11
    ▒▒▒▒▒  0.11
    ░░░░░  0.11

 2. deuri
    █████████████████████████████  0.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 3. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.61
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. native
    █  0
    ▓  0
    ▒  0
    ░  0

 2. deuri
    █████  2.67
    ▓▓▓▓▓  2.67
    ▒▒▒▒▒  2.67
    ░░░░░  2.67

 3. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  54.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  54.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  54.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  54.33
```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. rou3 (tree)
    █  0.02
    ▓  0.02
    ▒  0.02
    ░  0.02

 2. mapl (tree)
    █  0.03
    ▓  0.03
    ▒  0.03
    ░  0.03

 3. mapl (regexp)
    █  0.03
    ▓  0.03
    ▒  0.03
    ░  0.03

 4. hono (regexp)
    ██  0.08
    ▓▓  0.08
    ▒▒  0.08
    ░░  0.08

 5. mapl (jit)
    ███  0.14
    ▓▓▓  0.14
    ▒▒▒  0.14
    ░░░  0.14

 6. rou3 (jit)
    █████  0.24
    ▓▓▓▓▓  0.24
    ▒▒▒▒▒  0.24
    ░░░░░  0.24

 7. hono (pattern)
    ███████████████████████████████████████████████████  2.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.63

 8. find-my-way
    █████████████████████████████████████████████████████  2.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.7

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.98
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.98
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.98
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.98
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (tree)
    ███  0.08
    ▓▓▓  0.08
    ▒▒▒  0.08
    ░░░  0.08

 3. mapl (regexp)
    ███  0.08
    ▓▓▓  0.08
    ▒▒▒  0.08
    ░░░  0.08

 4. rou3 (tree)
    ████  0.12
    ▓▓▓▓  0.12
    ▒▒▒▒  0.12
    ░░░░  0.12

 5. hono (regexp)
    ████  0.12
    ▓▓▓▓  0.12
    ▒▒▒▒  0.12
    ░░░░  0.12

 6. rou3 (jit)
    ███████  0.24
    ▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒  0.24
    ░░░░░░░  0.24

 7. hono (pattern)
    ████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01

 8. hono (trie)
    ███████████████████████████████████████████████████████████████████████████████████████████  3.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.32

 9. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.54
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. mapl (jit)
    █  0.02
    ▓  0.02
    ▒  0.02
    ░  0.02

 5. mapl (regexp)
    █  0.02
    ▓  0.02
    ▒  0.02
    ░  0.02

 6. rou3 (jit)
    ████████  0.42
    ▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░  0.42

 7. hono (pattern)
    ███████████████████████  1.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.3
    ░░░░░░░░░░░░░░░░░░░░░░░  1.3

 8. hono (trie)
    ███████████████████████████████████████████  2.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.48

 9. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  5.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  5.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5.54
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    ██  0.24
    ▓▓  0.24
    ▒▒  0.24
    ░░  0.24

 2. mapl (tree)
    █████████  1.6
    ▓▓▓▓▓▓▓▓▓  1.6
    ▒▒▒▒▒▒▒▒▒  1.6
    ░░░░░░░░░  1.6

 3. mapl (regexp)
    ████████████████  3.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.03
    ░░░░░░░░░░░░░░░░  3.03

 4. hono (regexp)
    █████████████████████  3.94
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.94
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.94
    ░░░░░░░░░░░░░░░░░░░░░  3.94

 5. find-my-way
    ████████████████████████  4.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.65
    ░░░░░░░░░░░░░░░░░░░░░░░░  4.65

 6. hono (pattern)
    ████████████████████████████  5.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  5.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  5.32
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5.32

 7. hono (trie)
    ██████████████████████████████  5.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  5.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  5.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5.82

 8. rou3 (jit)
    ████████████████████████████████████████████  8.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  8.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  8.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  8.38

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████████████████████████  18.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  18.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  18.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  18.67
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █████████  1.54
    ▓▓▓▓▓▓▓▓▓  1.54
    ▒▒▒▒▒▒▒▒▒  1.54
    ░░░░░░░░░  1.54

 2. mapl (tree)
    █████████████████████  3.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.85
    ░░░░░░░░░░░░░░░░░░░░░  3.85

 3. hono (pattern)
    ██████████████████████████████  5.63
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  5.63
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  5.63
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5.63

 4. rou3 (jit)
    █████████████████████████████████████  6.91
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  6.91
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  6.91
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  6.91

 5. mapl (regexp)
    █████████████████████████████████████████████████████  9.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  9.95

 6. hono (regexp)
    ████████████████████████████████████████████████████████  10.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.43

 7. find-my-way
    █████████████████████████████████████████████████████████  10.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.79

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████  11.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  11.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  11.76
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  11.76

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  18.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  18.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  18.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  18.18
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0.06
    ▓  0.06
    ▒  0.06
    ░  0.06

 2. mapl (tree)
    ██  1.39
    ▓▓  1.39
    ▒▒  1.39
    ░░  1.39

 3. mapl (regexp)
    ███  1.86
    ▓▓▓  1.86
    ▒▒▒  1.86
    ░░░  1.86

 4. hono (regexp)
    ████  2.52
    ▓▓▓▓  2.52
    ▒▒▒▒  2.52
    ░░░░  2.52

 5. rou3 (jit)
    ██████  4.79
    ▓▓▓▓▓▓  4.79
    ▒▒▒▒▒▒  4.79
    ░░░░░░  4.79

 6. hono (pattern)
    ████████  6.26
    ▓▓▓▓▓▓▓▓  6.26
    ▒▒▒▒▒▒▒▒  6.26
    ░░░░░░░░  6.26

 7. hono (trie)
    ████████████  8.93
    ▓▓▓▓▓▓▓▓▓▓▓▓  8.93
    ▒▒▒▒▒▒▒▒▒▒▒▒  8.93
    ░░░░░░░░░░░░  8.93

 8. find-my-way
    ███████████████  11.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  11.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  11.42
    ░░░░░░░░░░░░░░░  11.42

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████████████████████████  77.09
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  77.09
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  77.09
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  77.09
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (tree)
    ████  1.34
    ▓▓▓▓  1.34
    ▒▒▒▒  1.34
    ░░░░  1.34

 3. hono (regexp)
    █████████  3.02
    ▓▓▓▓▓▓▓▓▓  3.02
    ▒▒▒▒▒▒▒▒▒  3.02
    ░░░░░░░░░  3.02

 4. mapl (regexp)
    ██████████████  4.96
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.96
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.96
    ░░░░░░░░░░░░░░  4.96

 5. hono (pattern)
    ████████████████  5.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  5.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  5.83
    ░░░░░░░░░░░░░░░░  5.83

 6. rou3 (jit)
    █████████████████████  7.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  7.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  7.57
    ░░░░░░░░░░░░░░░░░░░░░  7.57

 7. find-my-way
    ████████████████████████████  10.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  10.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  10.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  10.3

 8. rou3 (tree)
    ██████████████████████████████████████  14.2
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  14.2
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  14.2
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  14.2

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  36.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  36.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  36.17
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (tree)
    ███  0.76
    ▓▓▓  0.76
    ▒▒▒  0.76
    ░░░  0.76

 3. mapl (regexp)
    █████  1.24
    ▓▓▓▓▓  1.24
    ▒▒▒▒▒  1.24
    ░░░░░  1.24

 4. hono (regexp)
    █████████  2.41
    ▓▓▓▓▓▓▓▓▓  2.41
    ▒▒▒▒▒▒▒▒▒  2.41
    ░░░░░░░░░  2.41

 5. hono (pattern)
    ████████████████████  5.74
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  5.74
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  5.74
    ░░░░░░░░░░░░░░░░░░░░  5.74

 6. rou3 (jit)
    ███████████████████████  6.76
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  6.76
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  6.76
    ░░░░░░░░░░░░░░░░░░░░░░░  6.76

 7. find-my-way
    ██████████████████████████████████████████████████  14.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  14.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  14.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  14.72

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████  17.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  17.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  17.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  17.84

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  28.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  28.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  28.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  28.31
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0.12
    ▓  0.12
    ▒  0.12
    ░  0.12

 2. mapl (tree)
    ███████  1.02
    ▓▓▓▓▓▓▓  1.02
    ▒▒▒▒▒▒▒  1.02
    ░░░░░░░  1.02

 3. mapl (regexp)
    █████████████████████  3.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.23
    ░░░░░░░░░░░░░░░░░░░░░  3.23

 4. hono (regexp)
    ██████████████████████  3.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.29
    ░░░░░░░░░░░░░░░░░░░░░░  3.29

 5. hono (pattern)
    ████████████████████████████████████████  6.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  6.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  6.25
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  6.25

 6. rou3 (jit)
    ██████████████████████████████████████████████  7.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  7.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  7.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  7.07

 7. find-my-way
    ████████████████████████████████████████████████████████████████████████████████  12.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  12.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  12.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  12.42

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████████████████████████████  12.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  12.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  12.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  12.77

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  15.03
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  15.03
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  15.03
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  15.03
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. rou3 (jit)
    ██████  0.22
    ▓▓▓▓▓▓  0.22
    ▒▒▒▒▒▒  0.22
    ░░░░░░  0.22

 6. hono (pattern)
    ████████████████████████████████  1.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.3
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.3

 7. rou3 (tree)
    █████████████████████████████████  1.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.34

 8. find-my-way
    ████████████████████████████████████████████████████████████████████████████████  3.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  3.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  3.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  3.31

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.02
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.02
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.02
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.02
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. hono (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. rou3 (jit)
    ██  0.3
    ▓▓  0.3
    ▒▒  0.3
    ░░  0.3

 6. find-my-way
    ████  0.92
    ▓▓▓▓  0.92
    ▒▒▒▒  0.92
    ░░░░  0.92

 7. hono (pattern)
    █████  1
    ▓▓▓▓▓  1
    ▒▒▒▒▒  1
    ░░░░░  1

 8. rou3 (tree)
    ███████  1.71
    ▓▓▓▓▓▓▓  1.71
    ▒▒▒▒▒▒▒  1.71
    ░░░░░░░  1.71

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  24
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  24
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  0.13
    ▓  0.13
    ▒  0.13
    ░  0.13

 2. find-my-way
    ███  1.71
    ▓▓▓  1.71
    ▒▒▒  1.71
    ░░░  1.71

 3. mapl (tree)
    ███  1.95
    ▓▓▓  1.95
    ▒▒▒  1.95
    ░░░  1.95

 4. mapl (regexp)
    ████████  5.69
    ▓▓▓▓▓▓▓▓  5.69
    ▒▒▒▒▒▒▒▒  5.69
    ░░░░░░░░  5.69

 5. hono (regexp)
    █████████  6.39
    ▓▓▓▓▓▓▓▓▓  6.39
    ▒▒▒▒▒▒▒▒▒  6.39
    ░░░░░░░░░  6.39

 6. hono (pattern)
    █████████  6.42
    ▓▓▓▓▓▓▓▓▓  6.42
    ▒▒▒▒▒▒▒▒▒  6.42
    ░░░░░░░░░  6.42

 7. rou3 (jit)
    ███████████  8.1
    ▓▓▓▓▓▓▓▓▓▓▓  8.1
    ▒▒▒▒▒▒▒▒▒▒▒  8.1
    ░░░░░░░░░░░  8.1

 8. rou3 (tree)
    ███████████████████████████  20.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  20.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  20.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  20.55

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  75.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  75.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  75.29
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  75.29
```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. stnl (jit)
    █  0.02
    ▓  0.02
    ▒  0.02
    ░  0.02

 2. stnl (aot)
    █  0.02
    ▓  0.02
    ▒  0.02
    ░  0.02

 3. arktype (jit)
    █  0.03
    ▓  0.03
    ▒  0.03
    ░  0.03

 4. valibot
    █████  0.14
    ▓▓▓▓▓  0.14
    ▒▒▒▒▒  0.14
    ░░░░░  0.14

 5. typebox (jit)
    █████  0.15
    ▓▓▓▓▓  0.15
    ▒▒▒▒▒  0.15
    ░░░░░  0.15

 6. typebox (aot)
    ████████  0.23
    ▓▓▓▓▓▓▓▓  0.23
    ▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░  0.23

 7. sury (jit)
    ██████████  0.28
    ▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░  0.28

 8. typia (aot)
    ██████████  0.29
    ▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░  0.29

 9. zod
    ███████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░  0.45

 10. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.92
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.92
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.92
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.92
```
<a name="3_ZGVuby0yLjUuNw==">

### deno-2.5.7
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. manual
    ███████████████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.33

 2. ciorent (mutex)
    ████████████████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.35

 3. ciorent (semaphore)
    ██████████████████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 4. p-mutex
    ██████████████████████████████████████████████████  0.54
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.54
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.54
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.54

 5. p-limit
    █████████████████████████████████████████████████████████████████████████  0.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.05
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████  0.44
    ▓▓▓▓▓  0.44
    ▒▒▒▒▒  0.44
    ░░░░░  0.44

 2. p-limit
    █████████  0.78
    ▓▓▓▓▓▓▓▓▓  0.78
    ▒▒▒▒▒▒▒▒▒  0.78
    ░░░░░░░░░  0.78

 3. async-mutex
    ███████████  1
    ▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  9.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  9.23
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  9.23
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████████  0.44
    ▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░  0.44

 2. p-limit
    █████████████████  0.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░  0.79

 3. async-mutex
    █████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  4.73
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ██████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░  0.44

 2. p-limit
    ███████████████████████████████  0.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 3. async-mutex
    ████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.48
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ████████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 2. p-limit
    ████████████████████████████████████████████████████████  0.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 3. async-mutex
    ████████████████████████████████████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.36
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ██████████████████████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 2. p-limit
    ███████████████████████████████████████████████████████████████████████████  0.78
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.78
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.78
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.78

 3. manual
    ████████████████████████████████████████████████████████████████████████████  0.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████████████████████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 2. manual
    █████████████████████████████████████████████████  0.51
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.51
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.51
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.51

 3. p-limit
    ████████████████████████████████████████████████████████████████████████████  0.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.79

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1
```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. native
    ███████████████████████████  58.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  58.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  58.33
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  58.33

 2. fast-decode-uri-component
    ████████████████████████████████████████████████████████████████████████████████████████████████  207.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  207.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  207.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  207.57

 3. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  208.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  208.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  208.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  208.17
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. deuri
    █  0
    ▓  0
    ▒  0
    ░  0

 2. fast-decode-uri-component
    █  0
    ▓  0
    ▒  0
    ░  0

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  48.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  48.89
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  48.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  48.89
```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (tree)
    █  2.95
    ▓  2.95
    ▒  2.95
    ░  2.95

 2. mapl (jit)
    █  3.75
    ▓  3.75
    ▒  3.75
    ░  3.75

 3. rou3 (tree)
    █  4
    ▓  4
    ▒  4
    ░  4

 4. hono (regexp)
    █  6.03
    ▓  6.03
    ▒  6.03
    ░  6.03

 5. mapl (regexp)
    ██  9.49
    ▓▓  9.49
    ▒▒  9.49
    ░░  9.49

 6. rou3 (jit)
    █████  36.99
    ▓▓▓▓▓  36.99
    ▒▒▒▒▒  36.99
    ░░░░░  36.99

 7. find-my-way
    ██████████████████████████  214.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  214.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  214.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  214.22

 8. hono (pattern)
    █████████████████████████████████████████████████  397.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  397.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  397.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  397.73

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  792.05
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  792.05
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  792.05
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  792.05
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (regexp)
    █  1.64
    ▓  1.64
    ▒  1.64
    ░  1.64

 2. mapl (jit)
    █  1.9
    ▓  1.9
    ▒  1.9
    ░  1.9

 3. rou3 (tree)
    █  2.06
    ▓  2.06
    ▒  2.06
    ░  2.06

 4. hono (regexp)
    █  3.2
    ▓  3.2
    ▒  3.2
    ░  3.2

 5. mapl (tree)
    █  5.53
    ▓  5.53
    ▒  5.53
    ░  5.53

 6. rou3 (jit)
    ████  37.12
    ▓▓▓▓  37.12
    ▒▒▒▒  37.12
    ░░░░  37.12

 7. find-my-way
    █████████████████████████  249.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  249.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  249.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░  249.1

 8. hono (pattern)
    ███████████████████████████████████████  391.1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  391.1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  391.1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  391.1

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  976.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  976.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  976.24
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  976.24
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  1.43
    ▓  1.43
    ▒  1.43
    ░  1.43

 2. rou3 (tree)
    █  3.44
    ▓  3.44
    ▒  3.44
    ░  3.44

 3. hono (regexp)
    █  4.33
    ▓  4.33
    ▒  4.33
    ░  4.33

 4. mapl (regexp)
    █  6.97
    ▓  6.97
    ▒  6.97
    ░  6.97

 5. mapl (tree)
    █  8.39
    ▓  8.39
    ▒  8.39
    ░  8.39

 6. rou3 (jit)
    ████  33.81
    ▓▓▓▓  33.81
    ▒▒▒▒  33.81
    ░░░░  33.81

 7. find-my-way
    ██████████████████████  219.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  219.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  219.47
    ░░░░░░░░░░░░░░░░░░░░░░  219.47

 8. hono (pattern)
    ████████████████████████████████████  357.99
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  357.99
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  357.99
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  357.99

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  958.86
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  958.86
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  958.86
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  958.86
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 2. rou3 (jit)
    ██████████  0.17
    ▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░  0.17

 3. hono (regexp)
    █████████████  0.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░░  0.22

 4. mapl (tree)
    ████████████████  0.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.26
    ░░░░░░░░░░░░░░░░  0.26

 5. mapl (regexp)
    █████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░  0.28

 6. find-my-way
    █████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░  0.29

 7. hono (pattern)
    ████████████████████████████  0.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.47

 8. rou3 (tree)
    ████████████████████████████████████████████████████  0.89
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.89
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.89
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.89

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.66
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.66
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.66
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.66
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 2. hono (regexp)
    ██████████  0.17
    ▓▓▓▓▓▓▓▓▓▓  0.17
    ▒▒▒▒▒▒▒▒▒▒  0.17
    ░░░░░░░░░░  0.17

 3. rou3 (jit)
    ███████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░  0.19

 4. mapl (tree)
    ████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░  0.27

 5. mapl (regexp)
    ███████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░  0.33

 6. find-my-way
    █████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░  0.35

 7. hono (pattern)
    █████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 8. rou3 (tree)
    █████████████████████████████████████████████████  0.84
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.84
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.84
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.84

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.67
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.67
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.67
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.67
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ████████  0.09
    ▓▓▓▓▓▓▓▓  0.09
    ▒▒▒▒▒▒▒▒  0.09
    ░░░░░░░░  0.09

 2. hono (regexp)
    ███████████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░░░░  0.19

 3. mapl (tree)
    █████████████████████  0.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.26
    ░░░░░░░░░░░░░░░░░░░░░  0.26

 4. rou3 (jit)
    ██████████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░░░░░░  0.27

 5. mapl (regexp)
    █████████████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.31

 6. hono (pattern)
    ██████████████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 7. find-my-way
    ██████████████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 8. rou3 (tree)
    ███████████████████████████████████████████████████████  0.69
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.69
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.69
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.69

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.22
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.22
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ████████  0.11
    ▓▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒▒  0.11
    ░░░░░░░░  0.11

 2. mapl (tree)
    ███████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░  0.28

 3. rou3 (jit)
    ████████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░  0.29

 4. mapl (regexp)
    ██████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░░  0.32

 5. hono (regexp)
    ████████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.36

 6. find-my-way
    ██████████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░  0.39

 7. hono (pattern)
    █████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 8. rou3 (tree)
    ███████████████████████████████████████████████████████  0.83
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.83
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.83
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.83

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.46
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 2. rou3 (jit)
    ██████████████  0.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░  0.21

 3. mapl (regexp)
    ██████████████  0.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░  0.21

 4. mapl (tree)
    ███████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░  0.28

 5. hono (regexp)
    ████████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░░  0.29

 6. find-my-way
    ████████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 7. hono (pattern)
    ███████████████████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████  0.97
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.97
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.97
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.97

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.46
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.46
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.46
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.46
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 2. rou3 (jit)
    ████████████████  0.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.24
    ░░░░░░░░░░░░░░░░  0.24

 3. mapl (tree)
    ███████████████████  0.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.28
    ░░░░░░░░░░░░░░░░░░░  0.28

 4. mapl (regexp)
    ██████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░░  0.33

 5. hono (regexp)
    ████████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.36

 6. hono (pattern)
    █████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 7. find-my-way
    █████████████████████████████  0.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.44

 8. rou3 (tree)
    ████████████████████████████████████████████████████████  0.85
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.85
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.85
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.85

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.48
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.48
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.48
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.48
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (regexp)
    █  1.69
    ▓  1.69
    ▒  1.69
    ░  1.69

 2. mapl (jit)
    █  2.23
    ▓  2.23
    ▒  2.23
    ░  2.23

 3. hono (regexp)
    █  3.2
    ▓  3.2
    ▒  3.2
    ░  3.2

 4. mapl (tree)
    █  3.63
    ▓  3.63
    ▒  3.63
    ░  3.63

 5. rou3 (tree)
    █  4.6
    ▓  4.6
    ▒  4.6
    ░  4.6

 6. rou3 (jit)
    █████  35.73
    ▓▓▓▓▓  35.73
    ▒▒▒▒▒  35.73
    ░░░░░  35.73

 7. find-my-way
    ███████████████████████████  214.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  214.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  214.08
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░  214.08

 8. hono (pattern)
    ██████████████████████████████████████████████  364.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  364.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  364.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  364.65

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  776.28
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  776.28
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  776.28
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  776.28
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 3. mapl (regexp)
    █  0
    ▓  0
    ▒  0
    ░  0

 4. rou3 (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 5. hono (regexp)
    █  0.01
    ▓  0.01
    ▒  0.01
    ░  0.01

 6. rou3 (jit)
    ██  0.03
    ▓▓  0.03
    ▒▒  0.03
    ░░  0.03

 7. find-my-way
    ██████████████  0.24
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.24
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.24
    ░░░░░░░░░░░░░░  0.24

 8. hono (pattern)
    ██████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░  0.39

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.75
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.75
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.75
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.75
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 2. rou3 (jit)
    █████████  0.13
    ▓▓▓▓▓▓▓▓▓  0.13
    ▒▒▒▒▒▒▒▒▒  0.13
    ░░░░░░░░░  0.13

 3. hono (regexp)
    ██████████  0.14
    ▓▓▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░░░  0.14

 4. mapl (tree)
    ███████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░░  0.29

 5. mapl (regexp)
    █████████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░░░░  0.32

 6. hono (pattern)
    █████████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░░░░  0.38

 7. find-my-way
    █████████████████████████████  0.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.43

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████  0.95
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.95
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.95
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.95

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.47
```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. stnl (aot)
    █  0.03
    ▓  0.03
    ▒  0.03
    ░  0.03

 2. arktype (jit)
    █  0.04
    ▓  0.04
    ▒  0.04
    ░  0.04

 3. stnl (jit)
    █  0.23
    ▓  0.23
    ▒  0.23
    ░  0.23

 4. typia (aot)
    █  0.3
    ▓  0.3
    ▒  0.3
    ░  0.3

 5. typebox (jit)
    ██  0.48
    ▓▓  0.48
    ▒▒  0.48
    ░░  0.48

 6. typebox (aot)
    ██  0.49
    ▓▓  0.49
    ▒▒  0.49
    ░░  0.49

 7. sury (jit)
    ██████████  4.32
    ▓▓▓▓▓▓▓▓▓▓  4.32
    ▒▒▒▒▒▒▒▒▒▒  4.32
    ░░░░░░░░░░  4.32

 8. zod
    ███████████████████████████████████████████████  22.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  22.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  22.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  22.52

 9. effect-schema
    ██████████████████████████████████████████████████████████████████████  33.16
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  33.16
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  33.16
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  33.16

 10. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  46.07
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  46.07
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  46.07
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  46.07
```
<a name="3_ZGVuby0yLjYuMTA=">

### deno-2.6.10
<a name="4_YXN5bmM=">

#### async
<a name="5_Y29uY3VycmVuY3kgMQ==">

##### concurrency 1
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. manual
    ███████████████████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.34

 2. ciorent (mutex)
    █████████████████████████████████  0.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.36

 3. ciorent (semaphore)
    ██████████████████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.41

 4. p-mutex
    ██████████████████████████████████████████████  0.5
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.5
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.5
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.5

 5. p-limit
    ██████████████████████████████████████████████████████████████████████████  0.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.81

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.06
```
<a name="5_Y29uY3VycmVuY3kgMg==">

##### concurrency 2
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░  0.41

 2. p-limit
    ████████████████████████████████  0.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 3. async-mutex
    ████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.44
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  2.44
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  2.44
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2.44
```
<a name="5_Y29uY3VycmVuY3kgNA==">

##### concurrency 4
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    █████████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.41

 2. p-limit
    █████████████████████████████████████████████████████████  0.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 3. async-mutex
    ████████████████████████████████████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.36
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.36
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.36
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.36
```
<a name="5_Y29uY3VycmVuY3kgOA==">

##### concurrency 8
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ███████████████████████████████████████  0.41
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.41
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.41
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.41

 2. p-limit
    █████████████████████████████████████████████████████████████████████████████  0.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.81
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.81

 3. manual
    ██████████████████████████████████████████████████████████████████████████████  0.82
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.82
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.82
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.82

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01
```
<a name="5_Y29uY3VycmVuY3kgMTY=">

##### concurrency 16
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ███████████████████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.4

 2. manual
    █████████████████████████████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████  0.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01
```
<a name="5_Y29uY3VycmVuY3kgMzI=">

##### concurrency 32
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. ciorent (semaphore)
    ███████████████████████████████████████  0.4
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.4
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.4
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.4

 2. manual
    ████████████████████████████████████████  0.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.42

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████  0.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01
```
<a name="5_Y29uY3VycmVuY3kgNjQ=">

##### concurrency 64
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. manual
    ██████████████████████████████████  0.35
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.35
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.35
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.35

 2. ciorent (semaphore)
    ██████████████████████████████████████  0.39
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.39
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.39
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.39

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████  0.8
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.8
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.8
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.8

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.01
```
<a name="4_ZGVjb2RlLXVyaS1jb21wb25lbnQ=">

#### decode-uri-component
<a name="5_dmFsaWQ=">

##### valid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. native
    ████████████████████████████  58.73
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  58.73
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  58.73
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  58.73

 2. fast-decode-uri-component
    ███████████████████████████████████████████████████████████████████████████████████████████████  205.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  205.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  205.57
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  205.57

 3. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  208.77
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  208.77
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  208.77
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  208.77
```
<a name="5_aW52YWxpZA==">

##### invalid
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. deuri
    █  0
    ▓  0
    ▒  0
    ░  0

 2. fast-decode-uri-component
    █  0
    ▓  0
    ▒  0
    ░  0

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  49.01
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  49.01
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  49.01
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  49.01
```
<a name="4_dXJsLXJvdXRlcnM=">

#### url-routers
<a name="5_R0VUICIvdXNlciI=">

##### GET "/user"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (tree)
    █  2.87
    ▓  2.87
    ▒  2.87
    ░  2.87

 2. mapl (jit)
    █  3.14
    ▓  3.14
    ▒  3.14
    ░  3.14

 3. mapl (regexp)
    █  3.79
    ▓  3.79
    ▒  3.79
    ░  3.79

 4. rou3 (tree)
    █  4.93
    ▓  4.93
    ▒  4.93
    ░  4.93

 5. hono (regexp)
    ██  8.58
    ▓▓  8.58
    ▒▒  8.58
    ░░  8.58

 6. rou3 (jit)
    █████  36.18
    ▓▓▓▓▓  36.18
    ▒▒▒▒▒  36.18
    ░░░░░  36.18

 7. find-my-way
    ███████████████████████████████  244.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  244.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  244.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  244.47

 8. hono (pattern)
    ████████████████████████████████████████████  343.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  343.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  343.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  343.45

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  765.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  765.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  765.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  765.59
```
<a name="5_R0VUICIvdXNlci9jb21tZW50cyI=">

##### GET "/user/comments"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (tree)
    █  2.49
    ▓  2.49
    ▒  2.49
    ░  2.49

 2. mapl (jit)
    █  3.02
    ▓  3.02
    ▒  3.02
    ░  3.02

 3. mapl (regexp)
    █  4.67
    ▓  4.67
    ▒  4.67
    ░  4.67

 4. rou3 (tree)
    █  7.87
    ▓  7.87
    ▒  7.87
    ░  7.87

 5. hono (regexp)
    ██  19.27
    ▓▓  19.27
    ▒▒  19.27
    ░░  19.27

 6. rou3 (jit)
    ████  34.97
    ▓▓▓▓  34.97
    ▒▒▒▒  34.97
    ░░░░  34.97

 7. find-my-way
    █████████████████████  201.57
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  201.57
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  201.57
    ░░░░░░░░░░░░░░░░░░░░░  201.57

 8. hono (pattern)
    ██████████████████████████████████  329.52
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  329.52
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  329.52
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  329.52

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  953.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  953.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  953.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  953.45
```
<a name="5_R0VUICIvdXNlci9hdmF0YXIi">

##### GET "/user/avatar"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (regexp)
    █  2.7
    ▓  2.7
    ▒  2.7
    ░  2.7

 2. mapl (jit)
    █  4.29
    ▓  4.29
    ▒  4.29
    ░  4.29

 3. rou3 (tree)
    █  4.31
    ▓  4.31
    ▒  4.31
    ░  4.31

 4. hono (regexp)
    █  6.43
    ▓  6.43
    ▒  6.43
    ░  6.43

 5. mapl (tree)
    ██  10.3
    ▓▓  10.3
    ▒▒  10.3
    ░░  10.3

 6. rou3 (jit)
    ████  35.74
    ▓▓▓▓  35.74
    ▒▒▒▒  35.74
    ░░░░  35.74

 7. find-my-way
    ████████████████████████  235.92
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  235.92
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  235.92
    ░░░░░░░░░░░░░░░░░░░░░░░░  235.92

 8. hono (pattern)
    ██████████████████████████████████  329.7
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  329.7
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  329.7
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  329.7

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  956.43
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  956.43
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  956.43
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  956.43
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvdXNlcm5hbWUvOnVzZXJuYW1lIg==">

##### GET "/user/lookup/username/:username"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 2. rou3 (jit)
    █████████  0.15
    ▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░  0.15

 3. mapl (regexp)
    █████████████  0.22
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.22
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.22
    ░░░░░░░░░░░░░  0.22

 4. mapl (tree)
    █████████████  0.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  0.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░░░░░░  0.23

 5. find-my-way
    █████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░  0.29

 6. hono (regexp)
    ██████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░  0.32

 7. hono (pattern)
    █████████████████████████████████  0.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.58

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████  1.14
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.14
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.14
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.14

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.72
```
<a name="5_R0VUICIvdXNlci9sb29rdXAvZW1haWwvOmVtYWlsIg==">

##### GET "/user/lookup/email/:email"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ██████  0.11
    ▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒  0.11
    ░░░░░░  0.11

 2. rou3 (jit)
    █████████  0.16
    ▓▓▓▓▓▓▓▓▓  0.16
    ▒▒▒▒▒▒▒▒▒  0.16
    ░░░░░░░░░  0.16

 3. mapl (regexp)
    ██████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.25
    ░░░░░░░░░░░░░░  0.25

 4. mapl (tree)
    ██████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.25
    ░░░░░░░░░░░░░░  0.25

 5. find-my-way
    ████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░  0.29

 6. hono (regexp)
    █████████████████  0.31
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.31
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.31
    ░░░░░░░░░░░░░░░░░  0.31

 7. hono (pattern)
    ██████████████████████████████  0.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.55

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████  1.17
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.17
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.17
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.17

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.79
```
<a name="5_R0VUICIvZXZlbnQvOmlkIg==">

##### GET "/event/:id"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ██████  0.08
    ▓▓▓▓▓▓  0.08
    ▒▒▒▒▒▒  0.08
    ░░░░░░  0.08

 2. rou3 (jit)
    ███████████  0.14
    ▓▓▓▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░░░░  0.14

 3. mapl (tree)
    ████████████████  0.21
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.21
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.21
    ░░░░░░░░░░░░░░░░  0.21

 4. mapl (regexp)
    █████████████████  0.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░░░░░░░░░░  0.23

 5. hono (regexp)
    ███████████████████  0.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.26
    ░░░░░░░░░░░░░░░░░░░  0.26

 6. find-my-way
    █████████████████████████████████  0.45
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.45
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.45
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.45

 7. hono (pattern)
    ███████████████████████████████████████████  0.59
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.59
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.59
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.59

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████  1
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.34
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.34
```
<a name="5_R0VUICIvZXZlbnQvOmlkL2NvbW1lbnRzIg==">

##### GET "/event/:id/comments"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    ██████  0.09
    ▓▓▓▓▓▓  0.09
    ▒▒▒▒▒▒  0.09
    ░░░░░░  0.09

 2. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. mapl (tree)
    ████████████████  0.25
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.25
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.25
    ░░░░░░░░░░░░░░░░  0.25

 4. mapl (regexp)
    █████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░  0.27

 5. hono (regexp)
    ██████████████████  0.29
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.29
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.29
    ░░░░░░░░░░░░░░░░░░  0.29

 6. find-my-way
    ███████████████████  0.3
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.3
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.3
    ░░░░░░░░░░░░░░░░░░░  0.3

 7. hono (pattern)
    ██████████████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████████████  1.08
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.08
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.08
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.08

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.55
```
<a name="5_UE9TVCAiL2V2ZW50LzppZC9jb21tZW50Ig==">

##### POST "/event/:id/comment"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    █████  0.08
    ▓▓▓▓▓  0.08
    ▒▒▒▒▒  0.08
    ░░░░░  0.08

 2. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. mapl (regexp)
    ██████████  0.15
    ▓▓▓▓▓▓▓▓▓▓  0.15
    ▒▒▒▒▒▒▒▒▒▒  0.15
    ░░░░░░░░░░  0.15

 4. hono (regexp)
    ██████████████  0.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░░░░░░░  0.23

 5. mapl (tree)
    ██████████████  0.23
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.23
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.23
    ░░░░░░░░░░░░░░  0.23

 6. find-my-way
    █████████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░░░  0.33

 7. hono (pattern)
    ██████████████████████████████████████  0.61
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.61
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.61
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.61

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████  1.06
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.06
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.06
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.06

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.58
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.58
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.58
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.58
```
<a name="5_R0VUICIvbWFwLzpsb2NhdGlvbi9ldmVudCI=">

##### GET "/map/:location/event"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. rou3 (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 2. mapl (jit)
    ███████  0.1
    ▓▓▓▓▓▓▓  0.1
    ▒▒▒▒▒▒▒  0.1
    ░░░░░░░  0.1

 3. mapl (tree)
    ████████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░░  0.19

 4. hono (regexp)
    █████████████████  0.26
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.26
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.26
    ░░░░░░░░░░░░░░░░░  0.26

 5. mapl (regexp)
    █████████████████  0.27
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.27
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.27
    ░░░░░░░░░░░░░░░░░  0.27

 6. find-my-way
    ████████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░░░  0.38

 7. hono (pattern)
    ███████████████████████████████████  0.56
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.56
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.56
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.56

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████████  1.11
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.11
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.11
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.11

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.55
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.55
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.55
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.55
```
<a name="5_R0VUICIvc3RhdHVzIg==">

##### GET "/status"
```
 █  average (b)
 ▓  p50 (b)
 ▒  p75 (b)
 ░  p99 (b)

 1. mapl (jit)
    █  1.4
    ▓  1.4
    ▒  1.4
    ░  1.4

 2. hono (regexp)
    █  3.56
    ▓  3.56
    ▒  3.56
    ░  3.56

 3. mapl (tree)
    █  5.14
    ▓  5.14
    ▒  5.14
    ░  5.14

 4. rou3 (tree)
    █  5.83
    ▓  5.83
    ▒  5.83
    ░  5.83

 5. mapl (regexp)
    ███  21.1
    ▓▓▓  21.1
    ▒▒▒  21.1
    ░░░  21.1

 6. rou3 (jit)
    █████  34.94
    ▓▓▓▓▓  34.94
    ▒▒▒▒▒  34.94
    ░░░░░  34.94

 7. find-my-way
    ████████████████████████████  216.88
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  216.88
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  216.88
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  216.88

 8. hono (pattern)
    ██████████████████████████████████████████  329.13
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  329.13
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  329.13
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  329.13

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  763.79
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  763.79
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  763.79
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  763.79
```
<a name="5_R0VUICIvdmVyeS9kZWVwbHkvbmVzdGVkL3JvdXRlL2hlbGxvL3RoZXJlIg==">

##### GET "/very/deeply/nested/route/hello/there"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (tree)
    █  0
    ▓  0
    ▒  0
    ░  0

 2. mapl (jit)
    █  0.01
    ▓  0.01
    ▒  0.01
    ░  0.01

 3. hono (regexp)
    ██  0.02
    ▓▓  0.02
    ▒▒  0.02
    ░░  0.02

 4. mapl (regexp)
    ██  0.02
    ▓▓  0.02
    ▒▒  0.02
    ░░  0.02

 5. rou3 (tree)
    ██  0.02
    ▓▓  0.02
    ▒▒  0.02
    ░░  0.02

 6. rou3 (jit)
    ███  0.04
    ▓▓▓  0.04
    ▒▒▒  0.04
    ░░░  0.04

 7. find-my-way
    ███████████  0.19
    ▓▓▓▓▓▓▓▓▓▓▓  0.19
    ▒▒▒▒▒▒▒▒▒▒▒  0.19
    ░░░░░░░░░░░  0.19

 8. hono (pattern)
    ███████████████████  0.33
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.33
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.33
    ░░░░░░░░░░░░░░░░░░░  0.33

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.72
```
<a name="5_R0VUICIvc3RhdGljLyoi">

##### GET "/static/*"
```
 █  average (kb)
 ▓  p50 (kb)
 ▒  p75 (kb)
 ░  p99 (kb)

 1. mapl (jit)
    ███████  0.11
    ▓▓▓▓▓▓▓  0.11
    ▒▒▒▒▒▒▒  0.11
    ░░░░░░░  0.11

 2. rou3 (jit)
    ████████  0.14
    ▓▓▓▓▓▓▓▓  0.14
    ▒▒▒▒▒▒▒▒  0.14
    ░░░░░░░░  0.14

 3. mapl (tree)
    ██████████████████  0.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.32
    ░░░░░░░░░░░░░░░░░░  0.32

 4. mapl (regexp)
    ███████████████████  0.34
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.34
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.34
    ░░░░░░░░░░░░░░░░░░░  0.34

 5. find-my-way
    █████████████████████  0.37
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.37
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.37
    ░░░░░░░░░░░░░░░░░░░░░  0.37

 6. hono (regexp)
    ██████████████████████  0.38
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.38
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.38
    ░░░░░░░░░░░░░░░░░░░░░░  0.38

 7. hono (pattern)
    █████████████████████████████████████  0.65
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  0.65
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  0.65
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.65

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████████████  1.18
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.18
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.18
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.18

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.72
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  1.72
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  1.72
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1.72
```
<a name="4_dmFsaWRhdG9ycw==">

#### validators
<a name="5_YXNzZXJ0LXNpbXBsZQ==">

##### assert-simple
```
 █  average (mb)
 ▓  p50 (mb)
 ▒  p75 (mb)
 ░  p99 (mb)

 1. stnl (aot)
    █  0.01
    ▓  0.01
    ▒  0.01
    ░  0.01

 2. arktype (jit)
    █  0.03
    ▓  0.03
    ▒  0.03
    ░  0.03

 3. stnl (jit)
    █  0.23
    ▓  0.23
    ▒  0.23
    ░  0.23

 4. typia (aot)
    ██  0.3
    ▓▓  0.3
    ▒▒  0.3
    ░░  0.3

 5. typebox (jit)
    ███  0.51
    ▓▓▓  0.51
    ▒▒▒  0.51
    ░░░  0.51

 6. typebox (aot)
    ███  0.54
    ▓▓▓  0.54
    ▒▒▒  0.54
    ░░░  0.54

 7. effect-schema
    █████████████  2.81
    ▓▓▓▓▓▓▓▓▓▓▓▓▓  2.81
    ▒▒▒▒▒▒▒▒▒▒▒▒▒  2.81
    ░░░░░░░░░░░░░  2.81

 8. sury (jit)
    ███████████████████  4.32
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  4.32
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  4.32
    ░░░░░░░░░░░░░░░░░░░  4.32

 9. valibot
    ██████████████████████████████████████████████████████  12.42
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  12.42
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  12.42
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  12.42

 10. zod
    █████████████████████████████████████████████████████████████████████████████████████████████████  22.47
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  22.47
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  22.47
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  22.47
```

# Results
1. [`node-22.22.0`](#0)
    1. [`micro`](#1)
        1. [`url`](#2)
            1. [`end`](#3)
                1. [`/^a($)/`](#4)
                2. [`/^a$()/`](#5)
                3. [`/^a()$/`](#6)
                4. [`/^a($)$/`](#7)
                5. [`/^a$($)$/`](#8)
            2. [`wildcard`](#9)
                1. [`/^a(.*)($)/`](#10)
                2. [`/^a(.*)($)$/`](#11)
                3. [`/^a(.*$)($)/`](#12)
                4. [`/^a(.*$)()$/`](#13)
                5. [`/^a(.*$)($)$/`](#14)
                6. [`/^a(.*)()$/`](#15)
    2. [`async`](#16)
        1. [`concurrency 1`](#17)
            1. [`p-limit`](#18)
            2. [`ciorent (semaphore)`](#19)
            3. [`ciorent (mutex)`](#20)
            4. [`p-mutex`](#21)
            5. [`async-mutex`](#22)
            6. [`manual`](#23)
        2. [`concurrency 2`](#24)
            1. [`p-limit`](#25)
            2. [`ciorent (semaphore)`](#26)
            3. [`async-mutex`](#27)
            4. [`manual`](#28)
        3. [`concurrency 4`](#29)
            1. [`p-limit`](#30)
            2. [`ciorent (semaphore)`](#31)
            3. [`async-mutex`](#32)
            4. [`manual`](#33)
        4. [`concurrency 8`](#34)
            1. [`p-limit`](#35)
            2. [`ciorent (semaphore)`](#36)
            3. [`async-mutex`](#37)
            4. [`manual`](#38)
        5. [`concurrency 16`](#39)
            1. [`p-limit`](#40)
            2. [`ciorent (semaphore)`](#41)
            3. [`async-mutex`](#42)
            4. [`manual`](#43)
        6. [`concurrency 32`](#44)
            1. [`p-limit`](#45)
            2. [`ciorent (semaphore)`](#46)
            3. [`async-mutex`](#47)
            4. [`manual`](#48)
        7. [`concurrency 64`](#49)
            1. [`p-limit`](#50)
            2. [`ciorent (semaphore)`](#51)
            3. [`async-mutex`](#52)
            4. [`manual`](#53)
    3. [`decode-uri-component`](#54)
        1. [`valid`](#55)
            1. [`native`](#56)
            2. [`fast-decode-uri-component`](#57)
            3. [`deuri`](#58)
        2. [`invalid`](#59)
            1. [`native`](#60)
            2. [`fast-decode-uri-component`](#61)
            3. [`deuri`](#62)
    4. [`url-routers`](#63)
        1. [`GET "/user"`](#64)
            1. [`hono (pattern)`](#65)
            2. [`rou3`](#66)
            3. [`hono (trie)`](#67)
            4. [`rou3 (jit)`](#68)
            5. [`mapl (jit)`](#69)
            6. [`find-my-way`](#70)
            7. [`hono (regexp)`](#71)
            8. [`mapl (tree)`](#72)
            9. [`mapl (regexp)`](#73)
        2. [`GET "/user/comments"`](#74)
            1. [`hono (pattern)`](#75)
            2. [`rou3`](#76)
            3. [`hono (trie)`](#77)
            4. [`rou3 (jit)`](#78)
            5. [`mapl (jit)`](#79)
            6. [`find-my-way`](#80)
            7. [`hono (regexp)`](#81)
            8. [`mapl (tree)`](#82)
            9. [`mapl (regexp)`](#83)
        3. [`GET "/user/avatar"`](#84)
            1. [`hono (pattern)`](#85)
            2. [`rou3`](#86)
            3. [`hono (trie)`](#87)
            4. [`rou3 (jit)`](#88)
            5. [`mapl (jit)`](#89)
            6. [`find-my-way`](#90)
            7. [`hono (regexp)`](#91)
            8. [`mapl (tree)`](#92)
            9. [`mapl (regexp)`](#93)
        4. [`GET "/user/lookup/username/:username"`](#94)
            1. [`hono (pattern)`](#95)
            2. [`rou3`](#96)
            3. [`hono (trie)`](#97)
            4. [`rou3 (jit)`](#98)
            5. [`mapl (jit)`](#99)
            6. [`find-my-way`](#100)
            7. [`hono (regexp)`](#101)
            8. [`mapl (tree)`](#102)
            9. [`mapl (regexp)`](#103)
        5. [`GET "/user/lookup/email/:email"`](#104)
            1. [`hono (pattern)`](#105)
            2. [`rou3`](#106)
            3. [`hono (trie)`](#107)
            4. [`rou3 (jit)`](#108)
            5. [`mapl (jit)`](#109)
            6. [`find-my-way`](#110)
            7. [`hono (regexp)`](#111)
            8. [`mapl (tree)`](#112)
            9. [`mapl (regexp)`](#113)
        6. [`GET "/event/:id"`](#114)
            1. [`hono (pattern)`](#115)
            2. [`rou3`](#116)
            3. [`hono (trie)`](#117)
            4. [`rou3 (jit)`](#118)
            5. [`mapl (jit)`](#119)
            6. [`find-my-way`](#120)
            7. [`hono (regexp)`](#121)
            8. [`mapl (tree)`](#122)
            9. [`mapl (regexp)`](#123)
        7. [`GET "/event/:id/comments"`](#124)
            1. [`hono (pattern)`](#125)
            2. [`rou3`](#126)
            3. [`hono (trie)`](#127)
            4. [`rou3 (jit)`](#128)
            5. [`mapl (jit)`](#129)
            6. [`find-my-way`](#130)
            7. [`hono (regexp)`](#131)
            8. [`mapl (tree)`](#132)
            9. [`mapl (regexp)`](#133)
        8. [`POST "/event/:id/comment"`](#134)
            1. [`hono (pattern)`](#135)
            2. [`rou3`](#136)
            3. [`hono (trie)`](#137)
            4. [`rou3 (jit)`](#138)
            5. [`mapl (jit)`](#139)
            6. [`find-my-way`](#140)
            7. [`hono (regexp)`](#141)
            8. [`mapl (tree)`](#142)
            9. [`mapl (regexp)`](#143)
        9. [`GET "/map/:location/event"`](#144)
            1. [`hono (pattern)`](#145)
            2. [`rou3`](#146)
            3. [`hono (trie)`](#147)
            4. [`rou3 (jit)`](#148)
            5. [`mapl (jit)`](#149)
            6. [`find-my-way`](#150)
            7. [`hono (regexp)`](#151)
            8. [`mapl (tree)`](#152)
            9. [`mapl (regexp)`](#153)
        10. [`GET "/status"`](#154)
            1. [`hono (pattern)`](#155)
            2. [`rou3`](#156)
            3. [`hono (trie)`](#157)
            4. [`rou3 (jit)`](#158)
            5. [`mapl (jit)`](#159)
            6. [`find-my-way`](#160)
            7. [`hono (regexp)`](#161)
            8. [`mapl (tree)`](#162)
            9. [`mapl (regexp)`](#163)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#164)
            1. [`hono (pattern)`](#165)
            2. [`rou3`](#166)
            3. [`hono (trie)`](#167)
            4. [`rou3 (jit)`](#168)
            5. [`mapl (jit)`](#169)
            6. [`find-my-way`](#170)
            7. [`hono (regexp)`](#171)
            8. [`mapl (tree)`](#172)
            9. [`mapl (regexp)`](#173)
        12. [`GET "/static/*"`](#174)
            1. [`hono (pattern)`](#175)
            2. [`rou3`](#176)
            3. [`hono (trie)`](#177)
            4. [`rou3 (jit)`](#178)
            5. [`mapl (jit)`](#179)
            6. [`find-my-way`](#180)
            7. [`hono (regexp)`](#181)
            8. [`mapl (tree)`](#182)
            9. [`mapl (regexp)`](#183)
    5. [`validators`](#184)
        1. [`assert-simple`](#185)
            1. [`sury (jit)`](#186)
            2. [`typia (aot)`](#187)
            3. [`valibot`](#188)
            4. [`stnl (jit)`](#189)
            5. [`zod`](#190)
            6. [`zod/mini`](#191)
            7. [`typebox (aot)`](#192)
            8. [`stnl (aot)`](#193)
            9. [`typebox (jit)`](#194)
            10. [`arktype (jit)`](#195)
            11. [`effect/schema`](#196)
2. [`node-24.13.0`](#197)
    1. [`async`](#198)
        1. [`concurrency 1`](#199)
        2. [`concurrency 2`](#200)
        3. [`concurrency 4`](#201)
        4. [`concurrency 8`](#202)
        5. [`concurrency 16`](#203)
        6. [`concurrency 32`](#204)
        7. [`concurrency 64`](#205)
    2. [`decode-uri-component`](#206)
        1. [`valid`](#207)
        2. [`invalid`](#208)
    3. [`url-routers`](#209)
        1. [`GET "/user"`](#210)
        2. [`GET "/user/comments"`](#211)
        3. [`GET "/user/avatar"`](#212)
        4. [`GET "/user/lookup/username/:username"`](#213)
        5. [`GET "/user/lookup/email/:email"`](#214)
        6. [`GET "/event/:id"`](#215)
        7. [`GET "/event/:id/comments"`](#216)
        8. [`POST "/event/:id/comment"`](#217)
        9. [`GET "/map/:location/event"`](#218)
        10. [`GET "/status"`](#219)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#220)
        12. [`GET "/static/*"`](#221)
    4. [`validators`](#222)
        1. [`assert-simple`](#223)
3. [`node-25.6.1`](#224)
    1. [`async`](#225)
        1. [`concurrency 1`](#226)
        2. [`concurrency 2`](#227)
        3. [`concurrency 4`](#228)
        4. [`concurrency 8`](#229)
        5. [`concurrency 16`](#230)
        6. [`concurrency 32`](#231)
        7. [`concurrency 64`](#232)
    2. [`decode-uri-component`](#233)
        1. [`valid`](#234)
        2. [`invalid`](#235)
    3. [`url-routers`](#236)
        1. [`GET "/user"`](#237)
        2. [`GET "/user/comments"`](#238)
        3. [`GET "/user/avatar"`](#239)
        4. [`GET "/user/lookup/username/:username"`](#240)
        5. [`GET "/user/lookup/email/:email"`](#241)
        6. [`GET "/event/:id"`](#242)
        7. [`GET "/event/:id/comments"`](#243)
        8. [`POST "/event/:id/comment"`](#244)
        9. [`GET "/map/:location/event"`](#245)
        10. [`GET "/status"`](#246)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#247)
        12. [`GET "/static/*"`](#248)
    4. [`validators`](#249)
        1. [`assert-simple`](#250)
4. [`bun-1.3.9`](#251)
    1. [`async`](#252)
        1. [`concurrency 1`](#253)
        2. [`concurrency 2`](#254)
        3. [`concurrency 4`](#255)
        4. [`concurrency 8`](#256)
        5. [`concurrency 16`](#257)
        6. [`concurrency 32`](#258)
        7. [`concurrency 64`](#259)
    2. [`decode-uri-component`](#260)
        1. [`valid`](#261)
        2. [`invalid`](#262)
    3. [`url-routers`](#263)
        1. [`GET "/user"`](#264)
        2. [`GET "/user/comments"`](#265)
        3. [`GET "/user/avatar"`](#266)
        4. [`GET "/user/lookup/username/:username"`](#267)
        5. [`GET "/user/lookup/email/:email"`](#268)
        6. [`GET "/event/:id"`](#269)
        7. [`GET "/event/:id/comments"`](#270)
        8. [`POST "/event/:id/comment"`](#271)
        9. [`GET "/map/:location/event"`](#272)
        10. [`GET "/status"`](#273)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#274)
        12. [`GET "/static/*"`](#275)
    4. [`validators`](#276)
        1. [`assert-simple`](#277)
5. [`deno-2.5.7`](#278)
    1. [`micro`](#279)
        1. [`url`](#280)
            1. [`end`](#281)
                1. [`/^a($)/`](#282)
                2. [`/^a$()/`](#283)
                3. [`/^a()$/`](#284)
                4. [`/^a($)$/`](#285)
                5. [`/^a$($)$/`](#286)
            2. [`wildcard`](#287)
                1. [`/^a(.*)($)/`](#288)
                2. [`/^a(.*)($)$/`](#289)
                3. [`/^a(.*$)($)/`](#290)
                4. [`/^a(.*$)()$/`](#291)
                5. [`/^a(.*$)($)$/`](#292)
                6. [`/^a(.*)()$/`](#293)
    2. [`async`](#294)
        1. [`concurrency 1`](#295)
            1. [`p-limit`](#296)
            2. [`ciorent (semaphore)`](#297)
            3. [`ciorent (mutex)`](#298)
            4. [`p-mutex`](#299)
            5. [`async-mutex`](#300)
            6. [`manual`](#301)
        2. [`concurrency 2`](#302)
            1. [`p-limit`](#303)
            2. [`ciorent (semaphore)`](#304)
            3. [`async-mutex`](#305)
            4. [`manual`](#306)
        3. [`concurrency 4`](#307)
            1. [`p-limit`](#308)
            2. [`ciorent (semaphore)`](#309)
            3. [`async-mutex`](#310)
            4. [`manual`](#311)
        4. [`concurrency 8`](#312)
            1. [`p-limit`](#313)
            2. [`ciorent (semaphore)`](#314)
            3. [`async-mutex`](#315)
            4. [`manual`](#316)
        5. [`concurrency 16`](#317)
            1. [`p-limit`](#318)
            2. [`ciorent (semaphore)`](#319)
            3. [`async-mutex`](#320)
            4. [`manual`](#321)
        6. [`concurrency 32`](#322)
            1. [`p-limit`](#323)
            2. [`ciorent (semaphore)`](#324)
            3. [`async-mutex`](#325)
            4. [`manual`](#326)
        7. [`concurrency 64`](#327)
            1. [`p-limit`](#328)
            2. [`ciorent (semaphore)`](#329)
            3. [`async-mutex`](#330)
            4. [`manual`](#331)
    3. [`decode-uri-component`](#332)
        1. [`valid`](#333)
            1. [`native`](#334)
            2. [`fast-decode-uri-component`](#335)
            3. [`deuri`](#336)
        2. [`invalid`](#337)
            1. [`native`](#338)
            2. [`fast-decode-uri-component`](#339)
            3. [`deuri`](#340)
    4. [`url-routers`](#341)
        1. [`GET "/user"`](#342)
            1. [`hono (pattern)`](#343)
            2. [`rou3`](#344)
            3. [`hono (trie)`](#345)
            4. [`rou3 (jit)`](#346)
            5. [`mapl (jit)`](#347)
            6. [`find-my-way`](#348)
            7. [`hono (regexp)`](#349)
            8. [`mapl (tree)`](#350)
            9. [`mapl (regexp)`](#351)
        2. [`GET "/user/comments"`](#352)
            1. [`hono (pattern)`](#353)
            2. [`rou3`](#354)
            3. [`hono (trie)`](#355)
            4. [`rou3 (jit)`](#356)
            5. [`mapl (jit)`](#357)
            6. [`find-my-way`](#358)
            7. [`hono (regexp)`](#359)
            8. [`mapl (tree)`](#360)
            9. [`mapl (regexp)`](#361)
        3. [`GET "/user/avatar"`](#362)
            1. [`hono (pattern)`](#363)
            2. [`rou3`](#364)
            3. [`hono (trie)`](#365)
            4. [`rou3 (jit)`](#366)
            5. [`mapl (jit)`](#367)
            6. [`find-my-way`](#368)
            7. [`hono (regexp)`](#369)
            8. [`mapl (tree)`](#370)
            9. [`mapl (regexp)`](#371)
        4. [`GET "/user/lookup/username/:username"`](#372)
            1. [`hono (pattern)`](#373)
            2. [`rou3`](#374)
            3. [`hono (trie)`](#375)
            4. [`rou3 (jit)`](#376)
            5. [`mapl (jit)`](#377)
            6. [`find-my-way`](#378)
            7. [`hono (regexp)`](#379)
            8. [`mapl (tree)`](#380)
            9. [`mapl (regexp)`](#381)
        5. [`GET "/user/lookup/email/:email"`](#382)
            1. [`hono (pattern)`](#383)
            2. [`rou3`](#384)
            3. [`hono (trie)`](#385)
            4. [`rou3 (jit)`](#386)
            5. [`mapl (jit)`](#387)
            6. [`find-my-way`](#388)
            7. [`hono (regexp)`](#389)
            8. [`mapl (tree)`](#390)
            9. [`mapl (regexp)`](#391)
        6. [`GET "/event/:id"`](#392)
            1. [`hono (pattern)`](#393)
            2. [`rou3`](#394)
            3. [`hono (trie)`](#395)
            4. [`rou3 (jit)`](#396)
            5. [`mapl (jit)`](#397)
            6. [`find-my-way`](#398)
            7. [`hono (regexp)`](#399)
            8. [`mapl (tree)`](#400)
            9. [`mapl (regexp)`](#401)
        7. [`GET "/event/:id/comments"`](#402)
            1. [`hono (pattern)`](#403)
            2. [`rou3`](#404)
            3. [`hono (trie)`](#405)
            4. [`rou3 (jit)`](#406)
            5. [`mapl (jit)`](#407)
            6. [`find-my-way`](#408)
            7. [`hono (regexp)`](#409)
            8. [`mapl (tree)`](#410)
            9. [`mapl (regexp)`](#411)
        8. [`POST "/event/:id/comment"`](#412)
            1. [`hono (pattern)`](#413)
            2. [`rou3`](#414)
            3. [`hono (trie)`](#415)
            4. [`rou3 (jit)`](#416)
            5. [`mapl (jit)`](#417)
            6. [`find-my-way`](#418)
            7. [`hono (regexp)`](#419)
            8. [`mapl (tree)`](#420)
            9. [`mapl (regexp)`](#421)
        9. [`GET "/map/:location/event"`](#422)
            1. [`hono (pattern)`](#423)
            2. [`rou3`](#424)
            3. [`hono (trie)`](#425)
            4. [`rou3 (jit)`](#426)
            5. [`mapl (jit)`](#427)
            6. [`find-my-way`](#428)
            7. [`hono (regexp)`](#429)
            8. [`mapl (tree)`](#430)
            9. [`mapl (regexp)`](#431)
        10. [`GET "/status"`](#432)
            1. [`hono (pattern)`](#433)
            2. [`rou3`](#434)
            3. [`hono (trie)`](#435)
            4. [`rou3 (jit)`](#436)
            5. [`mapl (jit)`](#437)
            6. [`find-my-way`](#438)
            7. [`hono (regexp)`](#439)
            8. [`mapl (tree)`](#440)
            9. [`mapl (regexp)`](#441)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#442)
            1. [`hono (pattern)`](#443)
            2. [`rou3`](#444)
            3. [`hono (trie)`](#445)
            4. [`rou3 (jit)`](#446)
            5. [`mapl (jit)`](#447)
            6. [`find-my-way`](#448)
            7. [`hono (regexp)`](#449)
            8. [`mapl (tree)`](#450)
            9. [`mapl (regexp)`](#451)
        12. [`GET "/static/*"`](#452)
            1. [`hono (pattern)`](#453)
            2. [`rou3`](#454)
            3. [`hono (trie)`](#455)
            4. [`rou3 (jit)`](#456)
            5. [`mapl (jit)`](#457)
            6. [`find-my-way`](#458)
            7. [`hono (regexp)`](#459)
            8. [`mapl (tree)`](#460)
            9. [`mapl (regexp)`](#461)
    5. [`validators`](#462)
        1. [`assert-simple`](#463)
            1. [`sury (jit)`](#464)
            2. [`typia (aot)`](#465)
            3. [`valibot`](#466)
            4. [`stnl (jit)`](#467)
            5. [`zod`](#468)
            6. [`zod/mini`](#469)
            7. [`typebox (aot)`](#470)
            8. [`stnl (aot)`](#471)
            9. [`typebox (jit)`](#472)
            10. [`arktype (jit)`](#473)
            11. [`effect/schema`](#474)
6. [`deno-2.6.10`](#475)
    1. [`async`](#476)
        1. [`concurrency 1`](#477)
        2. [`concurrency 2`](#478)
        3. [`concurrency 4`](#479)
        4. [`concurrency 8`](#480)
        5. [`concurrency 16`](#481)
        6. [`concurrency 32`](#482)
        7. [`concurrency 64`](#483)
    2. [`decode-uri-component`](#484)
        1. [`valid`](#485)
        2. [`invalid`](#486)
    3. [`url-routers`](#487)
        1. [`GET "/user"`](#488)
        2. [`GET "/user/comments"`](#489)
        3. [`GET "/user/avatar"`](#490)
        4. [`GET "/user/lookup/username/:username"`](#491)
        5. [`GET "/user/lookup/email/:email"`](#492)
        6. [`GET "/event/:id"`](#493)
        7. [`GET "/event/:id/comments"`](#494)
        8. [`POST "/event/:id/comment"`](#495)
        9. [`GET "/map/:location/event"`](#496)
        10. [`GET "/status"`](#497)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#498)
        12. [`GET "/static/*"`](#499)
    4. [`validators`](#500)
        1. [`assert-simple`](#501)
7. [`node-24.13.1`](#502)
    1. [`micro`](#503)
        1. [`url`](#504)
            1. [`end`](#505)
                1. [`/^a($)/`](#506)
                2. [`/^a$()/`](#507)
                3. [`/^a()$/`](#508)
                4. [`/^a($)$/`](#509)
                5. [`/^a$($)$/`](#510)
            2. [`wildcard`](#511)
                1. [`/^a(.*)($)/`](#512)
                2. [`/^a(.*)($)$/`](#513)
                3. [`/^a(.*$)($)/`](#514)
                4. [`/^a(.*$)()$/`](#515)
                5. [`/^a(.*$)($)$/`](#516)
                6. [`/^a(.*)()$/`](#517)
    2. [`async`](#518)
        1. [`concurrency 1`](#519)
            1. [`p-limit`](#520)
            2. [`ciorent (semaphore)`](#521)
            3. [`ciorent (mutex)`](#522)
            4. [`p-mutex`](#523)
            5. [`async-mutex`](#524)
            6. [`manual`](#525)
        2. [`concurrency 2`](#526)
            1. [`p-limit`](#527)
            2. [`ciorent (semaphore)`](#528)
            3. [`async-mutex`](#529)
            4. [`manual`](#530)
        3. [`concurrency 4`](#531)
            1. [`p-limit`](#532)
            2. [`ciorent (semaphore)`](#533)
            3. [`async-mutex`](#534)
            4. [`manual`](#535)
        4. [`concurrency 8`](#536)
            1. [`p-limit`](#537)
            2. [`ciorent (semaphore)`](#538)
            3. [`async-mutex`](#539)
            4. [`manual`](#540)
        5. [`concurrency 16`](#541)
            1. [`p-limit`](#542)
            2. [`ciorent (semaphore)`](#543)
            3. [`async-mutex`](#544)
            4. [`manual`](#545)
        6. [`concurrency 32`](#546)
            1. [`p-limit`](#547)
            2. [`ciorent (semaphore)`](#548)
            3. [`async-mutex`](#549)
            4. [`manual`](#550)
        7. [`concurrency 64`](#551)
            1. [`p-limit`](#552)
            2. [`ciorent (semaphore)`](#553)
            3. [`async-mutex`](#554)
            4. [`manual`](#555)
    3. [`decode-uri-component`](#556)
        1. [`valid`](#557)
            1. [`native`](#558)
            2. [`fast-decode-uri-component`](#559)
            3. [`deuri`](#560)
        2. [`invalid`](#561)
            1. [`native`](#562)
            2. [`fast-decode-uri-component`](#563)
            3. [`deuri`](#564)
    4. [`url-routers`](#565)
        1. [`GET "/user"`](#566)
            1. [`hono (pattern)`](#567)
            2. [`rou3`](#568)
            3. [`hono (trie)`](#569)
            4. [`rou3 (jit)`](#570)
            5. [`mapl (jit)`](#571)
            6. [`find-my-way`](#572)
            7. [`hono (regexp)`](#573)
            8. [`mapl (tree)`](#574)
            9. [`mapl (regexp)`](#575)
        2. [`GET "/user/comments"`](#576)
            1. [`hono (pattern)`](#577)
            2. [`rou3`](#578)
            3. [`hono (trie)`](#579)
            4. [`rou3 (jit)`](#580)
            5. [`mapl (jit)`](#581)
            6. [`find-my-way`](#582)
            7. [`hono (regexp)`](#583)
            8. [`mapl (tree)`](#584)
            9. [`mapl (regexp)`](#585)
        3. [`GET "/user/avatar"`](#586)
            1. [`hono (pattern)`](#587)
            2. [`rou3`](#588)
            3. [`hono (trie)`](#589)
            4. [`rou3 (jit)`](#590)
            5. [`mapl (jit)`](#591)
            6. [`find-my-way`](#592)
            7. [`hono (regexp)`](#593)
            8. [`mapl (tree)`](#594)
            9. [`mapl (regexp)`](#595)
        4. [`GET "/user/lookup/username/:username"`](#596)
            1. [`hono (pattern)`](#597)
            2. [`rou3`](#598)
            3. [`hono (trie)`](#599)
            4. [`rou3 (jit)`](#600)
            5. [`mapl (jit)`](#601)
            6. [`find-my-way`](#602)
            7. [`hono (regexp)`](#603)
            8. [`mapl (tree)`](#604)
            9. [`mapl (regexp)`](#605)
        5. [`GET "/user/lookup/email/:email"`](#606)
            1. [`hono (pattern)`](#607)
            2. [`rou3`](#608)
            3. [`hono (trie)`](#609)
            4. [`rou3 (jit)`](#610)
            5. [`mapl (jit)`](#611)
            6. [`find-my-way`](#612)
            7. [`hono (regexp)`](#613)
            8. [`mapl (tree)`](#614)
            9. [`mapl (regexp)`](#615)
        6. [`GET "/event/:id"`](#616)
            1. [`hono (pattern)`](#617)
            2. [`rou3`](#618)
            3. [`hono (trie)`](#619)
            4. [`rou3 (jit)`](#620)
            5. [`mapl (jit)`](#621)
            6. [`find-my-way`](#622)
            7. [`hono (regexp)`](#623)
            8. [`mapl (tree)`](#624)
            9. [`mapl (regexp)`](#625)
        7. [`GET "/event/:id/comments"`](#626)
            1. [`hono (pattern)`](#627)
            2. [`rou3`](#628)
            3. [`hono (trie)`](#629)
            4. [`rou3 (jit)`](#630)
            5. [`mapl (jit)`](#631)
            6. [`find-my-way`](#632)
            7. [`hono (regexp)`](#633)
            8. [`mapl (tree)`](#634)
            9. [`mapl (regexp)`](#635)
        8. [`POST "/event/:id/comment"`](#636)
            1. [`hono (pattern)`](#637)
            2. [`rou3`](#638)
            3. [`hono (trie)`](#639)
            4. [`rou3 (jit)`](#640)
            5. [`mapl (jit)`](#641)
            6. [`find-my-way`](#642)
            7. [`hono (regexp)`](#643)
            8. [`mapl (tree)`](#644)
            9. [`mapl (regexp)`](#645)
        9. [`GET "/map/:location/event"`](#646)
            1. [`hono (pattern)`](#647)
            2. [`rou3`](#648)
            3. [`hono (trie)`](#649)
            4. [`rou3 (jit)`](#650)
            5. [`mapl (jit)`](#651)
            6. [`find-my-way`](#652)
            7. [`hono (regexp)`](#653)
            8. [`mapl (tree)`](#654)
            9. [`mapl (regexp)`](#655)
        10. [`GET "/status"`](#656)
            1. [`hono (pattern)`](#657)
            2. [`rou3`](#658)
            3. [`hono (trie)`](#659)
            4. [`rou3 (jit)`](#660)
            5. [`mapl (jit)`](#661)
            6. [`find-my-way`](#662)
            7. [`hono (regexp)`](#663)
            8. [`mapl (tree)`](#664)
            9. [`mapl (regexp)`](#665)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#666)
            1. [`hono (pattern)`](#667)
            2. [`rou3`](#668)
            3. [`hono (trie)`](#669)
            4. [`rou3 (jit)`](#670)
            5. [`mapl (jit)`](#671)
            6. [`find-my-way`](#672)
            7. [`hono (regexp)`](#673)
            8. [`mapl (tree)`](#674)
            9. [`mapl (regexp)`](#675)
        12. [`GET "/static/*"`](#676)
            1. [`hono (pattern)`](#677)
            2. [`rou3`](#678)
            3. [`hono (trie)`](#679)
            4. [`rou3 (jit)`](#680)
            5. [`mapl (jit)`](#681)
            6. [`find-my-way`](#682)
            7. [`hono (regexp)`](#683)
            8. [`mapl (tree)`](#684)
            9. [`mapl (regexp)`](#685)
    5. [`validators`](#686)
        1. [`assert-simple`](#687)
            1. [`sury (jit)`](#688)
            2. [`typia (aot)`](#689)
            3. [`valibot`](#690)
            4. [`stnl (jit)`](#691)
            5. [`zod`](#692)
            6. [`zod/mini`](#693)
            7. [`typebox (aot)`](#694)
            8. [`stnl (aot)`](#695)
            9. [`typebox (jit)`](#696)
            10. [`arktype (jit)`](#697)
            11. [`effect/schema`](#698)
8. [`node-25.7.0`](#699)
    1. [`micro`](#700)
        1. [`url`](#701)
            1. [`end`](#702)
                1. [`/^a($)/`](#703)
                2. [`/^a$()/`](#704)
                3. [`/^a()$/`](#705)
                4. [`/^a($)$/`](#706)
                5. [`/^a$($)$/`](#707)
            2. [`wildcard`](#708)
                1. [`/^a(.*)($)/`](#709)
                2. [`/^a(.*)($)$/`](#710)
                3. [`/^a(.*$)($)/`](#711)
                4. [`/^a(.*$)()$/`](#712)
                5. [`/^a(.*$)($)$/`](#713)
                6. [`/^a(.*)()$/`](#714)
    2. [`async`](#715)
        1. [`concurrency 1`](#716)
            1. [`p-limit`](#717)
            2. [`ciorent (semaphore)`](#718)
            3. [`ciorent (mutex)`](#719)
            4. [`p-mutex`](#720)
            5. [`async-mutex`](#721)
            6. [`manual`](#722)
        2. [`concurrency 2`](#723)
            1. [`p-limit`](#724)
            2. [`ciorent (semaphore)`](#725)
            3. [`async-mutex`](#726)
            4. [`manual`](#727)
        3. [`concurrency 4`](#728)
            1. [`p-limit`](#729)
            2. [`ciorent (semaphore)`](#730)
            3. [`async-mutex`](#731)
            4. [`manual`](#732)
        4. [`concurrency 8`](#733)
            1. [`p-limit`](#734)
            2. [`ciorent (semaphore)`](#735)
            3. [`async-mutex`](#736)
            4. [`manual`](#737)
        5. [`concurrency 16`](#738)
            1. [`p-limit`](#739)
            2. [`ciorent (semaphore)`](#740)
            3. [`async-mutex`](#741)
            4. [`manual`](#742)
        6. [`concurrency 32`](#743)
            1. [`p-limit`](#744)
            2. [`ciorent (semaphore)`](#745)
            3. [`async-mutex`](#746)
            4. [`manual`](#747)
        7. [`concurrency 64`](#748)
            1. [`p-limit`](#749)
            2. [`ciorent (semaphore)`](#750)
            3. [`async-mutex`](#751)
            4. [`manual`](#752)
    3. [`decode-uri-component`](#753)
        1. [`valid`](#754)
            1. [`native`](#755)
            2. [`fast-decode-uri-component`](#756)
            3. [`deuri`](#757)
        2. [`invalid`](#758)
            1. [`native`](#759)
            2. [`fast-decode-uri-component`](#760)
            3. [`deuri`](#761)
    4. [`url-routers`](#762)
        1. [`GET "/user"`](#763)
            1. [`hono (pattern)`](#764)
            2. [`rou3`](#765)
            3. [`hono (trie)`](#766)
            4. [`rou3 (jit)`](#767)
            5. [`mapl (jit)`](#768)
            6. [`find-my-way`](#769)
            7. [`hono (regexp)`](#770)
            8. [`mapl (tree)`](#771)
            9. [`mapl (regexp)`](#772)
        2. [`GET "/user/comments"`](#773)
            1. [`hono (pattern)`](#774)
            2. [`rou3`](#775)
            3. [`hono (trie)`](#776)
            4. [`rou3 (jit)`](#777)
            5. [`mapl (jit)`](#778)
            6. [`find-my-way`](#779)
            7. [`hono (regexp)`](#780)
            8. [`mapl (tree)`](#781)
            9. [`mapl (regexp)`](#782)
        3. [`GET "/user/avatar"`](#783)
            1. [`hono (pattern)`](#784)
            2. [`rou3`](#785)
            3. [`hono (trie)`](#786)
            4. [`rou3 (jit)`](#787)
            5. [`mapl (jit)`](#788)
            6. [`find-my-way`](#789)
            7. [`hono (regexp)`](#790)
            8. [`mapl (tree)`](#791)
            9. [`mapl (regexp)`](#792)
        4. [`GET "/user/lookup/username/:username"`](#793)
            1. [`hono (pattern)`](#794)
            2. [`rou3`](#795)
            3. [`hono (trie)`](#796)
            4. [`rou3 (jit)`](#797)
            5. [`mapl (jit)`](#798)
            6. [`find-my-way`](#799)
            7. [`hono (regexp)`](#800)
            8. [`mapl (tree)`](#801)
            9. [`mapl (regexp)`](#802)
        5. [`GET "/user/lookup/email/:email"`](#803)
            1. [`hono (pattern)`](#804)
            2. [`rou3`](#805)
            3. [`hono (trie)`](#806)
            4. [`rou3 (jit)`](#807)
            5. [`mapl (jit)`](#808)
            6. [`find-my-way`](#809)
            7. [`hono (regexp)`](#810)
            8. [`mapl (tree)`](#811)
            9. [`mapl (regexp)`](#812)
        6. [`GET "/event/:id"`](#813)
            1. [`hono (pattern)`](#814)
            2. [`rou3`](#815)
            3. [`hono (trie)`](#816)
            4. [`rou3 (jit)`](#817)
            5. [`mapl (jit)`](#818)
            6. [`find-my-way`](#819)
            7. [`hono (regexp)`](#820)
            8. [`mapl (tree)`](#821)
            9. [`mapl (regexp)`](#822)
        7. [`GET "/event/:id/comments"`](#823)
            1. [`hono (pattern)`](#824)
            2. [`rou3`](#825)
            3. [`hono (trie)`](#826)
            4. [`rou3 (jit)`](#827)
            5. [`mapl (jit)`](#828)
            6. [`find-my-way`](#829)
            7. [`hono (regexp)`](#830)
            8. [`mapl (tree)`](#831)
            9. [`mapl (regexp)`](#832)
        8. [`POST "/event/:id/comment"`](#833)
            1. [`hono (pattern)`](#834)
            2. [`rou3`](#835)
            3. [`hono (trie)`](#836)
            4. [`rou3 (jit)`](#837)
            5. [`mapl (jit)`](#838)
            6. [`find-my-way`](#839)
            7. [`hono (regexp)`](#840)
            8. [`mapl (tree)`](#841)
            9. [`mapl (regexp)`](#842)
        9. [`GET "/map/:location/event"`](#843)
            1. [`hono (pattern)`](#844)
            2. [`rou3`](#845)
            3. [`hono (trie)`](#846)
            4. [`rou3 (jit)`](#847)
            5. [`mapl (jit)`](#848)
            6. [`find-my-way`](#849)
            7. [`hono (regexp)`](#850)
            8. [`mapl (tree)`](#851)
            9. [`mapl (regexp)`](#852)
        10. [`GET "/status"`](#853)
            1. [`hono (pattern)`](#854)
            2. [`rou3`](#855)
            3. [`hono (trie)`](#856)
            4. [`rou3 (jit)`](#857)
            5. [`mapl (jit)`](#858)
            6. [`find-my-way`](#859)
            7. [`hono (regexp)`](#860)
            8. [`mapl (tree)`](#861)
            9. [`mapl (regexp)`](#862)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#863)
            1. [`hono (pattern)`](#864)
            2. [`rou3`](#865)
            3. [`hono (trie)`](#866)
            4. [`rou3 (jit)`](#867)
            5. [`mapl (jit)`](#868)
            6. [`find-my-way`](#869)
            7. [`hono (regexp)`](#870)
            8. [`mapl (tree)`](#871)
            9. [`mapl (regexp)`](#872)
        12. [`GET "/static/*"`](#873)
            1. [`hono (pattern)`](#874)
            2. [`rou3`](#875)
            3. [`hono (trie)`](#876)
            4. [`rou3 (jit)`](#877)
            5. [`mapl (jit)`](#878)
            6. [`find-my-way`](#879)
            7. [`hono (regexp)`](#880)
            8. [`mapl (tree)`](#881)
            9. [`mapl (regexp)`](#882)
    5. [`validators`](#883)
        1. [`assert-simple`](#884)
            1. [`sury (jit)`](#885)
            2. [`typia (aot)`](#886)
            3. [`valibot`](#887)
            4. [`stnl (jit)`](#888)
            5. [`zod`](#889)
            6. [`zod/mini`](#890)
            7. [`typebox (aot)`](#891)
            8. [`stnl (aot)`](#892)
            9. [`typebox (jit)`](#893)
            10. [`arktype (jit)`](#894)
            11. [`effect/schema`](#895)
9. [`bun-1.3.10`](#896)
    1. [`micro`](#897)
        1. [`url`](#898)
            1. [`end`](#899)
                1. [`/^a($)/`](#900)
                2. [`/^a$()/`](#901)
                3. [`/^a()$/`](#902)
                4. [`/^a($)$/`](#903)
                5. [`/^a$($)$/`](#904)
            2. [`wildcard`](#905)
                1. [`/^a(.*)($)/`](#906)
                2. [`/^a(.*)($)$/`](#907)
                3. [`/^a(.*$)($)/`](#908)
                4. [`/^a(.*$)()$/`](#909)
                5. [`/^a(.*$)($)$/`](#910)
                6. [`/^a(.*)()$/`](#911)
    2. [`async`](#912)
        1. [`concurrency 1`](#913)
            1. [`p-limit`](#914)
            2. [`ciorent (semaphore)`](#915)
            3. [`ciorent (mutex)`](#916)
            4. [`p-mutex`](#917)
            5. [`async-mutex`](#918)
            6. [`manual`](#919)
        2. [`concurrency 2`](#920)
            1. [`p-limit`](#921)
            2. [`ciorent (semaphore)`](#922)
            3. [`async-mutex`](#923)
            4. [`manual`](#924)
        3. [`concurrency 4`](#925)
            1. [`p-limit`](#926)
            2. [`ciorent (semaphore)`](#927)
            3. [`async-mutex`](#928)
            4. [`manual`](#929)
        4. [`concurrency 8`](#930)
            1. [`p-limit`](#931)
            2. [`ciorent (semaphore)`](#932)
            3. [`async-mutex`](#933)
            4. [`manual`](#934)
        5. [`concurrency 16`](#935)
            1. [`p-limit`](#936)
            2. [`ciorent (semaphore)`](#937)
            3. [`async-mutex`](#938)
            4. [`manual`](#939)
        6. [`concurrency 32`](#940)
            1. [`p-limit`](#941)
            2. [`ciorent (semaphore)`](#942)
            3. [`async-mutex`](#943)
            4. [`manual`](#944)
        7. [`concurrency 64`](#945)
            1. [`p-limit`](#946)
            2. [`ciorent (semaphore)`](#947)
            3. [`async-mutex`](#948)
            4. [`manual`](#949)
    3. [`decode-uri-component`](#950)
        1. [`valid`](#951)
            1. [`native`](#952)
            2. [`fast-decode-uri-component`](#953)
            3. [`deuri`](#954)
        2. [`invalid`](#955)
            1. [`native`](#956)
            2. [`fast-decode-uri-component`](#957)
            3. [`deuri`](#958)
    4. [`url-routers`](#959)
        1. [`GET "/user"`](#960)
            1. [`hono (pattern)`](#961)
            2. [`rou3`](#962)
            3. [`hono (trie)`](#963)
            4. [`rou3 (jit)`](#964)
            5. [`mapl (jit)`](#965)
            6. [`find-my-way`](#966)
            7. [`hono (regexp)`](#967)
            8. [`mapl (tree)`](#968)
            9. [`mapl (regexp)`](#969)
        2. [`GET "/user/comments"`](#970)
            1. [`hono (pattern)`](#971)
            2. [`rou3`](#972)
            3. [`hono (trie)`](#973)
            4. [`rou3 (jit)`](#974)
            5. [`mapl (jit)`](#975)
            6. [`find-my-way`](#976)
            7. [`hono (regexp)`](#977)
            8. [`mapl (tree)`](#978)
            9. [`mapl (regexp)`](#979)
        3. [`GET "/user/avatar"`](#980)
            1. [`hono (pattern)`](#981)
            2. [`rou3`](#982)
            3. [`hono (trie)`](#983)
            4. [`rou3 (jit)`](#984)
            5. [`mapl (jit)`](#985)
            6. [`find-my-way`](#986)
            7. [`hono (regexp)`](#987)
            8. [`mapl (tree)`](#988)
            9. [`mapl (regexp)`](#989)
        4. [`GET "/user/lookup/username/:username"`](#990)
            1. [`hono (pattern)`](#991)
            2. [`rou3`](#992)
            3. [`hono (trie)`](#993)
            4. [`rou3 (jit)`](#994)
            5. [`mapl (jit)`](#995)
            6. [`find-my-way`](#996)
            7. [`hono (regexp)`](#997)
            8. [`mapl (tree)`](#998)
            9. [`mapl (regexp)`](#999)
        5. [`GET "/user/lookup/email/:email"`](#1000)
            1. [`hono (pattern)`](#1001)
            2. [`rou3`](#1002)
            3. [`hono (trie)`](#1003)
            4. [`rou3 (jit)`](#1004)
            5. [`mapl (jit)`](#1005)
            6. [`find-my-way`](#1006)
            7. [`hono (regexp)`](#1007)
            8. [`mapl (tree)`](#1008)
            9. [`mapl (regexp)`](#1009)
        6. [`GET "/event/:id"`](#1010)
            1. [`hono (pattern)`](#1011)
            2. [`rou3`](#1012)
            3. [`hono (trie)`](#1013)
            4. [`rou3 (jit)`](#1014)
            5. [`mapl (jit)`](#1015)
            6. [`find-my-way`](#1016)
            7. [`hono (regexp)`](#1017)
            8. [`mapl (tree)`](#1018)
            9. [`mapl (regexp)`](#1019)
        7. [`GET "/event/:id/comments"`](#1020)
            1. [`hono (pattern)`](#1021)
            2. [`rou3`](#1022)
            3. [`hono (trie)`](#1023)
            4. [`rou3 (jit)`](#1024)
            5. [`mapl (jit)`](#1025)
            6. [`find-my-way`](#1026)
            7. [`hono (regexp)`](#1027)
            8. [`mapl (tree)`](#1028)
            9. [`mapl (regexp)`](#1029)
        8. [`POST "/event/:id/comment"`](#1030)
            1. [`hono (pattern)`](#1031)
            2. [`rou3`](#1032)
            3. [`hono (trie)`](#1033)
            4. [`rou3 (jit)`](#1034)
            5. [`mapl (jit)`](#1035)
            6. [`find-my-way`](#1036)
            7. [`hono (regexp)`](#1037)
            8. [`mapl (tree)`](#1038)
            9. [`mapl (regexp)`](#1039)
        9. [`GET "/map/:location/event"`](#1040)
            1. [`hono (pattern)`](#1041)
            2. [`rou3`](#1042)
            3. [`hono (trie)`](#1043)
            4. [`rou3 (jit)`](#1044)
            5. [`mapl (jit)`](#1045)
            6. [`find-my-way`](#1046)
            7. [`hono (regexp)`](#1047)
            8. [`mapl (tree)`](#1048)
            9. [`mapl (regexp)`](#1049)
        10. [`GET "/status"`](#1050)
            1. [`hono (pattern)`](#1051)
            2. [`rou3`](#1052)
            3. [`hono (trie)`](#1053)
            4. [`rou3 (jit)`](#1054)
            5. [`mapl (jit)`](#1055)
            6. [`find-my-way`](#1056)
            7. [`hono (regexp)`](#1057)
            8. [`mapl (tree)`](#1058)
            9. [`mapl (regexp)`](#1059)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#1060)
            1. [`hono (pattern)`](#1061)
            2. [`rou3`](#1062)
            3. [`hono (trie)`](#1063)
            4. [`rou3 (jit)`](#1064)
            5. [`mapl (jit)`](#1065)
            6. [`find-my-way`](#1066)
            7. [`hono (regexp)`](#1067)
            8. [`mapl (tree)`](#1068)
            9. [`mapl (regexp)`](#1069)
        12. [`GET "/static/*"`](#1070)
            1. [`hono (pattern)`](#1071)
            2. [`rou3`](#1072)
            3. [`hono (trie)`](#1073)
            4. [`rou3 (jit)`](#1074)
            5. [`mapl (jit)`](#1075)
            6. [`find-my-way`](#1076)
            7. [`hono (regexp)`](#1077)
            8. [`mapl (tree)`](#1078)
            9. [`mapl (regexp)`](#1079)
    5. [`validators`](#1080)
        1. [`assert-simple`](#1081)
            1. [`sury (jit)`](#1082)
            2. [`typia (aot)`](#1083)
            3. [`valibot`](#1084)
            4. [`stnl (jit)`](#1085)
            5. [`zod`](#1086)
            6. [`zod/mini`](#1087)
            7. [`typebox (aot)`](#1088)
            8. [`stnl (aot)`](#1089)
            9. [`typebox (jit)`](#1090)
            10. [`arktype (jit)`](#1091)
            11. [`effect/schema`](#1092)
10. [`deno-2.7.1`](#1093)
    1. [`micro`](#1094)
        1. [`url`](#1095)
            1. [`end`](#1096)
                1. [`/^a($)/`](#1097)
                2. [`/^a$()/`](#1098)
                3. [`/^a()$/`](#1099)
                4. [`/^a($)$/`](#1100)
                5. [`/^a$($)$/`](#1101)
            2. [`wildcard`](#1102)
                1. [`/^a(.*)($)/`](#1103)
                2. [`/^a(.*)($)$/`](#1104)
                3. [`/^a(.*$)($)/`](#1105)
                4. [`/^a(.*$)()$/`](#1106)
                5. [`/^a(.*$)($)$/`](#1107)
                6. [`/^a(.*)()$/`](#1108)
    2. [`async`](#1109)
        1. [`concurrency 1`](#1110)
            1. [`p-limit`](#1111)
            2. [`ciorent (semaphore)`](#1112)
            3. [`ciorent (mutex)`](#1113)
            4. [`p-mutex`](#1114)
            5. [`async-mutex`](#1115)
            6. [`manual`](#1116)
        2. [`concurrency 2`](#1117)
            1. [`p-limit`](#1118)
            2. [`ciorent (semaphore)`](#1119)
            3. [`async-mutex`](#1120)
            4. [`manual`](#1121)
        3. [`concurrency 4`](#1122)
            1. [`p-limit`](#1123)
            2. [`ciorent (semaphore)`](#1124)
            3. [`async-mutex`](#1125)
            4. [`manual`](#1126)
        4. [`concurrency 8`](#1127)
            1. [`p-limit`](#1128)
            2. [`ciorent (semaphore)`](#1129)
            3. [`async-mutex`](#1130)
            4. [`manual`](#1131)
        5. [`concurrency 16`](#1132)
            1. [`p-limit`](#1133)
            2. [`ciorent (semaphore)`](#1134)
            3. [`async-mutex`](#1135)
            4. [`manual`](#1136)
        6. [`concurrency 32`](#1137)
            1. [`p-limit`](#1138)
            2. [`ciorent (semaphore)`](#1139)
            3. [`async-mutex`](#1140)
            4. [`manual`](#1141)
        7. [`concurrency 64`](#1142)
            1. [`p-limit`](#1143)
            2. [`ciorent (semaphore)`](#1144)
            3. [`async-mutex`](#1145)
            4. [`manual`](#1146)
    3. [`decode-uri-component`](#1147)
        1. [`valid`](#1148)
            1. [`native`](#1149)
            2. [`fast-decode-uri-component`](#1150)
            3. [`deuri`](#1151)
        2. [`invalid`](#1152)
            1. [`native`](#1153)
            2. [`fast-decode-uri-component`](#1154)
            3. [`deuri`](#1155)
    4. [`url-routers`](#1156)
        1. [`GET "/user"`](#1157)
            1. [`hono (pattern)`](#1158)
            2. [`rou3`](#1159)
            3. [`hono (trie)`](#1160)
            4. [`rou3 (jit)`](#1161)
            5. [`mapl (jit)`](#1162)
            6. [`find-my-way`](#1163)
            7. [`hono (regexp)`](#1164)
            8. [`mapl (tree)`](#1165)
            9. [`mapl (regexp)`](#1166)
        2. [`GET "/user/comments"`](#1167)
            1. [`hono (pattern)`](#1168)
            2. [`rou3`](#1169)
            3. [`hono (trie)`](#1170)
            4. [`rou3 (jit)`](#1171)
            5. [`mapl (jit)`](#1172)
            6. [`find-my-way`](#1173)
            7. [`hono (regexp)`](#1174)
            8. [`mapl (tree)`](#1175)
            9. [`mapl (regexp)`](#1176)
        3. [`GET "/user/avatar"`](#1177)
            1. [`hono (pattern)`](#1178)
            2. [`rou3`](#1179)
            3. [`hono (trie)`](#1180)
            4. [`rou3 (jit)`](#1181)
            5. [`mapl (jit)`](#1182)
            6. [`find-my-way`](#1183)
            7. [`hono (regexp)`](#1184)
            8. [`mapl (tree)`](#1185)
            9. [`mapl (regexp)`](#1186)
        4. [`GET "/user/lookup/username/:username"`](#1187)
            1. [`hono (pattern)`](#1188)
            2. [`rou3`](#1189)
            3. [`hono (trie)`](#1190)
            4. [`rou3 (jit)`](#1191)
            5. [`mapl (jit)`](#1192)
            6. [`find-my-way`](#1193)
            7. [`hono (regexp)`](#1194)
            8. [`mapl (tree)`](#1195)
            9. [`mapl (regexp)`](#1196)
        5. [`GET "/user/lookup/email/:email"`](#1197)
            1. [`hono (pattern)`](#1198)
            2. [`rou3`](#1199)
            3. [`hono (trie)`](#1200)
            4. [`rou3 (jit)`](#1201)
            5. [`mapl (jit)`](#1202)
            6. [`find-my-way`](#1203)
            7. [`hono (regexp)`](#1204)
            8. [`mapl (tree)`](#1205)
            9. [`mapl (regexp)`](#1206)
        6. [`GET "/event/:id"`](#1207)
            1. [`hono (pattern)`](#1208)
            2. [`rou3`](#1209)
            3. [`hono (trie)`](#1210)
            4. [`rou3 (jit)`](#1211)
            5. [`mapl (jit)`](#1212)
            6. [`find-my-way`](#1213)
            7. [`hono (regexp)`](#1214)
            8. [`mapl (tree)`](#1215)
            9. [`mapl (regexp)`](#1216)
        7. [`GET "/event/:id/comments"`](#1217)
            1. [`hono (pattern)`](#1218)
            2. [`rou3`](#1219)
            3. [`hono (trie)`](#1220)
            4. [`rou3 (jit)`](#1221)
            5. [`mapl (jit)`](#1222)
            6. [`find-my-way`](#1223)
            7. [`hono (regexp)`](#1224)
            8. [`mapl (tree)`](#1225)
            9. [`mapl (regexp)`](#1226)
        8. [`POST "/event/:id/comment"`](#1227)
            1. [`hono (pattern)`](#1228)
            2. [`rou3`](#1229)
            3. [`hono (trie)`](#1230)
            4. [`rou3 (jit)`](#1231)
            5. [`mapl (jit)`](#1232)
            6. [`find-my-way`](#1233)
            7. [`hono (regexp)`](#1234)
            8. [`mapl (tree)`](#1235)
            9. [`mapl (regexp)`](#1236)
        9. [`GET "/map/:location/event"`](#1237)
            1. [`hono (pattern)`](#1238)
            2. [`rou3`](#1239)
            3. [`hono (trie)`](#1240)
            4. [`rou3 (jit)`](#1241)
            5. [`mapl (jit)`](#1242)
            6. [`find-my-way`](#1243)
            7. [`hono (regexp)`](#1244)
            8. [`mapl (tree)`](#1245)
            9. [`mapl (regexp)`](#1246)
        10. [`GET "/status"`](#1247)
            1. [`hono (pattern)`](#1248)
            2. [`rou3`](#1249)
            3. [`hono (trie)`](#1250)
            4. [`rou3 (jit)`](#1251)
            5. [`mapl (jit)`](#1252)
            6. [`find-my-way`](#1253)
            7. [`hono (regexp)`](#1254)
            8. [`mapl (tree)`](#1255)
            9. [`mapl (regexp)`](#1256)
        11. [`GET "/very/deeply/nested/route/hello/there"`](#1257)
            1. [`hono (pattern)`](#1258)
            2. [`rou3`](#1259)
            3. [`hono (trie)`](#1260)
            4. [`rou3 (jit)`](#1261)
            5. [`mapl (jit)`](#1262)
            6. [`find-my-way`](#1263)
            7. [`hono (regexp)`](#1264)
            8. [`mapl (tree)`](#1265)
            9. [`mapl (regexp)`](#1266)
        12. [`GET "/static/*"`](#1267)
            1. [`hono (pattern)`](#1268)
            2. [`rou3`](#1269)
            3. [`hono (trie)`](#1270)
            4. [`rou3 (jit)`](#1271)
            5. [`mapl (jit)`](#1272)
            6. [`find-my-way`](#1273)
            7. [`hono (regexp)`](#1274)
            8. [`mapl (tree)`](#1275)
            9. [`mapl (regexp)`](#1276)
    5. [`validators`](#1277)
        1. [`assert-simple`](#1278)
            1. [`sury (jit)`](#1279)
            2. [`typia (aot)`](#1280)
            3. [`valibot`](#1281)
            4. [`stnl (jit)`](#1282)
            5. [`zod`](#1283)
            6. [`zod/mini`](#1284)
            7. [`typebox (aot)`](#1285)
            8. [`stnl (aot)`](#1286)
            9. [`typebox (jit)`](#1287)
            10. [`arktype (jit)`](#1288)
            11. [`effect/schema`](#1289)

<a name="0">

## node-22.22.0
<a name="1">

### micro
<a name="2">

#### url
<a name="3">

##### end
<a name="4">

###### /^a($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.75
```
<a name="5">

###### /^a$()/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.9
```
<a name="6">

###### /^a()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.38
```
<a name="7">

###### /^a($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.45
```
<a name="8">

###### /^a$($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.47
```
<a name="9">

##### wildcard
<a name="10">

###### /^a(.*)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.66
```
<a name="11">

###### /^a(.*)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.18
```
<a name="12">

###### /^a(.*$)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.45
```
<a name="13">

###### /^a(.*$)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.75
```
<a name="14">

###### /^a(.*$)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.73
```
<a name="15">

###### /^a(.*)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.36
```
<a name="16">

### async
<a name="17">

#### concurrency 1
<a name="18">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  964.77
```
<a name="19">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  447.24
```
<a name="20">

##### ciorent (mutex)
```
 █  avg (kb)

 1. ciorent
    ████████████████████████████████████████████████████████████████████████████████████████████████  345.4
```
<a name="21">

##### p-mutex
```
 █  avg (kb)

 1. p-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  616.53
```
<a name="22">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1139.67
```
<a name="23">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  336.13
```
<a name="24">

#### concurrency 2
<a name="25">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  961.4
```
<a name="26">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    ████████████████████████████████████████████████████████████████████████████████████████████████  444.61
```
<a name="27">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1092.41
```
<a name="28">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
```
<a name="29">

#### concurrency 4
<a name="30">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    ████████████████████████████████████████████████████████████████████████████████████████████████  965.47
```
<a name="31">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  443.82
```
<a name="32">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1096.34
```
<a name="33">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
```
<a name="34">

#### concurrency 8
<a name="35">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  985.02
```
<a name="36">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  442.17
```
<a name="37">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1080.79
```
<a name="38">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
```
<a name="39">

#### concurrency 16
<a name="40">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  947.24
```
<a name="41">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  439.3
```
<a name="42">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1080.89
```
<a name="43">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1355.39
```
<a name="44">

#### concurrency 32
<a name="45">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  943.29
```
<a name="46">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  431.89
```
<a name="47">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1095.94
```
<a name="48">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  792.48
```
<a name="49">

#### concurrency 64
<a name="50">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  980.71
```
<a name="51">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  418.91
```
<a name="52">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1078.9
```
<a name="53">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  513.26
```
<a name="54">

### decode-uri-component
<a name="55">

#### valid
<a name="56">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  57.29
```
<a name="57">

##### fast-decode-uri-component
```
 █  avg (kb)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  198.02
```
<a name="58">

##### deuri
```
 █  avg (kb)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  199.97
```
<a name="59">

#### invalid
<a name="60">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.56
```
<a name="61">

##### fast-decode-uri-component
```
 █  avg (b)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.21
```
<a name="62">

##### deuri
```
 █  avg (b)

 1. deuri
    ████████████████████████████████████████████████████████████████████████████████████████████████  15.23
```
<a name="63">

### url-routers
<a name="64">

#### GET "/user"
<a name="65">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  382.91
```
<a name="66">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.58
```
<a name="67">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  863.87
```
<a name="68">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.81
```
<a name="69">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.78
```
<a name="70">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    ████████████████████████████████████████████████████████████████████████████████████████████████  216.93
```
<a name="71">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.23
```
<a name="72">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.79
```
<a name="73">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.33
```
<a name="74">

#### GET "/user/comments"
<a name="75">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  382.16
```
<a name="76">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.31
```
<a name="77">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1042.77
```
<a name="78">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  34.04
```
<a name="79">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.51
```
<a name="80">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    ████████████████████████████████████████████████████████████████████████████████████████████████  237.45
```
<a name="81">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.49
```
<a name="82">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.34
```
<a name="83">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.48
```
<a name="84">

#### GET "/user/avatar"
<a name="85">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  384.72
```
<a name="86">

##### rou3
```
 █  avg (b)

 1. rou3
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.48
```
<a name="87">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1033.69
```
<a name="88">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.25
```
<a name="89">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.68
```
<a name="90">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  232.35
```
<a name="91">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.31
```
<a name="92">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.87
```
<a name="93">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.77
```
<a name="94">

#### GET "/user/lookup/username/:username"
<a name="95">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  668.48
```
<a name="96">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  997.77
```
<a name="97">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.88
```
<a name="98">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  348.89
```
<a name="99">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  137.89
```
<a name="100">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  476.37
```
<a name="101">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  394.44
```
<a name="102">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  334.2
```
<a name="103">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  328.51
```
<a name="104">

#### GET "/user/lookup/email/:email"
<a name="105">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  655.87
```
<a name="106">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  997.92
```
<a name="107">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.9
```
<a name="108">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  367.98
```
<a name="109">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  114.35
```
<a name="110">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  519.01
```
<a name="111">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  387.25
```
<a name="112">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  342.57
```
<a name="113">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  354.43
```
<a name="114">

#### GET "/event/:id"
<a name="115">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  635.2
```
<a name="116">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  836.69
```
<a name="117">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1398.42
```
<a name="118">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  258.55
```
<a name="119">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  125.35
```
<a name="120">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  452.23
```
<a name="121">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  369.26
```
<a name="122">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  278.86
```
<a name="123">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  315.92
```
<a name="124">

#### GET "/event/:id/comments"
<a name="125">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  645.74
```
<a name="126">

##### rou3
```
 █  avg (b)

 1. rou3
    ████████████████████████████████████████████████████████████████████████████████████████████████  909.05
```
<a name="127">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.7
```
<a name="128">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  299.01
```
<a name="129">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  137.22
```
<a name="130">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  508.45
```
<a name="131">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  377.27
```
<a name="132">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  317.96
```
<a name="133">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  347.7
```
<a name="134">

#### POST "/event/:id/comment"
<a name="135">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  677.72
```
<a name="136">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  918.59
```
<a name="137">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.65
```
<a name="138">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  301.85
```
<a name="139">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  122.25
```
<a name="140">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  507.35
```
<a name="141">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  318.2
```
<a name="142">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  281.57
```
<a name="143">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  289.45
```
<a name="144">

#### GET "/map/:location/event"
<a name="145">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  641.38
```
<a name="146">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  896.74
```
<a name="147">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.7
```
<a name="148">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  307.16
```
<a name="149">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  132.43
```
<a name="150">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  509.17
```
<a name="151">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  378.19
```
<a name="152">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  280.59
```
<a name="153">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  344.5
```
<a name="154">

#### GET "/status"
<a name="155">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  382.68
```
<a name="156">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.17
```
<a name="157">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  858.33
```
<a name="158">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.92
```
<a name="159">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.06
```
<a name="160">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  221.36
```
<a name="161">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.88
```
<a name="162">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.07
```
<a name="163">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.19
```
<a name="164">

#### GET "/very/deeply/nested/route/hello/there"
<a name="165">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  382.47
```
<a name="166">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.32
```
<a name="167">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.84
```
<a name="168">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.66
```
<a name="169">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.43
```
<a name="170">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  236.89
```
<a name="171">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.73
```
<a name="172">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.75
```
<a name="173">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.22
```
<a name="174">

#### GET "/static/*"
<a name="175">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  638.03
```
<a name="176">

##### rou3
```
 █  avg (b)

 1. rou3
    ████████████████████████████████████████████████████████████████████████████████████████████████  892.8
```
<a name="177">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.83
```
<a name="178">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  385.24
```
<a name="179">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  126.77
```
<a name="180">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    ████████████████████████████████████████████████████████████████████████████████████████████████  453.4
```
<a name="181">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  376.78
```
<a name="182">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  286.04
```
<a name="183">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  321.89
```
<a name="184">

### validators
<a name="185">

#### assert-simple
<a name="186">

##### sury (jit)
```
 █  avg (mb)

 1. sury
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.43
```
<a name="187">

##### typia (aot)
```
 █  avg (kb)

 1. typia
    █████████████████████████████████████████████████████████████████████████████████████████████████  282.81
```
<a name="188">

##### valibot
```
 █  avg (mb)

 1. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  11.78
```
<a name="189">

##### stnl (jit)
```
 █  avg (kb)

 1. stnl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  217.05
```
<a name="190">

##### zod
```
 █  avg (mb)

 1. zod
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.79
```
<a name="191">

##### zod/mini
```
 █  avg (mb)

 1. zod-mini
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.18
```
<a name="192">

##### typebox (aot)
```
 █  avg (kb)

 1. typebox-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  282.52
```
<a name="193">

##### stnl (aot)
```
 █  avg (kb)

 1. stnl-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.42
```
<a name="194">

##### typebox (jit)
```
 █  avg (kb)

 1. typebox-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  307.7
```
<a name="195">

##### arktype (jit)
```
 █  avg (kb)

 1. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.97
```
<a name="196">

##### effect/schema
```
 █  avg (mb)

 1. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████████  15.62
```
<a name="197">

## node-24.13.0
<a name="198">

### async
<a name="199">

#### concurrency 1
```
 █  avg (kb)

 1. manual
    ███████████████████████████████  332.95

 2. ciorent (mutex)
    ████████████████████████████████  345.67

 3. ciorent (semaphore)
    █████████████████████████████████████████  446.37

 4. p-mutex
    ████████████████████████████████████████████████████  565.77

 5. p-limit
    ██████████████████████████████████████████████████████████████████████████  803.3

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1047.93
```
<a name="200">

#### concurrency 2
```
 █  avg (mb)

 1. ciorent (semaphore)
    █████  0.44

 2. p-limit
    █████████  0.8

 3. async-mutex
    ███████████  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
```
<a name="201">

#### concurrency 4
```
 █  avg (mb)

 1. ciorent (semaphore)
    █████████  0.44

 2. p-limit
    █████████████████  0.8

 3. async-mutex
    █████████████████████  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
```
<a name="202">

#### concurrency 8
```
 █  avg (mb)

 1. ciorent (semaphore)
    ██████████████████  0.44

 2. p-limit
    ███████████████████████████████  0.8

 3. async-mutex
    ███████████████████████████████████████  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
```
<a name="203">

#### concurrency 16
```
 █  avg (kb)

 1. ciorent (semaphore)
    ████████████████████████████████  438.54

 2. p-limit
    █████████████████████████████████████████████████████████  798.54

 3. async-mutex
    ███████████████████████████████████████████████████████████████████████  999.34

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1355.15
```
<a name="204">

#### concurrency 32
```
 █  avg (kb)

 1. ciorent (semaphore)
    ██████████████████████████████████████████  431.78

 2. manual
    █████████████████████████████████████████████████████████████████████████████  793.4

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████  793.75

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1000.45
```
<a name="205">

#### concurrency 64
```
 █  avg (kb)

 1. ciorent (semaphore)
    █████████████████████████████████████████  418.57

 2. manual
    ██████████████████████████████████████████████████  513.22

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████  798.76

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  999.89
```
<a name="206">

### decode-uri-component
<a name="207">

#### valid
```
 █  avg (kb)

 1. native
    ████████████████████████████  56.69

 2. fast-decode-uri-component
    ██████████████████████████████████████████████████████████████████████████████████████████████  192.74

 3. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  198.38
```
<a name="208">

#### invalid
```
 █  avg (kb)

 1. deuri
    █  0

 2. fast-decode-uri-component
    █  0

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  37.05
```
<a name="209">

### url-routers
<a name="210">

#### GET "/user"
```
 █  avg (b)

 1. mapl (jit)
    █  0.77

 2. mapl (tree)
    █  0.86

 3. mapl (regexp)
    █  1.08

 4. hono (regexp)
    █  1.41

 5. rou3 (tree)
    █  3.1

 6. rou3 (jit)
    ████  32.68

 7. find-my-way
    ██████████████████████████  215.91

 8. hono (pattern)
    █████████████████████████████████████████████  386.33

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  826.95
```
<a name="211">

#### GET "/user/comments"
```
 █  avg (b)

 1. mapl (regexp)
    █  0.24

 2. mapl (tree)
    █  0.29

 3. mapl (jit)
    █  0.34

 4. rou3 (tree)
    █  0.61

 5. hono (regexp)
    █  1.31

 6. rou3 (jit)
    ████  33.12

 7. find-my-way
    █████████████████████████  258.61

 8. hono (pattern)
    ████████████████████████████████████████████████████████████  635.31

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1019.53
```
<a name="212">

#### GET "/user/avatar"
```
 █  avg (b)

 1. mapl (jit)
    █  0.19

 2. mapl (regexp)
    █  0.45

 3. mapl (tree)
    █  0.48

 4. rou3 (tree)
    █  1.07

 5. hono (regexp)
    █  2.25

 6. rou3 (jit)
    ████  33.89

 7. find-my-way
    ██████████████████████  233.68

 8. hono (pattern)
    ███████████████████████████████████████████  455.01

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1028.25
```
<a name="213">

#### GET "/user/lookup/username/:username"
```
 █  avg (kb)

 1. mapl (jit)
    ███████  0.11

 2. mapl (tree)
    ████████  0.12

 3. mapl (regexp)
    ████████  0.13

 4. hono (regexp)
    █████████  0.15

 5. find-my-way
    ██████████████████  0.29

 6. rou3 (jit)
    ██████████████████  0.3

 7. hono (pattern)
    █████████████████████████  0.42

 8. rou3 (tree)
    ██████████████████████████████████████████████  0.76

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.62
```
<a name="214">

#### GET "/user/lookup/email/:email"
```
 █  avg (kb)

 1. mapl (jit)
    ███████  0.11

 2. mapl (regexp)
    ████████████  0.19

 3. mapl (tree)
    ███████████████  0.25

 4. find-my-way
    ████████████████  0.27

 5. rou3 (jit)
    ███████████████████  0.31

 6. hono (regexp)
    ███████████████████  0.32

 7. hono (pattern)
    █████████████████████████████████  0.55

 8. rou3 (tree)
    ██████████████████████████████████████████  0.72

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.65
```
<a name="215">

#### GET "/event/:id"
```
 █  avg (b)

 1. mapl (jit)
    ████████  90.49

 2. hono (regexp)
    ██████████  124.13

 3. rou3 (jit)
    ██████████  128.28

 4. mapl (tree)
    ████████████  141.9

 5. mapl (regexp)
    ████████████████  197.83

 6. find-my-way
    █████████████████████  266.83

 7. hono (pattern)
    ██████████████████████████████  382.18

 8. rou3 (tree)
    ██████████████████████████████████████████████  580.2

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1235.46
```
<a name="216">

#### GET "/event/:id/comments"
```
 █  avg (b)

 1. mapl (jit)
    ███████  97.96

 2. hono (regexp)
    █████████  134.36

 3. rou3 (jit)
    ██████████  146.84

 4. mapl (regexp)
    ███████████  162

 5. mapl (tree)
    █████████████  195.6

 6. find-my-way
    ██████████████████  265.6

 7. hono (pattern)
    █████████████████████████  379.13

 8. rou3 (tree)
    ████████████████████████████████████████████  665.89

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1468.03
```
<a name="217">

#### POST "/event/:id/comment"
```
 █  avg (b)

 1. hono (regexp)
    ██████  83.7

 2. mapl (jit)
    ███████  100.46

 3. mapl (tree)
    ████████  113.35

 4. rou3 (jit)
    ██████████  141.79

 5. mapl (regexp)
    ██████████████  207.85

 6. find-my-way
    ██████████████████  264.31

 7. rou3 (tree)
    █████████████████████████████████████████  629.66

 8. hono (pattern)
    ███████████████████████████████████████████  649.68

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1484.73
```
<a name="218">

#### GET "/map/:location/event"
```
 █  avg (kb)

 1. mapl (jit)
    ███████  0.1

 2. mapl (tree)
    ████████  0.12

 3. hono (regexp)
    █████████  0.13

 4. rou3 (jit)
    █████████  0.14

 5. mapl (regexp)
    █████████████  0.2

 6. find-my-way
    ██████████████████  0.27

 7. hono (pattern)
    █████████████████████████  0.38

 8. rou3 (tree)
    ██████████████████████████████████████████  0.65

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.51
```
<a name="219">

#### GET "/status"
```
 █  avg (b)

 1. mapl (tree)
    █  0.31

 2. mapl (jit)
    █  0.56

 3. mapl (regexp)
    █  0.97

 4. rou3 (tree)
    █  1.09

 5. hono (regexp)
    █  1.22

 6. rou3 (jit)
    ████  34.35

 7. find-my-way
    ███████████████████████████  225.25

 8. hono (pattern)
    ██████████████████████████████████████████████████████████████████████  597.8

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  830.86
```
<a name="220">

#### GET "/very/deeply/nested/route/hello/there"
```
 █  avg (kb)

 1. mapl (jit)
    █  0

 2. mapl (tree)
    █  0

 3. mapl (regexp)
    █  0

 4. hono (regexp)
    █  0

 5. rou3 (tree)
    █  0

 6. rou3 (jit)
    ██  0.03

 7. find-my-way
    ██████████████  0.25

 8. hono (pattern)
    █████████████████████  0.39

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.82
```
<a name="221">

#### GET "/static/*"
```
 █  avg (b)

 1. mapl (jit)
    ███████  98.06

 2. hono (regexp)
    █████████  128.03

 3. mapl (tree)
    ███████████████████  278.05

 4. rou3 (jit)
    ███████████████████  289.99

 5. mapl (regexp)
    █████████████████████  309.46

 6. hono (pattern)
    ███████████████████████  350.09

 7. find-my-way
    █████████████████████████  375.34

 8. rou3 (tree)
    █████████████████████████████████████  554.17

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1477.61
```
<a name="222">

### validators
<a name="223">

#### assert-simple
```
 █  avg (mb)

 1. stnl (aot)
    █  0.02

 2. arktype (jit)
    █  0.05

 3. stnl (jit)
    █  0.24

 4. typia (aot)
    █  0.29

 5. typebox (aot)
    █  0.36

 6. typebox (jit)
    █  0.39

 7. sury (jit)
    ██████████  4.36

 8. zod
    ████████████████████████████████████████████  20.56

 9. effect-schema
    ██████████████████████████████████████████████████████████████████████  33.18

 10. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  45.9
```
<a name="224">

## node-25.6.1
<a name="225">

### async
<a name="226">

#### concurrency 1
```
 █  avg (kb)

 1. manual
    ███████████████████████████████  332.34

 2. ciorent (mutex)
    ████████████████████████████████  346.32

 3. ciorent (semaphore)
    █████████████████████████████████████████  445.7

 4. p-mutex
    ███████████████████████████████████████████████████  544.64

 5. p-limit
    █████████████████████████████████████████████████████████████████████████  786.92

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1045.31
```
<a name="227">

#### concurrency 2
```
 █  avg (mb)

 1. ciorent (semaphore)
    █████  0.44

 2. p-limit
    █████████  0.78

 3. async-mutex
    ███████████  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
```
<a name="228">

#### concurrency 4
```
 █  avg (mb)

 1. ciorent (semaphore)
    █████████  0.44

 2. p-limit
    ████████████████  0.78

 3. async-mutex
    █████████████████████  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
```
<a name="229">

#### concurrency 8
```
 █  avg (mb)

 1. ciorent (semaphore)
    ██████████████████  0.44

 2. p-limit
    ███████████████████████████████  0.79

 3. async-mutex
    ███████████████████████████████████████  1

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
```
<a name="230">

#### concurrency 16
```
 █  avg (kb)

 1. ciorent (semaphore)
    ████████████████████████████████  438.54

 2. p-limit
    ████████████████████████████████████████████████████████  783.44

 3. async-mutex
    ███████████████████████████████████████████████████████████████████████  1001.51

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1355.15
```
<a name="231">

#### concurrency 32
```
 █  avg (kb)

 1. ciorent (semaphore)
    ██████████████████████████████████████████  431.82

 2. p-limit
    ████████████████████████████████████████████████████████████████████████████  784.3

 3. manual
    █████████████████████████████████████████████████████████████████████████████  793.41

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1001.31
```
<a name="232">

#### concurrency 64
```
 █  avg (kb)

 1. ciorent (semaphore)
    █████████████████████████████████████████  418.57

 2. manual
    ██████████████████████████████████████████████████  513.22

 3. p-limit
    ████████████████████████████████████████████████████████████████████████████  785.6

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  999.24
```
<a name="233">

### decode-uri-component
<a name="234">

#### valid
```
 █  avg (kb)

 1. native
    ████████████████████████████  55.29

 2. fast-decode-uri-component
    ████████████████████████████████████████████████████████████████████████████████████████████████  192.71

 3. deuri
    ████████████████████████████████████████████████████████████████████████████████████████████████  194.43
```
<a name="235">

#### invalid
```
 █  avg (kb)

 1. deuri
    █  0

 2. fast-decode-uri-component
    █  0

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.16
```
<a name="236">

### url-routers
<a name="237">

#### GET "/user"
```
 █  avg (b)

 1. mapl (regexp)
    █  0.82

 2. mapl (tree)
    █  0.83

 3. mapl (jit)
    █  1.27

 4. rou3 (tree)
    █  2.31

 5. hono (regexp)
    █  3.08

 6. rou3 (jit)
    █████  33.54

 7. find-my-way
    ███████████████████████████  217.99

 8. hono (pattern)
    █████████████████████████████████████████████████████████████████████████████████  657.08

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  783.64
```
<a name="238">

#### GET "/user/comments"
```
 █  avg (b)

 1. mapl (jit)
    █  0.37

 2. hono (regexp)
    █  0.54

 3. mapl (regexp)
    █  0.73

 4. mapl (tree)
    █  0.87

 5. rou3 (tree)
    █  3.6

 6. rou3 (jit)
    ████  32.39

 7. find-my-way
    ████████████████████████████████  321.18

 8. hono (pattern)
    ███████████████████████████████████████  398.92

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  982.19
```
<a name="239">

#### GET "/user/avatar"
```
 █  avg (b)

 1. mapl (jit)
    █  0.36

 2. mapl (tree)
    █  0.58

 3. mapl (regexp)
    █  0.76

 4. rou3 (tree)
    █  0.78

 5. hono (regexp)
    █  3.47

 6. rou3 (jit)
    ████  32.91

 7. find-my-way
    ████████████████████████████████  310.89

 8. hono (pattern)
    ███████████████████████████████████████████  426.72

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  960.43
```
<a name="240">

#### GET "/user/lookup/username/:username"
```
 █  avg (kb)

 1. mapl (tree)
    ███████  0.11

 2. mapl (jit)
    ███████  0.11

 3. mapl (regexp)
    ████████  0.12

 4. hono (regexp)
    ███████████  0.18

 5. rou3 (jit)
    █████████████  0.21

 6. find-my-way
    █████████████████  0.27

 7. hono (pattern)
    ███████████████████████████  0.45

 8. rou3 (tree)
    ████████████████████████████████████████  0.67

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.62
```
<a name="241">

#### GET "/user/lookup/email/:email"
```
 █  avg (kb)

 1. mapl (tree)
    ███████  0.11

 2. mapl (jit)
    ████████  0.13

 3. mapl (regexp)
    █████████  0.15

 4. hono (regexp)
    ███████████  0.17

 5. rou3 (jit)
    ██████████████  0.22

 6. find-my-way
    ████████████████  0.25

 7. hono (pattern)
    ██████████████████████████  0.42

 8. rou3 (tree)
    ██████████████████████████████████████  0.62

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.6
```
<a name="242">

#### GET "/event/:id"
```
 █  avg (b)

 1. rou3 (jit)
    ████████  86.23

 2. mapl (jit)
    ████████  91.54

 3. mapl (tree)
    ████████  91.79

 4. mapl (regexp)
    ███████████  132.12

 5. hono (regexp)
    █████████████  152.44

 6. find-my-way
    █████████████████████  245.82

 7. hono (pattern)
    ████████████████████████████████  381.16

 8. rou3 (tree)
    ██████████████████████████████████████  458.87

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1174.66
```
<a name="243">

#### GET "/event/:id/comments"
```
 █  avg (b)

 1. mapl (tree)
    ███████  100.07

 2. mapl (jit)
    ███████  100.91

 3. mapl (regexp)
    ██████████  140.47

 4. hono (regexp)
    ███████████  149.78

 5. rou3 (jit)
    █████████████████████  304.61

 6. hono (pattern)
    ███████████████████████████  385.3

 7. find-my-way
    ████████████████████████████████  459.58

 8. rou3 (tree)
    ████████████████████████████████████  525.73

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1403.43
```
<a name="244">

#### POST "/event/:id/comment"
```
 █  avg (b)

 1. mapl (regexp)
    ███  40.21

 2. mapl (jit)
    ████████  104.7

 3. hono (regexp)
    ████████  105.75

 4. rou3 (jit)
    █████████  126.86

 5. mapl (tree)
    ████████████████████  283.29

 6. find-my-way
    ████████████████████████████████  459.36

 7. rou3 (tree)
    ████████████████████████████████████  527.12

 8. hono (pattern)
    ██████████████████████████████████████████████  664.77

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1413.41
```
<a name="245">

#### GET "/map/:location/event"
```
 █  avg (b)

 1. mapl (jit)
    ███████  99.11

 2. mapl (tree)
    ███████  99.41

 3. mapl (regexp)
    ██████████  142.44

 4. hono (regexp)
    ████████████  167.54

 5. rou3 (jit)
    █████████████████████  303.73

 6. hono (pattern)
    ███████████████████████████  388.65

 7. find-my-way
    ███████████████████████████████  447.53

 8. rou3 (tree)
    ██████████████████████████████████████  551.34

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1429.9
```
<a name="246">

#### GET "/status"
```
 █  avg (b)

 1. mapl (jit)
    █  0.2

 2. mapl (tree)
    █  0.46

 3. mapl (regexp)
    █  0.46

 4. hono (regexp)
    █  2.55

 5. rou3 (tree)
    █  2.57

 6. rou3 (jit)
    █████  33.15

 7. find-my-way
    ███████████████████████████████████  276.78

 8. hono (pattern)
    ██████████████████████████████████████████████████  398.46

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  777.67
```
<a name="247">

#### GET "/very/deeply/nested/route/hello/there"
```
 █  avg (kb)

 1. mapl (jit)
    █  0

 2. rou3 (tree)
    █  0

 3. mapl (tree)
    █  0

 4. mapl (regexp)
    █  0

 5. hono (regexp)
    █  0

 6. rou3 (jit)
    ██  0.03

 7. find-my-way
    ███████████████████  0.34

 8. hono (pattern)
    ████████████████████████████  0.49

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.73
```
<a name="248">

#### GET "/static/*"
```
 █  avg (b)

 1. hono (regexp)
    ███████  96.1

 2. mapl (jit)
    ████████  115.19

 3. find-my-way
    ██████████████████  256.94

 4. mapl (tree)
    ██████████████████  262.76

 5. mapl (regexp)
    ████████████████████  284.13

 6. hono (pattern)
    ████████████████████████  340.07

 7. rou3 (jit)
    ███████████████████████████  384.15

 8. rou3 (tree)
    █████████████████████████████████  478.21

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1414.22
```
<a name="249">

### validators
<a name="250">

#### assert-simple
```
 █  avg (mb)

 1. arktype (jit)
    █  0.03

 2. stnl (aot)
    █  0.03

 3. stnl (jit)
    █  0.24

 4. typia (aot)
    █  0.29

 5. typebox (jit)
    ██  0.48

 6. typebox (aot)
    ██  0.54

 7. sury (jit)
    ██████████  4.36

 8. zod
    █████████████████████████████████████████████  21.3

 9. effect-schema
    ███████████████████████████████████████████████████████████████████████████████████  39.37

 10. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  45.99
```
<a name="251">

## bun-1.3.9
<a name="252">

### async
<a name="253">

#### concurrency 1
```
 █  avg (kb)

 1. manual
    ███████████  0.77

 2. ciorent (mutex)
    ███████████████████  1.36

 3. p-mutex
    ████████████████████  1.43

 4. ciorent (semaphore)
    ████████████████████████████████████████████  3.16

 5. p-limit
    ████████████████████████████████████████████████  3.44

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.94
```
<a name="254">

#### concurrency 2
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████  1.27

 2. p-limit
    ███████████████████████████████████████████████████  1.43

 3. ciorent (semaphore)
    ██████████████████████████████████████████████████████████████████  1.85

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.73
```
<a name="255">

#### concurrency 4
```
 █  avg (kb)

 1. manual
    █  0

 2. ciorent (semaphore)
    ████████████████████████████████████████████████████████████████████████  1.56

 3. p-limit
    ████████████████████████████████████████████████████████████████████████████  1.65

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.09
```
<a name="256">

#### concurrency 8
```
 █  avg (kb)

 1. ciorent (semaphore)
    █  0

 2. p-limit
    ██████████████████████████  0.46

 3. manual
    █████████████████████████████████████████████████  0.87

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.71
```
<a name="257">

#### concurrency 16
```
 █  avg (kb)

 1. manual
    ██████████████  0.23

 2. p-limit
    ████████████████████████████████████████████████  0.8

 3. async-mutex
    ██████████████████████████████████████████████████████████████████████  1.18

 4. ciorent (semaphore)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.62
```
<a name="258">

#### concurrency 32
```
 █  avg (kb)

 1. p-limit
    ██████████████████████  0.34

 2. ciorent (semaphore)
    ██████████████████████████  0.4

 3. manual
    ██████████████████████████  0.41

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.53
```
<a name="259">

#### concurrency 64
```
 █  avg (kb)

 1. ciorent (semaphore)
    █  0

 2. p-limit
    █  0

 3. manual
    ██████  0.09

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.54
```
<a name="260">

### decode-uri-component
<a name="261">

#### valid
```
 █  avg (kb)

 1. native
    █  0

 2. deuri
    ███████████████████  0.42

 3. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.13
```
<a name="262">

#### invalid
```
 █  avg (b)

 1. deuri
    ████  2.96

 2. fast-decode-uri-component
    █████████████████████████████████████████████████████████████  54.33

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  86.52
```
<a name="263">

### url-routers
<a name="264">

#### GET "/user"
```
 █  avg (b)

 1. mapl (tree)
    █  0

 2. mapl (regexp)
    █  0

 3. rou3 (tree)
    ██  0.05

 4. hono (regexp)
    ████  0.14

 5. rou3 (jit)
    ████  0.16

 6. mapl (jit)
    █████  0.17

 7. hono (pattern)
    ████████████████████████████████████████████████████████████████  2.61

 8. hono (trie)
    ██████████████████████████████████████████████████████████████████████████████████████  3.48

 9. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.93
```
<a name="265">

#### GET "/user/comments"
```
 █  avg (b)

 1. hono (regexp)
    █  0

 2. mapl (jit)
    █  0

 3. mapl (tree)
    ██  0.05

 4. mapl (regexp)
    ██  0.07

 5. rou3 (tree)
    █████  0.16

 6. rou3 (jit)
    █████  0.17

 7. hono (pattern)
    ██████████████████████████████████  1.27

 8. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  3.64

 9. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.66
```
<a name="266">

#### GET "/user/avatar"
```
 █  avg (b)

 1. rou3 (tree)
    █  0

 2. hono (regexp)
    █  0

 3. mapl (jit)
    █  0

 4. mapl (regexp)
    █  0

 5. mapl (tree)
    ██  0.02

 6. rou3 (jit)
    ██████████████████████  0.39

 7. hono (pattern)
    ██████████████████████████████████████████████████  0.89

 8. find-my-way
    ██████████████████████████████████████████████████████████████████████████████████████  1.52

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.71
```
<a name="267">

#### GET "/user/lookup/username/:username"
```
 █  avg (b)

 1. mapl (jit)
    ██  0.23

 2. mapl (regexp)
    ███████████████████  3.92

 3. hono (regexp)
    ███████████████████████████  5.61

 4. mapl (tree)
    █████████████████████████████  5.9

 5. find-my-way
    ████████████████████████████████  6.67

 6. rou3 (jit)
    █████████████████████████████████  6.71

 7. hono (pattern)
    ████████████████████████████████████████  8.22

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████████████████████  19.22

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  20.08
```
<a name="268">

#### GET "/user/lookup/email/:email"
```
 █  avg (b)

 1. mapl (jit)
    ██████  1.76

 2. mapl (tree)
    ███████████████  4.65

 3. hono (pattern)
    ████████████████  4.76

 4. mapl (regexp)
    ████████████████████  6.01

 5. rou3 (jit)
    ███████████████████████  7.18

 6. find-my-way
    ████████████████████████████  8.72

 7. hono (regexp)
    ██████████████████████████████  9.19

 8. rou3 (tree)
    ████████████████████████████████████████  12.4

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  30.26
```
<a name="269">

#### GET "/event/:id"
```
 █  avg (b)

 1. mapl (jit)
    █  0.06

 2. mapl (tree)
    ██████████  0.9

 3. mapl (regexp)
    █████████████████████████████  2.7

 4. find-my-way
    ██████████████████████████████████████████████  4.35

 5. hono (regexp)
    ██████████████████████████████████████████████████  4.73

 6. rou3 (tree)
    ███████████████████████████████████████████████████████████████  5.9

 7. rou3 (jit)
    █████████████████████████████████████████████████████████████████████████████  7.25

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████  8

 9. hono (pattern)
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.1
```
<a name="270">

#### GET "/event/:id/comments"
```
 █  avg (b)

 1. mapl (jit)
    █  0

 2. mapl (tree)
    █  0.82

 3. hono (regexp)
    ████  3.1

 4. mapl (regexp)
    ████  3.31

 5. hono (pattern)
    ██████  5.05

 6. find-my-way
    ███████  5.86

 7. rou3 (jit)
    ███████  6.06

 8. rou3 (tree)
    ████████████████  14.57

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  92.11
```
<a name="271">

#### POST "/event/:id/comment"
```
 █  avg (b)

 1. mapl (jit)
    █  0

 2. mapl (tree)
    █████████  0.88

 3. hono (pattern)
    █████████  0.88

 4. mapl (regexp)
    ███████████████████  1.88

 5. hono (regexp)
    ████████████████████████████  2.89

 6. rou3 (jit)
    █████████████████████████████████████████  4.2

 7. find-my-way
    ███████████████████████████████████████████  4.46

 8. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████  9.24

 9. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████████████████████████  10
```
<a name="272">

#### GET "/map/:location/event"
```
 █  avg (b)

 1. mapl (jit)
    █  0

 2. hono (pattern)
    █  0.1

 3. mapl (tree)
    ██████████  1.06

 4. mapl (regexp)
    ██████████████████████████  2.88

 5. hono (regexp)
    ████████████████████████████████  3.59

 6. rou3 (jit)
    █████████████████████████████████  3.67

 7. rou3 (tree)
    ██████████████████████████████████████████  4.73

 8. find-my-way
    ██████████████████████████████████████████████████████████████  7.03

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  10.94
```
<a name="273">

#### GET "/status"
```
 █  avg (b)

 1. mapl (jit)
    ██  0.02

 2. rou3 (jit)
    ███  0.05

 3. hono (pattern)
    ████  0.06

 4. mapl (tree)
    ████  0.07

 5. mapl (regexp)
    ██████  0.1

 6. hono (regexp)
    ███████████  0.19

 7. find-my-way
    ████████████████████████████████████████████████████████████████████████  1.35

 8. rou3 (tree)
    █████████████████████████████████████████████████████████████████████████████████████  1.61

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.82
```
<a name="274">

#### GET "/very/deeply/nested/route/hello/there"
```
 █  avg (b)

 1. mapl (jit)
    █  0

 2. hono (pattern)
    █  0.06

 3. mapl (tree)
    █  0.1

 4. hono (regexp)
    █  0.11

 5. mapl (regexp)
    █  0.15

 6. rou3 (jit)
    ██  0.2

 7. rou3 (tree)
    ████████  1.49

 8. find-my-way
    ███████████████████████████  5.16

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  19.01
```
<a name="275">

#### GET "/static/*"
```
 █  avg (b)

 1. mapl (jit)
    █  0.13

 2. hono (pattern)
    █  0.44

 3. mapl (tree)
    ██  1.56

 4. mapl (regexp)
    ██████  5.39

 5. find-my-way
    ████████  7.57

 6. hono (regexp)
    ████████  7.94

 7. rou3 (jit)
    █████████  8.72

 8. rou3 (tree)
    ███████████████████  18.29

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  95.8
```
<a name="276">

### validators
<a name="277">

#### assert-simple
```
 █  avg (kb)

 1. stnl (aot)
    ██  15.63

 2. stnl (jit)
    ██  17.4

 3. arktype (jit)
    ██  21.14

 4. typia (aot)
    ████████████  161.11

 5. valibot
    ███████████████  193.76

 6. typebox (aot)
    ███████████████  203.45

 7. typebox (jit)
    ███████████████  205.77

 8. sury (jit)
    ███████████████████████████  366.29

 9. zod
    ████████████████████████████  375.14

 10. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████████  1318.91
```
<a name="278">

## deno-2.5.7
<a name="279">

### micro
<a name="280">

#### url
<a name="281">

##### end
<a name="282">

###### /^a($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.29
```
<a name="283">

###### /^a$()/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  561
```
<a name="284">

###### /^a()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  561.47
```
<a name="285">

###### /^a($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.46
```
<a name="286">

###### /^a$($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.78
```
<a name="287">

##### wildcard
<a name="288">

###### /^a(.*)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.02
```
<a name="289">

###### /^a(.*)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.84
```
<a name="290">

###### /^a(.*$)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.28
```
<a name="291">

###### /^a(.*$)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.36
```
<a name="292">

###### /^a(.*$)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.99
```
<a name="293">

###### /^a(.*)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.74
```
<a name="294">

### async
<a name="295">

#### concurrency 1
<a name="296">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  783.91
```
<a name="297">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  447.17
```
<a name="298">

##### ciorent (mutex)
```
 █  avg (kb)

 1. ciorent
    ████████████████████████████████████████████████████████████████████████████████████████████████  346.13
```
<a name="299">

##### p-mutex
```
 █  avg (kb)

 1. p-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  547.39
```
<a name="300">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1055.12
```
<a name="301">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  332.42
```
<a name="302">

#### concurrency 2
<a name="303">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  780.4
```
<a name="304">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  445.47
```
<a name="305">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1001.94
```
<a name="306">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
```
<a name="307">

#### concurrency 4
<a name="308">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  789.73
```
<a name="309">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  443.58
```
<a name="310">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1004.23
```
<a name="311">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
```
<a name="312">

#### concurrency 8
<a name="313">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  777.93
```
<a name="314">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  441.82
```
<a name="315">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1001.63
```
<a name="316">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
```
<a name="317">

#### concurrency 16
<a name="318">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  787.24
```
<a name="319">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  438.41
```
<a name="320">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1001.41
```
<a name="321">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1355.51
```
<a name="322">

#### concurrency 32
<a name="323">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  783.93
```
<a name="324">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  431.78
```
<a name="325">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1000.59
```
<a name="326">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  793.41
```
<a name="327">

#### concurrency 64
<a name="328">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  785.49
```
<a name="329">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  418.57
```
<a name="330">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1002.19
```
<a name="331">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  513.22
```
<a name="332">

### decode-uri-component
<a name="333">

#### valid
<a name="334">

##### native
```
 █  avg (kb)

 1. native
    ████████████████████████████████████████████████████████████████████████████████████████████████  57.11
```
<a name="335">

##### fast-decode-uri-component
```
 █  avg (kb)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  199.96
```
<a name="336">

##### deuri
```
 █  avg (kb)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  201.03
```
<a name="337">

#### invalid
<a name="338">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  49.35
```
<a name="339">

##### fast-decode-uri-component
```
 █  avg (b)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.41
```
<a name="340">

##### deuri
```
 █  avg (b)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.18
```
<a name="341">

### url-routers
<a name="342">

#### GET "/user"
<a name="343">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  582.51
```
<a name="344">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.96
```
<a name="345">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  785.69
```
<a name="346">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  35.8
```
<a name="347">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.46
```
<a name="348">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  222.22
```
<a name="349">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  13.1
```
<a name="350">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.67
```
<a name="351">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.53
```
<a name="352">

#### GET "/user/comments"
<a name="353">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  449.25
```
<a name="354">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.49
```
<a name="355">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  976
```
<a name="356">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  34.31
```
<a name="357">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.13
```
<a name="358">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  223.06
```
<a name="359">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  5
```
<a name="360">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.21
```
<a name="361">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.48
```
<a name="362">

#### GET "/user/avatar"
<a name="363">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  426.94
```
<a name="364">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.02
```
<a name="365">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  974.7
```
<a name="366">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.03
```
<a name="367">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.66
```
<a name="368">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  234.29
```
<a name="369">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.42
```
<a name="370">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.94
```
<a name="371">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.59
```
<a name="372">

#### GET "/user/lookup/username/:username"
<a name="373">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  460.93
```
<a name="374">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  853.91
```
<a name="375">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.61
```
<a name="376">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  148.83
```
<a name="377">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  125.68
```
<a name="378">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    ████████████████████████████████████████████████████████████████████████████████████████████████  255.94
```
<a name="379">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  303.72
```
<a name="380">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  80.14
```
<a name="381">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  101.63
```
<a name="382">

#### GET "/user/lookup/email/:email"
<a name="383">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  593.5
```
<a name="384">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  821.14
```
<a name="385">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.59
```
<a name="386">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  152.8
```
<a name="387">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  130.94
```
<a name="388">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  234.37
```
<a name="389">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  176.85
```
<a name="390">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  84.43
```
<a name="391">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  130.5
```
<a name="392">

#### GET "/event/:id"
<a name="393">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  423.49
```
<a name="394">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  647.08
```
<a name="395">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1141.95
```
<a name="396">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  304.14
```
<a name="397">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  101.03
```
<a name="398">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  225.58
```
<a name="399">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  226.16
```
<a name="400">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  63.97
```
<a name="401">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  107.93
```
<a name="402">

#### GET "/event/:id/comments"
<a name="403">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  297.73
```
<a name="404">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  601.71
```
<a name="405">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1379.42
```
<a name="406">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  296.91
```
<a name="407">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  137.69
```
<a name="408">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  238.08
```
<a name="409">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  173.97
```
<a name="410">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  76.84
```
<a name="411">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  327.99
```
<a name="412">

#### POST "/event/:id/comment"
<a name="413">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  657.89
```
<a name="414">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  601.71
```
<a name="415">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    ████████████████████████████████████████████████████████████████████████████████████████████████  1394.94
```
<a name="416">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  307.42
```
<a name="417">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  119.99
```
<a name="418">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  458.68
```
<a name="419">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  289.15
```
<a name="420">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  79.36
```
<a name="421">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  226.91
```
<a name="422">

#### GET "/map/:location/event"
<a name="423">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  295.36
```
<a name="424">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  625.36
```
<a name="425">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1413.75
```
<a name="426">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  234.49
```
<a name="427">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  101.14
```
<a name="428">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    ████████████████████████████████████████████████████████████████████████████████████████████████  224.19
```
<a name="429">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  81.8
```
<a name="430">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  286.4
```
<a name="431">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  318.99
```
<a name="432">

#### GET "/status"
<a name="433">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  598.62
```
<a name="434">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.89
```
<a name="435">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    ████████████████████████████████████████████████████████████████████████████████████████████████  787.01
```
<a name="436">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  35.4
```
<a name="437">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.55
```
<a name="438">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  223.5
```
<a name="439">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.69
```
<a name="440">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.04
```
<a name="441">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.93
```
<a name="442">

#### GET "/very/deeply/nested/route/hello/there"
<a name="443">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  501.94
```
<a name="444">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.38
```
<a name="445">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.78
```
<a name="446">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  35.42
```
<a name="447">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.05
```
<a name="448">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  263.45
```
<a name="449">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.45
```
<a name="450">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.31
```
<a name="451">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.1
```
<a name="452">

#### GET "/static/*"
<a name="453">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  391.69
```
<a name="454">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  669.07
```
<a name="455">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1386.61
```
<a name="456">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  170.91
```
<a name="457">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  99.61
```
<a name="458">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  212.76
```
<a name="459">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  122.57
```
<a name="460">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  279.16
```
<a name="461">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  293.8
```
<a name="462">

### validators
<a name="463">

#### assert-simple
<a name="464">

##### sury (jit)
```
 █  avg (mb)

 1. sury
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.27
```
<a name="465">

##### typia (aot)
```
 █  avg (kb)

 1. typia
    █████████████████████████████████████████████████████████████████████████████████████████████████  313.18
```
<a name="466">

##### valibot
```
 █  avg (mb)

 1. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  45.6
```
<a name="467">

##### stnl (jit)
```
 █  avg (kb)

 1. stnl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  242.04
```
<a name="468">

##### zod
```
 █  avg (mb)

 1. zod
    █████████████████████████████████████████████████████████████████████████████████████████████████  21.62
```
<a name="469">

##### zod/mini
```
 █  avg (mb)

 1. zod-mini
    █████████████████████████████████████████████████████████████████████████████████████████████████  21.59
```
<a name="470">

##### typebox (aot)
```
 █  avg (kb)

 1. typebox-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  466.18
```
<a name="471">

##### stnl (aot)
```
 █  avg (kb)

 1. stnl-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  39.16
```
<a name="472">

##### typebox (jit)
```
 █  avg (kb)

 1. typebox-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  485.15
```
<a name="473">

##### arktype (jit)
```
 █  avg (kb)

 1. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████████  26.02
```
<a name="474">

##### effect/schema
```
 █  avg (mb)

 1. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████████  29.86
```
<a name="475">

## deno-2.6.10
<a name="476">

### async
<a name="477">

#### concurrency 1
```
 █  avg (kb)

 1. manual
    ███████████████████████████████  336.32

 2. ciorent (mutex)
    █████████████████████████████████  356.22

 3. ciorent (semaphore)
    ██████████████████████████████████████  408.43

 4. p-mutex
    ███████████████████████████████████████████████  507.59

 5. p-limit
    ██████████████████████████████████████████████████████████████████████████  804.25

 6. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1055.76
```
<a name="478">

#### concurrency 2
```
 █  avg (mb)

 1. ciorent (semaphore)
    █████████████████  0.41

 2. p-limit
    ████████████████████████████████  0.8

 3. async-mutex
    ████████████████████████████████████████  1.01

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.44
```
<a name="479">

#### concurrency 4
```
 █  avg (kb)

 1. ciorent (semaphore)
    █████████████████████████████  408.07

 2. p-limit
    ████████████████████████████████████████████████████████  794.49

 3. async-mutex
    ███████████████████████████████████████████████████████████████████████  1008.68

 4. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1364.26
```
<a name="480">

#### concurrency 8
```
 █  avg (kb)

 1. ciorent (semaphore)
    ███████████████████████████████████████  406.85

 2. p-limit
    █████████████████████████████████████████████████████████████████████████████  807.07

 3. manual
    ███████████████████████████████████████████████████████████████████████████████  824.35

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1008.68
```
<a name="481">

#### concurrency 16
```
 █  avg (kb)

 1. ciorent (semaphore)
    ███████████████████████████████████████  404.8

 2. manual
    █████████████████████████████████████████████████████  554.22

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████  804

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1006.35
```
<a name="482">

#### concurrency 32
```
 █  avg (kb)

 1. ciorent (semaphore)
    ███████████████████████████████████████  400.51

 2. manual
    █████████████████████████████████████████  419.54

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████  798.81

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1005.64
```
<a name="483">

#### concurrency 64
```
 █  avg (kb)

 1. manual
    ██████████████████████████████████  352.45

 2. ciorent (semaphore)
    ██████████████████████████████████████  392.08

 3. p-limit
    █████████████████████████████████████████████████████████████████████████████  803.48

 4. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1005.73
```
<a name="484">

### decode-uri-component
<a name="485">

#### valid
```
 █  avg (kb)

 1. native
    ████████████████████████████  55.38

 2. fast-decode-uri-component
    ███████████████████████████████████████████████████████████████████████████████████████████████  192.57

 3. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  195.49
```
<a name="486">

#### invalid
```
 █  avg (kb)

 1. deuri
    █  0

 2. fast-decode-uri-component
    █  0

 3. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  49.01
```
<a name="487">

### url-routers
<a name="488">

#### GET "/user"
```
 █  avg (b)

 1. mapl (jit)
    █  2.36

 2. mapl (tree)
    █  3.74

 3. mapl (regexp)
    █  3.78

 4. hono (regexp)
    █  5.78

 5. rou3 (tree)
    █  7.63

 6. rou3 (jit)
    █████  37.18

 7. find-my-way
    ████████████████████████████  217.4

 8. hono (pattern)
    ██████████████████████████████████████████████████████████  446.35

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  745.82
```
<a name="489">

#### GET "/user/comments"
```
 █  avg (b)

 1. mapl (regexp)
    █  2.26

 2. mapl (jit)
    █  3.01

 3. mapl (tree)
    █  3.58

 4. hono (regexp)
    █  5.6

 5. rou3 (tree)
    █  6.28

 6. rou3 (jit)
    ████  35.51

 7. find-my-way
    ███████████████████████████  265.34

 8. hono (pattern)
    ████████████████████████████████████████████  425.84

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  946.25
```
<a name="490">

#### GET "/user/avatar"
```
 █  avg (b)

 1. mapl (jit)
    █  3.35

 2. mapl (tree)
    █  3.51

 3. mapl (regexp)
    █  4.79

 4. hono (regexp)
    █  5.33

 5. rou3 (tree)
    ██  15.17

 6. rou3 (jit)
    █████  45.79

 7. find-my-way
    ███████████████████████  221.95

 8. hono (pattern)
    ███████████████████████████████████████████████  455.53

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  949.52
```
<a name="491">

#### GET "/user/lookup/username/:username"
```
 █  avg (kb)

 1. mapl (tree)
    ██████  0.09

 2. mapl (regexp)
    ██████  0.09

 3. mapl (jit)
    █████████  0.14

 4. hono (regexp)
    █████████  0.14

 5. rou3 (jit)
    ██████████  0.16

 6. find-my-way
    ███████████████  0.25

 7. hono (pattern)
    █████████████████████████  0.41

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████  0.99

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.62
```
<a name="492">

#### GET "/user/lookup/email/:email"
```
 █  avg (kb)

 1. mapl (tree)
    ████  0.09

 2. mapl (jit)
    ████  0.09

 3. hono (regexp)
    ██████  0.13

 4. rou3 (jit)
    ████████  0.17

 5. find-my-way
    ███████████  0.25

 6. mapl (regexp)
    ███████████████  0.35

 7. hono (pattern)
    █████████████████  0.4

 8. rou3 (tree)
    █████████████████████████████████████████  0.97

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.29
```
<a name="493">

#### GET "/event/:id"
```
 █  avg (b)

 1. rou3 (jit)
    ███████  77.98

 2. mapl (tree)
    ███████  80.15

 3. hono (regexp)
    ███████████  127.87

 4. mapl (jit)
    ███████████  135.44

 5. find-my-way
    ███████████████████  224.9

 6. mapl (regexp)
    ███████████████████████████  329.65

 7. hono (pattern)
    ██████████████████████████████  359.81

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████  784.66

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1184.74
```
<a name="494">

#### GET "/event/:id/comments"
```
 █  avg (b)

 1. mapl (tree)
    ██████  78.49

 2. rou3 (jit)
    ██████  83.11

 3. mapl (jit)
    ███████  96.21

 4. hono (regexp)
    ████████  110.62

 5. find-my-way
    ████████████████  228.19

 6. mapl (regexp)
    ████████████████████████  342.97

 7. hono (pattern)
    █████████████████████████  357.12

 8. rou3 (tree)
    ███████████████████████████████████████████████████████████  870.47

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  1424.77
```
<a name="495">

#### POST "/event/:id/comment"
```
 █  avg (b)

 1. hono (regexp)
    █████  73.9

 2. mapl (tree)
    ██████  77.32

 3. rou3 (jit)
    ██████  82.08

 4. mapl (jit)
    ██████████  148.39

 5. find-my-way
    ███████████████  221.08

 6. mapl (regexp)
    ████████████████  237.54

 7. hono (pattern)
    ████████████████████████████████████████████  655.6

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████  862.79

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1433.43
```
<a name="496">

#### GET "/map/:location/event"
```
 █  avg (b)

 1. mapl (tree)
    █████  74.92

 2. rou3 (jit)
    ██████  81.99

 3. hono (regexp)
    █████████  130.83

 4. mapl (jit)
    ██████████  145.97

 5. find-my-way
    ███████████████  225.86

 6. mapl (regexp)
    ███████████████████████  346.05

 7. hono (pattern)
    ████████████████████████  354.61

 8. rou3 (tree)
    ██████████████████████████████████████████████████████████  867.04

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  1449.09
```
<a name="497">

#### GET "/status"
```
 █  avg (b)

 1. mapl (jit)
    █  2.8

 2. mapl (regexp)
    █  3.06

 3. mapl (tree)
    █  3.51

 4. hono (regexp)
    █  5.14

 5. rou3 (tree)
    █  8.11

 6. rou3 (jit)
    ██████  45.96

 7. find-my-way
    ███████████████████████████  214.86

 8. hono (pattern)
    █████████████████████████████████████████  333.97

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  788.2
```
<a name="498">

#### GET "/very/deeply/nested/route/hello/there"
```
 █  avg (kb)

 1. mapl (jit)
    █  0

 2. mapl (regexp)
    █  0

 3. mapl (tree)
    █  0

 4. rou3 (tree)
    █  0.01

 5. hono (regexp)
    █  0.01

 6. rou3 (jit)
    ███  0.04

 7. find-my-way
    █████████████  0.22

 8. hono (pattern)
    ███████████████████  0.33

 9. hono (trie)
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.73
```
<a name="499">

#### GET "/static/*"
```
 █  avg (kb)

 1. hono (regexp)
    ████  0.09

 2. mapl (jit)
    █████  0.12

 3. find-my-way
    █████████  0.22

 4. mapl (tree)
    █████████  0.23

 5. rou3 (jit)
    ███████████  0.29

 6. mapl (regexp)
    █████████████  0.34

 7. hono (pattern)
    █████████████████████████  0.65

 8. rou3 (tree)
    ████████████████████████████████████████████████████████████████████████████████████████  2.34

 9. hono (trie)
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.58
```
<a name="500">

### validators
<a name="501">

#### assert-simple
```
 █  avg (mb)

 1. stnl (aot)
    █  0.02

 2. arktype (jit)
    █  0.02

 3. stnl (jit)
    █  0.22

 4. typia (aot)
    ██  0.3

 5. typebox (aot)
    ███  0.49

 6. typebox (jit)
    ███  0.52

 7. sury (jit)
    ██████████████████  4.36

 8. effect-schema
    █████████████████████████  5.83

 9. valibot
    ██████████████████████████████████████████████████████  12.92

 10. zod
    █████████████████████████████████████████████████████████████████████████████████████████████████  23.27
```
<a name="502">

## node-24.13.1
<a name="503">

### micro
<a name="504">

#### url
<a name="505">

##### end
<a name="506">

###### /^a($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.96
```
<a name="507">

###### /^a$()/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.81
```
<a name="508">

###### /^a()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.87
```
<a name="509">

###### /^a($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.86
```
<a name="510">

###### /^a$($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.07
```
<a name="511">

##### wildcard
<a name="512">

###### /^a(.*)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.89
```
<a name="513">

###### /^a(.*)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.77
```
<a name="514">

###### /^a(.*$)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.7
```
<a name="515">

###### /^a(.*$)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  561.83
```
<a name="516">

###### /^a(.*$)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.1
```
<a name="517">

###### /^a(.*)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.33
```
<a name="518">

### async
<a name="519">

#### concurrency 1
<a name="520">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  877.45
```
<a name="521">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  446.32
```
<a name="522">

##### ciorent (mutex)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  345.33
```
<a name="523">

##### p-mutex
```
 █  avg (kb)

 1. p-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  572.27
```
<a name="524">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1037.42
```
<a name="525">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  333.59
```
<a name="526">

#### concurrency 2
<a name="527">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  891.12
```
<a name="528">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  444.39
```
<a name="529">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1001
```
<a name="530">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
```
<a name="531">

#### concurrency 4
<a name="532">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  803.4
```
<a name="533">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  443.53
```
<a name="534">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1001.81
```
<a name="535">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
```
<a name="536">

#### concurrency 8
<a name="537">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    ████████████████████████████████████████████████████████████████████████████████████████████████  796.3
```
<a name="538">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  441.77
```
<a name="539">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1002.56
```
<a name="540">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
```
<a name="541">

#### concurrency 16
<a name="542">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  801.44
```
<a name="543">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  438.54
```
<a name="544">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1003.9
```
<a name="545">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1355.14
```
<a name="546">

#### concurrency 32
<a name="547">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  800.82
```
<a name="548">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  431.78
```
<a name="549">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1004.35
```
<a name="550">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  793.38
```
<a name="551">

#### concurrency 64
<a name="552">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  804.78
```
<a name="553">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  418.57
```
<a name="554">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  997.95
```
<a name="555">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  513.22
```
<a name="556">

### decode-uri-component
<a name="557">

#### valid
<a name="558">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  56.9
```
<a name="559">

##### fast-decode-uri-component
```
 █  avg (kb)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  199.06
```
<a name="560">

##### deuri
```
 █  avg (kb)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  204.25
```
<a name="561">

#### invalid
<a name="562">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.37
```
<a name="563">

##### fast-decode-uri-component
```
 █  avg (b)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.22
```
<a name="564">

##### deuri
```
 █  avg (b)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.1
```
<a name="565">

### url-routers
<a name="566">

#### GET "/user"
<a name="567">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  465.69
```
<a name="568">

##### rou3
```
 █  avg (b)

 1. rou3
    ████████████████████████████████████████████████████████████████████████████████████████████████  2.96
```
<a name="569">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  843.07
```
<a name="570">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.91
```
<a name="571">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.08
```
<a name="572">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  248.09
```
<a name="573">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.88
```
<a name="574">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.3
```
<a name="575">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.7
```
<a name="576">

#### GET "/user/comments"
<a name="577">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  521.8
```
<a name="578">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.36
```
<a name="579">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1033.53
```
<a name="580">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.41
```
<a name="581">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.86
```
<a name="582">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  250.09
```
<a name="583">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.65
```
<a name="584">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.47
```
<a name="585">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.63
```
<a name="586">

#### GET "/user/avatar"
<a name="587">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  372.08
```
<a name="588">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.2
```
<a name="589">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1032.62
```
<a name="590">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.68
```
<a name="591">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.91
```
<a name="592">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  218.6
```
<a name="593">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.14
```
<a name="594">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.05
```
<a name="595">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.22
```
<a name="596">

#### GET "/user/lookup/username/:username"
<a name="597">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  424.21
```
<a name="598">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  696.54
```
<a name="599">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.69
```
<a name="600">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  342.86
```
<a name="601">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  102.1
```
<a name="602">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  291.53
```
<a name="603">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  167.31
```
<a name="604">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  158.44
```
<a name="605">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  143.62
```
<a name="606">

#### GET "/user/lookup/email/:email"
<a name="607">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  426.62
```
<a name="608">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  625.64
```
<a name="609">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.72
```
<a name="610">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  342.1
```
<a name="611">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  106.77
```
<a name="612">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  262.81
```
<a name="613">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  134.96
```
<a name="614">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  282.97
```
<a name="615">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  227.84
```
<a name="616">

#### GET "/event/:id"
<a name="617">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  383.09
```
<a name="618">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  478.07
```
<a name="619">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1256.91
```
<a name="620">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  272.43
```
<a name="621">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  90.56
```
<a name="622">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  255.56
```
<a name="623">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  104.73
```
<a name="624">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  214.24
```
<a name="625">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  251.4
```
<a name="626">

#### GET "/event/:id/comments"
<a name="627">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  380.21
```
<a name="628">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  536.37
```
<a name="629">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1497.8
```
<a name="630">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  302.44
```
<a name="631">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  101.51
```
<a name="632">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  317.61
```
<a name="633">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  116.24
```
<a name="634">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  274.74
```
<a name="635">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  290.72
```
<a name="636">

#### POST "/event/:id/comment"
<a name="637">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  630.99
```
<a name="638">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  543.94
```
<a name="639">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.51
```
<a name="640">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  296.87
```
<a name="641">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  98.62
```
<a name="642">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  374.25
```
<a name="643">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  70.67
```
<a name="644">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  270.53
```
<a name="645">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  216.67
```
<a name="646">

#### GET "/map/:location/event"
<a name="647">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  402.44
```
<a name="648">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  549.36
```
<a name="649">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.52
```
<a name="650">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  303.96
```
<a name="651">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  102.07
```
<a name="652">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  273.46
```
<a name="653">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  123.07
```
<a name="654">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  271.7
```
<a name="655">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  257.42
```
<a name="656">

#### GET "/status"
<a name="657">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  367.62
```
<a name="658">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.61
```
<a name="659">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  834.07
```
<a name="660">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.55
```
<a name="661">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.22
```
<a name="662">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  218.82
```
<a name="663">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.5
```
<a name="664">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.05
```
<a name="665">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.4
```
<a name="666">

#### GET "/very/deeply/nested/route/hello/there"
<a name="667">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  360.83
```
<a name="668">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.53
```
<a name="669">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.82
```
<a name="670">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.21
```
<a name="671">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.32
```
<a name="672">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  215.8
```
<a name="673">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.09
```
<a name="674">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.18
```
<a name="675">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.73
```
<a name="676">

#### GET "/static/*"
<a name="677">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  357.66
```
<a name="678">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  490.46
```
<a name="679">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.51
```
<a name="680">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  110.59
```
<a name="681">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  98.76
```
<a name="682">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  430.73
```
<a name="683">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  93.56
```
<a name="684">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  276.47
```
<a name="685">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  320.15
```
<a name="686">

### validators
<a name="687">

#### assert-simple
<a name="688">

##### sury (jit)
```
 █  avg (mb)

 1. sury
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.27
```
<a name="689">

##### typia (aot)
```
 █  avg (kb)

 1. typia
    █████████████████████████████████████████████████████████████████████████████████████████████████  286.4
```
<a name="690">

##### valibot
```
 █  avg (mb)

 1. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  44.88
```
<a name="691">

##### stnl (jit)
```
 █  avg (kb)

 1. stnl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  227.78
```
<a name="692">

##### zod
```
 █  avg (mb)

 1. zod
    █████████████████████████████████████████████████████████████████████████████████████████████████  18.84
```
<a name="693">

##### zod/mini
```
 █  avg (mb)

 1. zod-mini
    █████████████████████████████████████████████████████████████████████████████████████████████████  18.87
```
<a name="694">

##### typebox (aot)
```
 █  avg (kb)

 1. typebox-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  364.1
```
<a name="695">

##### stnl (aot)
```
 █  avg (kb)

 1. stnl-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  13.78
```
<a name="696">

##### typebox (jit)
```
 █  avg (kb)

 1. typebox-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  384.31
```
<a name="697">

##### arktype (jit)
```
 █  avg (kb)

 1. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████████  56.59
```
<a name="698">

##### effect/schema
```
 █  avg (mb)

 1. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████████  25.5
```
<a name="699">

## node-25.7.0
<a name="700">

### micro
<a name="701">

#### url
<a name="702">

##### end
<a name="703">

###### /^a($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.91
```
<a name="704">

###### /^a$()/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  561.46
```
<a name="705">

###### /^a()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.62
```
<a name="706">

###### /^a($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560
```
<a name="707">

###### /^a$($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.4
```
<a name="708">

##### wildcard
<a name="709">

###### /^a(.*)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.16
```
<a name="710">

###### /^a(.*)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.04
```
<a name="711">

###### /^a(.*$)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.24
```
<a name="712">

###### /^a(.*$)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.01
```
<a name="713">

###### /^a(.*$)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.77
```
<a name="714">

###### /^a(.*)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.3
```
<a name="715">

### async
<a name="716">

#### concurrency 1
<a name="717">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  790.38
```
<a name="718">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  445.75
```
<a name="719">

##### ciorent (mutex)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  346.01
```
<a name="720">

##### p-mutex
```
 █  avg (kb)

 1. p-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  543.28
```
<a name="721">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1045.19
```
<a name="722">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  332.12
```
<a name="723">

#### concurrency 2
<a name="724">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  785.89
```
<a name="725">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  444.34
```
<a name="726">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1003.28
```
<a name="727">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.23
```
<a name="728">

#### concurrency 4
<a name="729">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  782.86
```
<a name="730">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  443.79
```
<a name="731">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1003.48
```
<a name="732">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.73
```
<a name="733">

#### concurrency 8
<a name="734">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    ████████████████████████████████████████████████████████████████████████████████████████████████  779.76
```
<a name="735">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  441.81
```
<a name="736">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1001.62
```
<a name="737">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.48
```
<a name="738">

#### concurrency 16
<a name="739">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    ████████████████████████████████████████████████████████████████████████████████████████████████  785.47
```
<a name="740">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  438.54
```
<a name="741">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1000.53
```
<a name="742">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1355.15
```
<a name="743">

#### concurrency 32
<a name="744">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  781.32
```
<a name="745">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  431.82
```
<a name="746">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1000.71
```
<a name="747">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  793.41
```
<a name="748">

#### concurrency 64
<a name="749">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  783.2
```
<a name="750">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  418.57
```
<a name="751">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  996.58
```
<a name="752">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  513.22
```
<a name="753">

### decode-uri-component
<a name="754">

#### valid
<a name="755">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  56.57
```
<a name="756">

##### fast-decode-uri-component
```
 █  avg (kb)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  198.67
```
<a name="757">

##### deuri
```
 █  avg (kb)

 1. deuri
    ████████████████████████████████████████████████████████████████████████████████████████████████  202.7
```
<a name="758">

#### invalid
<a name="759">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.13
```
<a name="760">

##### fast-decode-uri-component
```
 █  avg (b)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.65
```
<a name="761">

##### deuri
```
 █  avg (b)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.11
```
<a name="762">

### url-routers
<a name="763">

#### GET "/user"
<a name="764">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  602.72
```
<a name="765">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.42
```
<a name="766">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  796.78
```
<a name="767">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.34
```
<a name="768">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.39
```
<a name="769">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  219.76
```
<a name="770">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.31
```
<a name="771">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.77
```
<a name="772">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.61
```
<a name="773">

#### GET "/user/comments"
<a name="774">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  581.82
```
<a name="775">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.36
```
<a name="776">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  962.46
```
<a name="777">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  33.52
```
<a name="778">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.88
```
<a name="779">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  304.03
```
<a name="780">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.56
```
<a name="781">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.88
```
<a name="782">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.91
```
<a name="783">

#### GET "/user/avatar"
<a name="784">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  638.92
```
<a name="785">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.47
```
<a name="786">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  988.75
```
<a name="787">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  34.93
```
<a name="788">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.12
```
<a name="789">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  212.6
```
<a name="790">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.91
```
<a name="791">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.83
```
<a name="792">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.58
```
<a name="793">

#### GET "/user/lookup/username/:username"
<a name="794">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  446.33
```
<a name="795">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  650.09
```
<a name="796">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.62
```
<a name="797">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  143.51
```
<a name="798">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  106.23
```
<a name="799">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  248.63
```
<a name="800">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  172.31
```
<a name="801">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  118.04
```
<a name="802">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    ████████████████████████████████████████████████████████████████████████████████████████████████  109.34
```
<a name="803">

#### GET "/user/lookup/email/:email"
<a name="804">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  395.76
```
<a name="805">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  620.52
```
<a name="806">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.61
```
<a name="807">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  105.04
```
<a name="808">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  153.01
```
<a name="809">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  244.24
```
<a name="810">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  147.77
```
<a name="811">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  106.92
```
<a name="812">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  147.04
```
<a name="813">

#### GET "/event/:id"
<a name="814">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  396.7
```
<a name="815">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  446.29
```
<a name="816">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1127.83
```
<a name="817">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  264.74
```
<a name="818">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  90.98
```
<a name="819">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  230.32
```
<a name="820">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  112.58
```
<a name="821">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  90.69
```
<a name="822">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  130.89
```
<a name="823">

#### GET "/event/:id/comments"
<a name="824">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  605.3
```
<a name="825">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  493.55
```
<a name="826">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1401.91
```
<a name="827">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  162.68
```
<a name="828">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  99.65
```
<a name="829">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  463.74
```
<a name="830">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  191.67
```
<a name="831">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  105.49
```
<a name="832">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  324.23
```
<a name="833">

#### POST "/event/:id/comment"
<a name="834">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  658.22
```
<a name="835">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  517.65
```
<a name="836">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1380.61
```
<a name="837">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  302.98
```
<a name="838">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  100.1
```
<a name="839">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  455.28
```
<a name="840">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  101.08
```
<a name="841">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  109.25
```
<a name="842">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  35.19
```
<a name="843">

#### GET "/map/:location/event"
<a name="844">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  332.5
```
<a name="845">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  505.34
```
<a name="846">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1421.96
```
<a name="847">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  137.41
```
<a name="848">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  99.18
```
<a name="849">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  244.72
```
<a name="850">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  147.74
```
<a name="851">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  109.82
```
<a name="852">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  138.76
```
<a name="853">

#### GET "/status"
<a name="854">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  633.04
```
<a name="855">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.33
```
<a name="856">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  789
```
<a name="857">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.73
```
<a name="858">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.72
```
<a name="859">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  215.5
```
<a name="860">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.4
```
<a name="861">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.76
```
<a name="862">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.07
```
<a name="863">

#### GET "/very/deeply/nested/route/hello/there"
<a name="864">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  626.07
```
<a name="865">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.57
```
<a name="866">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.74
```
<a name="867">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  34.23
```
<a name="868">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.33
```
<a name="869">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  319.38
```
<a name="870">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.59
```
<a name="871">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    ████████████████████████████████████████████████████████████████████████████████████████████████  0.74
```
<a name="872">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.81
```
<a name="873">

#### GET "/static/*"
<a name="874">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  324.83
```
<a name="875">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  429.99
```
<a name="876">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1359.15
```
<a name="877">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  64.01
```
<a name="878">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  98.36
```
<a name="879">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  277.71
```
<a name="880">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  89.57
```
<a name="881">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  267.62
```
<a name="882">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  291.12
```
<a name="883">

### validators
<a name="884">

#### assert-simple
<a name="885">

##### sury (jit)
```
 █  avg (mb)

 1. sury
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.27
```
<a name="886">

##### typia (aot)
```
 █  avg (kb)

 1. typia
    █████████████████████████████████████████████████████████████████████████████████████████████████  309.26
```
<a name="887">

##### valibot
```
 █  avg (mb)

 1. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  44.96
```
<a name="888">

##### stnl (jit)
```
 █  avg (kb)

 1. stnl-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  231.44
```
<a name="889">

##### zod
```
 █  avg (mb)

 1. zod
    █████████████████████████████████████████████████████████████████████████████████████████████████  19.49
```
<a name="890">

##### zod/mini
```
 █  avg (mb)

 1. zod-mini
    █████████████████████████████████████████████████████████████████████████████████████████████████  19.51
```
<a name="891">

##### typebox (aot)
```
 █  avg (kb)

 1. typebox-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  508.45
```
<a name="892">

##### stnl (aot)
```
 █  avg (kb)

 1. stnl-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  26.67
```
<a name="893">

##### typebox (jit)
```
 █  avg (kb)

 1. typebox-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  488.55
```
<a name="894">

##### arktype (jit)
```
 █  avg (kb)

 1. arktype
    ████████████████████████████████████████████████████████████████████████████████████████████████  50.86
```
<a name="895">

##### effect/schema
```
 █  avg (mb)

 1. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████████  32.94
```
<a name="896">

## bun-1.3.10
<a name="897">

### micro
<a name="898">

#### url
<a name="899">

##### end
<a name="900">

###### /^a($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  11.31
```
<a name="901">

###### /^a$()/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.16
```
<a name="902">

###### /^a()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.08
```
<a name="903">

###### /^a($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.08
```
<a name="904">

###### /^a$($)$/
```
 █  avg (b)

 1. regex
      0
```
<a name="905">

##### wildcard
<a name="906">

###### /^a(.*)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.08
```
<a name="907">

###### /^a(.*)($)$/
```
 █  avg (b)

 1. regex
      0
```
<a name="908">

###### /^a(.*$)($)/
```
 █  avg (b)

 1. regex
      0
```
<a name="909">

###### /^a(.*$)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.15
```
<a name="910">

###### /^a(.*$)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.23
```
<a name="911">

###### /^a(.*)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.07
```
<a name="912">

### async
<a name="913">

#### concurrency 1
<a name="914">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.71
```
<a name="915">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.59
```
<a name="916">

##### ciorent (mutex)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.64
```
<a name="917">

##### p-mutex
```
 █  avg (b)

 1. p-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  792.32
```
<a name="918">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.27
```
<a name="919">

##### manual
```
 █  avg (b)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  811.59
```
<a name="920">

#### concurrency 2
<a name="921">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.76
```
<a name="922">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.1
```
<a name="923">

##### async-mutex
```
 █  avg (b)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1485.24
```
<a name="924">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.64
```
<a name="925">

#### concurrency 4
<a name="926">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.64
```
<a name="927">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.65
```
<a name="928">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.82
```
<a name="929">

##### manual
```
 █  avg (b)

 1. manual
      0
```
<a name="930">

#### concurrency 8
<a name="931">

##### p-limit
```
 █  avg (b)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  609.64
```
<a name="932">

##### ciorent (semaphore)
```
 █  avg (b)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  320.21
```
<a name="933">

##### async-mutex
```
 █  avg (b)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  891.65
```
<a name="934">

##### manual
```
 █  avg (b)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  902.91
```
<a name="935">

#### concurrency 16
<a name="936">

##### p-limit
```
 █  avg (b)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  716.24
```
<a name="937">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.93
```
<a name="938">

##### async-mutex
```
 █  avg (b)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1049.98
```
<a name="939">

##### manual
```
 █  avg (b)

 1. manual
      0
```
<a name="940">

#### concurrency 32
<a name="941">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.58
```
<a name="942">

##### ciorent (semaphore)
```
 █  avg (b)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  426.94
```
<a name="943">

##### async-mutex
```
 █  avg (b)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1051.38
```
<a name="944">

##### manual
```
 █  avg (b)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  429.04
```
<a name="945">

#### concurrency 64
<a name="946">

##### p-limit
```
 █  avg (b)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  483.66
```
<a name="947">

##### ciorent (semaphore)
```
 █  avg (b)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  315.33
```
<a name="948">

##### async-mutex
```
 █  avg (b)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  892.86
```
<a name="949">

##### manual
```
 █  avg (b)

 1. manual
      0
```
<a name="950">

### decode-uri-component
<a name="951">

#### valid
<a name="952">

##### native
```
 █  avg (b)

 1. native
      0
```
<a name="953">

##### fast-decode-uri-component
```
 █  avg (kb)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.13
```
<a name="954">

##### deuri
```
 █  avg (b)

 1. deuri
    ████████████████████████████████████████████████████████████████████████████████████████████████  469.86
```
<a name="955">

#### invalid
<a name="956">

##### native
```
 █  avg (b)

 1. native
      0
```
<a name="957">

##### fast-decode-uri-component
```
 █  avg (b)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  51.12
```
<a name="958">

##### deuri
```
 █  avg (b)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.9
```
<a name="959">

### url-routers
<a name="960">

#### GET "/user"
<a name="961">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.76
```
<a name="962">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.11
```
<a name="963">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.4
```
<a name="964">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.51
```
<a name="965">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.36
```
<a name="966">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.52
```
<a name="967">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.21
```
<a name="968">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
      0
```
<a name="969">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
      0
```
<a name="970">

#### GET "/user/comments"
<a name="971">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.45
```
<a name="972">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.22
```
<a name="973">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.92
```
<a name="974">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.16
```
<a name="975">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
      0
```
<a name="976">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.34
```
<a name="977">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.23
```
<a name="978">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.11
```
<a name="979">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.1
```
<a name="980">

#### GET "/user/avatar"
<a name="981">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.3
```
<a name="982">

##### rou3
```
 █  avg (b)

 1. rou3
      0
```
<a name="983">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.66
```
<a name="984">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.08
```
<a name="985">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
      0
```
<a name="986">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    ████████████████████████████████████████████████████████████████████████████████████████████████  0.74
```
<a name="987">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
      0
```
<a name="988">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
      0
```
<a name="989">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.03
```
<a name="990">

#### GET "/user/lookup/username/:username"
<a name="991">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.78
```
<a name="992">

##### rou3
```
 █  avg (b)

 1. rou3
    ████████████████████████████████████████████████████████████████████████████████████████████████  26.93
```
<a name="993">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  15.05
```
<a name="994">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  8.37
```
<a name="995">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.26
```
<a name="996">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.09
```
<a name="997">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.28
```
<a name="998">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.34
```
<a name="999">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.48
```
<a name="1000">

#### GET "/user/lookup/email/:email"
<a name="1001">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.78
```
<a name="1002">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  14.14
```
<a name="1003">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.02
```
<a name="1004">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  8.27
```
<a name="1005">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.75
```
<a name="1006">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  13.74
```
<a name="1007">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    ████████████████████████████████████████████████████████████████████████████████████████████████  12.09
```
<a name="1008">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.99
```
<a name="1009">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.72
```
<a name="1010">

#### GET "/event/:id"
<a name="1011">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.86
```
<a name="1012">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  39.33
```
<a name="1013">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  11.69
```
<a name="1014">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.99
```
<a name="1015">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
      0
```
<a name="1016">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.72
```
<a name="1017">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.4
```
<a name="1018">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.08
```
<a name="1019">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.01
```
<a name="1020">

#### GET "/event/:id/comments"
<a name="1021">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.08
```
<a name="1022">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.88
```
<a name="1023">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.46
```
<a name="1024">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.12
```
<a name="1025">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
      0
```
<a name="1026">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.83
```
<a name="1027">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.31
```
<a name="1028">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.06
```
<a name="1029">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.03
```
<a name="1030">

#### POST "/event/:id/comment"
<a name="1031">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.52
```
<a name="1032">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  15.79
```
<a name="1033">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  31.97
```
<a name="1034">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.1
```
<a name="1035">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
      0
```
<a name="1036">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.84
```
<a name="1037">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.95
```
<a name="1038">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.19
```
<a name="1039">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.29
```
<a name="1040">

#### GET "/map/:location/event"
<a name="1041">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  8.9
```
<a name="1042">

##### rou3
```
 █  avg (b)

 1. rou3
    ████████████████████████████████████████████████████████████████████████████████████████████████  14.34
```
<a name="1043">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  28.05
```
<a name="1044">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.02
```
<a name="1045">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
      0
```
<a name="1046">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.94
```
<a name="1047">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.55
```
<a name="1048">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    ████████████████████████████████████████████████████████████████████████████████████████████████  2.96
```
<a name="1049">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.02
```
<a name="1050">

#### GET "/status"
<a name="1051">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.25
```
<a name="1052">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.83
```
<a name="1053">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.98
```
<a name="1054">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.19
```
<a name="1055">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
      0
```
<a name="1056">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.39
```
<a name="1057">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.2
```
<a name="1058">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.13
```
<a name="1059">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.11
```
<a name="1060">

#### GET "/very/deeply/nested/route/hello/there"
<a name="1061">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.27
```
<a name="1062">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.5
```
<a name="1063">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.97
```
<a name="1064">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.17
```
<a name="1065">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
      0
```
<a name="1066">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.16
```
<a name="1067">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.06
```
<a name="1068">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.13
```
<a name="1069">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.08
```
<a name="1070">

#### GET "/static/*"
<a name="1071">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.55
```
<a name="1072">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  16.81
```
<a name="1073">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  69.09
```
<a name="1074">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.73
```
<a name="1075">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.28
```
<a name="1076">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.61
```
<a name="1077">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.64
```
<a name="1078">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.62
```
<a name="1079">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.52
```
<a name="1080">

### validators
<a name="1081">

#### assert-simple
<a name="1082">

##### sury (jit)
```
 █  avg (kb)

 1. sury
    █████████████████████████████████████████████████████████████████████████████████████████████████  59.7
```
<a name="1083">

##### typia (aot)
```
 █  avg (kb)

 1. typia
    █████████████████████████████████████████████████████████████████████████████████████████████████  59.7
```
<a name="1084">

##### valibot
```
 █  avg (kb)

 1. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  56.6
```
<a name="1085">

##### stnl (jit)
```
 █  avg (kb)

 1. stnl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  16.38
```
<a name="1086">

##### zod
```
 █  avg (kb)

 1. zod
    █████████████████████████████████████████████████████████████████████████████████████████████████  184.47
```
<a name="1087">

##### zod/mini
```
 █  avg (kb)

 1. zod-mini
    █████████████████████████████████████████████████████████████████████████████████████████████████  1472.72
```
<a name="1088">

##### typebox (aot)
```
 █  avg (kb)

 1. typebox-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  42.23
```
<a name="1089">

##### stnl (aot)
```
 █  avg (kb)

 1. stnl-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  20.7
```
<a name="1090">

##### typebox (jit)
```
 █  avg (kb)

 1. typebox-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  17.27
```
<a name="1091">

##### arktype (jit)
```
 █  avg (kb)

 1. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████████  27.31
```
<a name="1092">

##### effect/schema
```
 █  avg (kb)

 1. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████████  139.26
```
<a name="1093">

## deno-2.7.1
<a name="1094">

### micro
<a name="1095">

#### url
<a name="1096">

##### end
<a name="1097">

###### /^a($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.73
```
<a name="1098">

###### /^a$()/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.81
```
<a name="1099">

###### /^a()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.82
```
<a name="1100">

###### /^a($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.88
```
<a name="1101">

###### /^a$($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.89
```
<a name="1102">

##### wildcard
<a name="1103">

###### /^a(.*)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.87
```
<a name="1104">

###### /^a(.*)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.9
```
<a name="1105">

###### /^a(.*$)($)/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  559.87
```
<a name="1106">

###### /^a(.*$)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.81
```
<a name="1107">

###### /^a(.*$)($)$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.52
```
<a name="1108">

###### /^a(.*)()$/
```
 █  avg (b)

 1. regex
    █████████████████████████████████████████████████████████████████████████████████████████████████  560.34
```
<a name="1109">

### async
<a name="1110">

#### concurrency 1
<a name="1111">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  806.4
```
<a name="1112">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    ████████████████████████████████████████████████████████████████████████████████████████████████  409.4
```
<a name="1113">

##### ciorent (mutex)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  356.01
```
<a name="1114">

##### p-mutex
```
 █  avg (kb)

 1. p-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  508.72
```
<a name="1115">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1055.26
```
<a name="1116">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  335.81
```
<a name="1117">

#### concurrency 2
<a name="1118">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  809.08
```
<a name="1119">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  408.62
```
<a name="1120">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1010.03
```
<a name="1121">

##### manual
```
 █  avg (mb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.44
```
<a name="1122">

#### concurrency 4
<a name="1123">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  800.21
```
<a name="1124">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  408.07
```
<a name="1125">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1010.59
```
<a name="1126">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  1364.26
```
<a name="1127">

#### concurrency 8
<a name="1128">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  800.17
```
<a name="1129">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  406.96
```
<a name="1130">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1010.04
```
<a name="1131">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  824.35
```
<a name="1132">

#### concurrency 16
<a name="1133">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    ████████████████████████████████████████████████████████████████████████████████████████████████  802.47
```
<a name="1134">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  405.05
```
<a name="1135">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1008.79
```
<a name="1136">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  554.75
```
<a name="1137">

#### concurrency 32
<a name="1138">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  799
```
<a name="1139">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  400.51
```
<a name="1140">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1008.63
```
<a name="1141">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  419.54
```
<a name="1142">

#### concurrency 64
<a name="1143">

##### p-limit
```
 █  avg (kb)

 1. p-limit
    █████████████████████████████████████████████████████████████████████████████████████████████████  801.56
```
<a name="1144">

##### ciorent (semaphore)
```
 █  avg (kb)

 1. ciorent
    █████████████████████████████████████████████████████████████████████████████████████████████████  392.08
```
<a name="1145">

##### async-mutex
```
 █  avg (kb)

 1. async-mutex
    █████████████████████████████████████████████████████████████████████████████████████████████████  1009.87
```
<a name="1146">

##### manual
```
 █  avg (kb)

 1. manual
    █████████████████████████████████████████████████████████████████████████████████████████████████  352.45
```
<a name="1147">

### decode-uri-component
<a name="1148">

#### valid
<a name="1149">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  56.75
```
<a name="1150">

##### fast-decode-uri-component
```
 █  avg (kb)

 1. fast-decode-uri-component
    ████████████████████████████████████████████████████████████████████████████████████████████████  198.94
```
<a name="1151">

##### deuri
```
 █  avg (kb)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  201.47
```
<a name="1152">

#### invalid
<a name="1153">

##### native
```
 █  avg (kb)

 1. native
    █████████████████████████████████████████████████████████████████████████████████████████████████  49
```
<a name="1154">

##### fast-decode-uri-component
```
 █  avg (b)

 1. fast-decode-uri-component
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.36
```
<a name="1155">

##### deuri
```
 █  avg (b)

 1. deuri
    █████████████████████████████████████████████████████████████████████████████████████████████████  0.73
```
<a name="1156">

### url-routers
<a name="1157">

#### GET "/user"
<a name="1158">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  722.62
```
<a name="1159">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.15
```
<a name="1160">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    ████████████████████████████████████████████████████████████████████████████████████████████████  790.3
```
<a name="1161">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.58
```
<a name="1162">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.46
```
<a name="1163">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  242.22
```
<a name="1164">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.44
```
<a name="1165">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  8.08
```
<a name="1166">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.76
```
<a name="1167">

#### GET "/user/comments"
<a name="1168">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  658.49
```
<a name="1169">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  11.25
```
<a name="1170">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  942.94
```
<a name="1171">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.76
```
<a name="1172">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    ████████████████████████████████████████████████████████████████████████████████████████████████  1.56
```
<a name="1173">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  275.73
```
<a name="1174">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  9.58
```
<a name="1175">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.25
```
<a name="1176">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.88
```
<a name="1177">

#### GET "/user/avatar"
<a name="1178">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  512.8
```
<a name="1179">

##### rou3
```
 █  avg (b)

 1. rou3
    ████████████████████████████████████████████████████████████████████████████████████████████████  7.49
```
<a name="1180">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  975.06
```
<a name="1181">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  35.41
```
<a name="1182">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  3.24
```
<a name="1183">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  249.38
```
<a name="1184">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.46
```
<a name="1185">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.61
```
<a name="1186">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    ████████████████████████████████████████████████████████████████████████████████████████████████  2.71
```
<a name="1187">

#### GET "/user/lookup/username/:username"
<a name="1188">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  423.32
```
<a name="1189">

##### rou3
```
 █  avg (b)

 1. rou3
    ████████████████████████████████████████████████████████████████████████████████████████████████  955.72
```
<a name="1190">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.61
```
<a name="1191">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  121.75
```
<a name="1192">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  103.19
```
<a name="1193">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  255.15
```
<a name="1194">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  133.02
```
<a name="1195">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  96.71
```
<a name="1196">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  101.27
```
<a name="1197">

#### GET "/user/lookup/email/:email"
<a name="1198">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  400.56
```
<a name="1199">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  913.57
```
<a name="1200">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.63
```
<a name="1201">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  154.7
```
<a name="1202">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  123.67
```
<a name="1203">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  238.5
```
<a name="1204">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  141.4
```
<a name="1205">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  86.7
```
<a name="1206">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  126.42
```
<a name="1207">

#### GET "/event/:id"
<a name="1208">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  367.62
```
<a name="1209">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  745.73
```
<a name="1210">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1184.2
```
<a name="1211">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  259.27
```
<a name="1212">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  95.46
```
<a name="1213">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  232.75
```
<a name="1214">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  126.31
```
<a name="1215">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  69.58
```
<a name="1216">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  108.31
```
<a name="1217">

#### GET "/event/:id/comments"
<a name="1218">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  377.33
```
<a name="1219">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  809.88
```
<a name="1220">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1423.65
```
<a name="1221">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  371.49
```
<a name="1222">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  78.57
```
<a name="1223">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    ████████████████████████████████████████████████████████████████████████████████████████████████  229.69
```
<a name="1224">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  117.67
```
<a name="1225">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  78.73
```
<a name="1226">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  117.52
```
<a name="1227">

#### POST "/event/:id/comment"
<a name="1228">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  650.81
```
<a name="1229">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  796.09
```
<a name="1230">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1433.26
```
<a name="1231">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  397.21
```
<a name="1232">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  96.67
```
<a name="1233">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  254.52
```
<a name="1234">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  72.56
```
<a name="1235">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  75.97
```
<a name="1236">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  36.05
```
<a name="1237">

#### GET "/map/:location/event"
<a name="1238">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  383.27
```
<a name="1239">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  801.88
```
<a name="1240">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1447.59
```
<a name="1241">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  378.78
```
<a name="1242">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  93.27
```
<a name="1243">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  245.03
```
<a name="1244">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  107.38
```
<a name="1245">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  76.11
```
<a name="1246">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  117.3
```
<a name="1247">

#### GET "/status"
<a name="1248">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  443.56
```
<a name="1249">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  14.42
```
<a name="1250">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  759.79
```
<a name="1251">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  39.96
```
<a name="1252">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.26
```
<a name="1253">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  217.85
```
<a name="1254">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.46
```
<a name="1255">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  5.07
```
<a name="1256">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.17
```
<a name="1257">

#### GET "/very/deeply/nested/route/hello/there"
<a name="1258">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    ████████████████████████████████████████████████████████████████████████████████████████████████  369.13
```
<a name="1259">

##### rou3
```
 █  avg (b)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  20.58
```
<a name="1260">

##### hono (trie)
```
 █  avg (kb)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1.72
```
<a name="1261">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  37.33
```
<a name="1262">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  2.74
```
<a name="1263">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  219.86
```
<a name="1264">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    ████████████████████████████████████████████████████████████████████████████████████████████████  7.92
```
<a name="1265">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.2
```
<a name="1266">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  7.52
```
<a name="1267">

#### GET "/static/*"
<a name="1268">

##### hono (pattern)
```
 █  avg (b)

 1. hono-pattern
    █████████████████████████████████████████████████████████████████████████████████████████████████  345.01
```
<a name="1269">

##### rou3
```
 █  avg (kb)

 1. rou3
    █████████████████████████████████████████████████████████████████████████████████████████████████  6.81
```
<a name="1270">

##### hono (trie)
```
 █  avg (b)

 1. hono-trie
    █████████████████████████████████████████████████████████████████████████████████████████████████  1390.62
```
<a name="1271">

##### rou3 (jit)
```
 █  avg (b)

 1. rou3-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  113.19
```
<a name="1272">

##### mapl (jit)
```
 █  avg (b)

 1. mapl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  101.67
```
<a name="1273">

##### find-my-way
```
 █  avg (b)

 1. find-my-way
    █████████████████████████████████████████████████████████████████████████████████████████████████  227.55
```
<a name="1274">

##### hono (regexp)
```
 █  avg (b)

 1. hono-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  77.28
```
<a name="1275">

##### mapl (tree)
```
 █  avg (b)

 1. mapl-tree
    ████████████████████████████████████████████████████████████████████████████████████████████████  235.95
```
<a name="1276">

##### mapl (regexp)
```
 █  avg (b)

 1. mapl-regexp
    █████████████████████████████████████████████████████████████████████████████████████████████████  149.72
```
<a name="1277">

### validators
<a name="1278">

#### assert-simple
<a name="1279">

##### sury (jit)
```
 █  avg (mb)

 1. sury
    █████████████████████████████████████████████████████████████████████████████████████████████████  4.27
```
<a name="1280">

##### typia (aot)
```
 █  avg (kb)

 1. typia
    █████████████████████████████████████████████████████████████████████████████████████████████████  283.3
```
<a name="1281">

##### valibot
```
 █  avg (mb)

 1. valibot
    █████████████████████████████████████████████████████████████████████████████████████████████████  11.89
```
<a name="1282">

##### stnl (jit)
```
 █  avg (kb)

 1. stnl-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  224.41
```
<a name="1283">

##### zod
```
 █  avg (mb)

 1. zod
    █████████████████████████████████████████████████████████████████████████████████████████████████  21.58
```
<a name="1284">

##### zod/mini
```
 █  avg (mb)

 1. zod-mini
    █████████████████████████████████████████████████████████████████████████████████████████████████  21.56
```
<a name="1285">

##### typebox (aot)
```
 █  avg (kb)

 1. typebox-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  486.81
```
<a name="1286">

##### stnl (aot)
```
 █  avg (kb)

 1. stnl-aot
    █████████████████████████████████████████████████████████████████████████████████████████████████  12.49
```
<a name="1287">

##### typebox (jit)
```
 █  avg (kb)

 1. typebox-jit
    █████████████████████████████████████████████████████████████████████████████████████████████████  512.28
```
<a name="1288">

##### arktype (jit)
```
 █  avg (kb)

 1. arktype
    █████████████████████████████████████████████████████████████████████████████████████████████████  65.48
```
<a name="1289">

##### effect/schema
```
 █  avg (mb)

 1. effect-schema
    █████████████████████████████████████████████████████████████████████████████████████████████████  32.96
```

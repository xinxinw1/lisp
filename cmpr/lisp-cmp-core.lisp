(js-mac mac a `(js-mac ,@a))
(mac exe a `(js-exe ,@a))
(mac exen a `(exe ,@a nil))

(mac defn a `(exen (def ,@a)))
(mac macn a `(exen (mac ,@a)))

(mac dot () `|.|)

(mac by (n nm op)
  `(mac ,nm #g
     `(do ,@(map [qq (,,op ,@_)] (grp #g ,n)))))

(mac byone (nm op)
  `(by 1 ,nm ,op))

(mac bytwo (nm op)
  `(by 2 ,nm ,op))

(bytwo alias alias1)

(mac alias1 (new old)
  `(mac ,new #args `(,,old ,@#args)))

(mac jsali a
  `(alias ,@(fla (map jsali1 a))))

(defn jsali1 (a)
  (lis a (app 'js- a)))

(jsali cal
       var fn rfn def new
       if brk cont
       ret thr nret
       mmac mblk smblk qt
       do cdo1)

(mmac dtfn a (x . args)
  `((. ,x ,@a) ,@args))

(mac amblk a
  `(mblk (smblk (mmblk ,@a))))


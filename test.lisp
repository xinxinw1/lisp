(def fact (a)
  (if (is a 0) 1
      (* a (fact (- a 1)))))

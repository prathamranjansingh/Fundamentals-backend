Redis (“REmote DIctionary Service”) is an open-source key-value database server.
Memcached
Memcached was created by Brad Fitzpatrick in 2003, predating Redis by six years. It originally started as a Perl project and was later rewritten in C. It was the de facto caching tool of its day. The main differentiating point between it and Redis is its lack of data types and its limited eviction policy of just LRU (least recently used).

Another difference is that Redis is single-threaded while Memcached is multithreaded. Memcached might be performant in a strictly caching environment but requires some setup in a distributed cluster, while Redis has support for this out of the box.
// lru_cache.js
// ============
// * GitHub: https://github.com/jharding/lru-cache
// * Copyright (c) 2013 Jake Harding
// * Licensed under the MIT license

(function(root, undefined) {

  root.LruCache = LruCache;

  function LruCache(maxSize) {
    this.maxSize = maxSize || 100;
    this.size = 0;
    this.hash = {};
    this.list = new List();
  }

  LruCache.prototype.set = function set(key, val) {
    var tailItem = this.list.tail, node;

    // at capacity
    if (this.size >= this.maxSize) {
      this.list.remove(tailItem);
      delete this.hash[tailItem.key];
    }

    // writing over existing key
    if (node = this.hash[key]) {
      node.val = val;
      this.list.moveToFront(node);
    }

    // new key
    else {
      node = new Node(key, val);

      this.list.add(node);
      this.hash[key] = node;

      this.size++;
    }
  };

  LruCache.prototype.get = function get(key) {
    var node = this.hash[key];

    if (node) {
      this.list.moveToFront(node);
      return node.val;
    }
  };

  function List() {
    this.head = this.tail = null;
  }

  List.prototype.add = function add(node) {
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    }

    this.head = node;
    this.tail = this.tail || node;
  };

  List.prototype.remove = function remove(node) {
    node.prev ? node.prev.next = node.next : this.head = node.next;
    node.next ? node.next.prev = node.prev : this.tail = node.prev;
  };

  List.prototype.moveToFront = function(node) {
    this.remove(node);
    this.add(node);
  };

  function Node(key, val) {
    this.key = key;
    this.val = val;
    this.prev = this.next = null;
  }

})(this);

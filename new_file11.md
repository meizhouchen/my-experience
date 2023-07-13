'use strict';
const CONFIG_ENV = 'LOCAL';
// const CONFIG_ENV = 'DEV';
// const CONFIG_ENV = 'TEST';
// const CONFIG_ENV = 'PRD';

const CONFIG_ALL = {
  LOCAL: {
    MYSQL_APP_HOST: 'rm-wz9fw4q99ky07rh0p7o.mysql.rds.aliyuncs.com',
    MYSQL_APP_SYNC_HOST: 'rm-wz9fw4q99ky07rh0p7o.mysql.rds.aliyuncs.com',
    // MYSQL_APP_HOST: 'rm-wz9r5bwjnfh5pnp24uo.mysql.rds.aliyuncs.com',
    // MYSQL_APP_SYNC_HOST: 'rm-wz9r5bwjnfh5pnp24uo.mysql.rds.aliyuncs.com',
    MYSQL_ADMIN_HOST: 'rm-wz9r5bwjnfh5pnp24uo.mysql.rds.aliyuncs.com',

    REDIS_HOST: '127.0.0.1',
    REDIS_PASSWORD: '',
    REDIS_DB: 2,
    BASE_URL: 'ceshi.yangguanghaina.com',
  },
  DEV: {
    MYSQL_APP_HOST: 'rm-wz9r5bwjnfh5pnp24uo.mysql.rds.aliyuncs.com',
    MYSQL_APP_SYNC_HOST: 'rm-wz9r5bwjnfh5pnp24uo.mysql.rds.aliyuncs.com',
    MYSQL_ADMIN_HOST: '47.106.166.54',
    REDIS_HOST: '120.24.20.27',
    REDIS_PASSWORD: 'test2',
    REDIS_DB: 14,
    BASE_URL: 'dev.yangguanghaina.com',
  },
  TEST: {
    MYSQL_APP_HOST: 'rm-wz9fw4q99ky07rh0p7o.mysql.rds.aliyuncs.com',
    MYSQL_APP_SYNC_HOST: 'rm-wz9fw4q99ky07rh0p7o.mysql.rds.aliyuncs.com',
    MYSQL_ADMIN_HOST: 'rm-wz9r5bwjnfh5pnp24uo.mysql.rds.aliyuncs.com',
    REDIS_HOST: '47.106.166.54',
    REDIS_PASSWORD: 'LE4hLQfukrSvC4nF',
    REDIS_DB: 0,
    BASE_URL: 'ceshi.yangguanghaina.com',
  },
  PRD: {
    MYSQL_APP_HOST: 'rr-wz9fmh2p2ce27oruvfo.mysql.rds.aliyuncs.com',
    MYSQL_APP_SYNC_HOST: 'rr-wz9fmh2p2ce27oruvfo.mysql.rds.aliyuncs.com',
    MYSQL_ADMIN_HOST: 'rm-wz9r5bwjnfh5pnp24uo.mysql.rds.aliyuncs.com',
    REDIS_HOST: '47.106.166.54',
    REDIS_PASSWORD: 'LE4hLQfukrSvC4nF',
    REDIS_DB: 2,
    BASE_URL: 'yghn.yangguanghaina.com',
  },
};
const {
  MYSQL_APP_HOST,
  MYSQL_APP_SYNC_HOST,
  MYSQL_ADMIN_HOST,
  REDIS_HOST,
  REDIS_PASSWORD,
  REDIS_DB,
  BASE_URL,
} = {
  ...CONFIG_ALL[CONFIG_ENV],
};
const AppConfig = require('./config');
module.exports = appInfo => {
  const config = exports = {};
  const configData = new AppConfig(
    BASE_URL,
    MYSQL_APP_HOST,
    MYSQL_APP_SYNC_HOST,
    MYSQL_ADMIN_HOST);
  configData.init(config);
  config.keys = appInfo.name + '_1548725720064_3258';
  // 开发端口
  config.cluster = {
    listen: {
      path: '',
      port: 7101,
      hostname: '0.0.0.0',
    },
  };
  // 加密开关
  config.apiSecurity.encryptionDisable = 0;
  config.redis = {
    client: {
      port: 6379,
      host: REDIS_HOST,
      password: REDIS_PASSWORD,
      db: REDIS_DB,
    },
  };
  // 本地开发
  if (CONFIG_ENV === 'LOCAL') {
    config.mysql = {
      clients: {
        // 旅游测试数据库
        travel: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'tourpoi',
        },
        // 测试数据库
        app: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
          charset: 'utf8mb4',
        },

        // 正式库同步到测试库上的数据库(只读账号)
        sync_app: {
          host: MYSQL_APP_SYNC_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus',
        },

        //  兴义 xingyi
        xingyi: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
        },

        //  上海 shanghai
        shanghai: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
        },

        //  北京 beijing
        beijing: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
        },

        admin: {
          host: MYSQL_ADMIN_HOST,
          port: '3306',
          user: 'hangjia_test',
          password: '6IU9IagFhGtvSEjjiFcQ',
          database: 'hangjia_test',
        },
        data: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'Db9qLe5DF5lBLfYF',
          database: 'lifeplus_data',
          charset: 'utf8mb4',
        },
      },
      // 所有数据库配置的默认值
      default: {},
      app: true,
      agent: false,
    };

    // sequelize
    config.sequelize = {
      datasources: [{
        delegate: 'model', // load all models to app.model and ctx.model
        baseDir: 'model', // load models from `app/model/*.js`
        dialect: 'mysql',
        host: MYSQL_ADMIN_HOST,
        port: 3306,
        database: 'hangjia_test',
        username: 'hangjia_test',
        password: '6IU9IagFhGtvSEjjiFcQ',
      },
        {
          delegate: 'appModel', // load all models to app.appModel and ctx.appModel
          baseDir: 'app_model', // load models from `app/app_model/*.js`
          dialect: 'mysql',
          host: MYSQL_APP_HOST,
          port: 3306,
          username: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
        },
      ],
    };
    // 配置端口
    config.cluster = {
      listen: {
        path: '',
        port: 7101,
        hostname: '0.0.0.0',
      },
    };

    // 跨域配置
    config.security = {
      csrf: {
        enable: false,
        ignoreJSON: true,
        useSession: true,
      },
      domainWhiteList: [ 'http://127.0.0.1:*', 'http://dev.hangjia.yangguanghaina.com', 'https://dev.hangjia.yangguanghaina.com' ],
    };

    // 跨域配置
    config.cors = {
      origin: 'https://dev.hangjia.yangguanghaina.com',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true,
      maxAge: 3600 * 24 * 100,
    };
    // es同步的mq配置(test)
    config.rabbitmq = {
      protocol: 'amqp',
      hostname: 'localhost',
      port: 5672,
      username: 'hangjia_cloud',
      password: 'Yghn2020',
      locale: 'en_US',
      authMechanism: 'AMQPLAIN',
      vhost: '/hangjia_cloud',
    };

  }
  // 本地开发
  if (CONFIG_ENV === 'DEV') {
    config.mysql = {
      // database configuration
      clients: {
        // 旅游测试数据库
        travel: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'aLIYUN2017',
          database: 'tourpoi_dev',
        },
        // 测试数据库
        app: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'aLIYUN2017',
          database: 'lifeplus_dev',
          charset: 'utf8mb4',
        },

        // 正式库同步到测试库上的数据库(只读账号)
        sync_app: {
          host: MYSQL_APP_SYNC_HOST,
          port: '3306',
          user: 'root',
          password: 'aLIYUN2017',
          database: 'lifeplus_dev',
        },

        //  兴义 xingyi
        xingyi: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'aLIYUN2017',
          database: 'lifeplus_dev',
          charset: 'utf8mb4',
        },

        //  上海 shanghai
        shanghai: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'aLIYUN2017',
          database: 'lifeplus_dev',
        },

        //  北京 beijing
        beijing: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'aLIYUN2017',
          database: 'lifeplus_dev',
        },
        admin: { // dev库
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'aLIYUN2017',
          database: 'lifeplus_admin',
        },
        // 测试数据库
        data: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'aLIYUN2017',
          database: 'lifeplus_data',
          charset: 'utf8mb4',
        },
      },
      // 所有数据库配置的默认值
      default: {},
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false,
    };

    // sequelize
    config.sequelize = {
      datasources: [{ // dev库
        delegate: 'model', // load all models to app.model and ctx.model
        baseDir: 'model', // load models from `app/model/*.js`
        dialect: 'mysql',
        host: MYSQL_APP_HOST,
        port: 3306,
        database: 'lifeplus_admin',
        username: 'root',
        password: 'aLIYUN2017',
      },
      {
        delegate: 'appModel', // load all models to app.appModel and ctx.appModel
        baseDir: 'app_model', // load models from `app/app_model/*.js`
        dialect: 'mysql',
        host: MYSQL_APP_HOST,
        port: 3306,
        username: 'root',
        password: 'aLIYUN2017',
        database: 'lifeplus_dev',
      },
      ],
    };
    // 配置端口
    config.cluster = {
      listen: {
        path: '',
        port: 7101,
        hostname: '0.0.0.0',
      },
    };

    // 跨域配置
    config.security = {
      csrf: {
        enable: false,
        ignoreJSON: true,
        useSession: true,
      },
      domainWhiteList: [ 'http://127.0.0.1:*', 'http://dev.hangjia.yangguanghaina.com', 'https://dev.hangjia.yangguanghaina.com' ],
    };

    // 跨域配置
    config.cors = {
      origin: 'https://dev.hangjia.yangguanghaina.com',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true,
      maxAge: 3600 * 24 * 100,
    };
    // es同步的mq配置(test)
    config.rabbitmq = {
      protocol: 'amqp',
      hostname: '172.18.152.84',
      port: 5672,
      username: 'admin',
      password: 'Admin123',
      locale: 'en_US',
      authMechanism: 'AMQPLAIN',
      vhost: '/test',
    };

  }
  // 本地测试
  if (CONFIG_ENV === 'TEST') {
    // 数据库配置
    config.mysql = {
      clients: {
        // 旅游测试数据库
        travel: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'tourpoi',
        },
        // 测试数据库
        app: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
          charset: 'utf8mb4',
        },

        // 正式库同步到测试库上的数据库(只读账号)
        sync_app: {
          host: MYSQL_APP_SYNC_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus',
        },

        //  兴义 xingyi
        xingyi: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
        },

        //  上海 shanghai
        shanghai: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
        },

        //  北京 beijing
        beijing: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'hangjia',
          password: 'test',
          database: 'lifeplus_test',
        },

        admin: {
          host: MYSQL_ADMIN_HOST,
          port: '3306',
          user: 'hangjia_test',
          password: '6IU9IagFhGtvSEjjiFcQ',
          database: 'hangjia_test',
        },
        data: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'root',
          password: 'Db9qLe5DF5lBLfYF',
          database: 'lifeplus_data',
          charset: 'utf8mb4',
        },
      },
      // 所有数据库配置的默认值
      default: {},
      app: true,
      agent: false,
    };
    // sequelize
    config.sequelize = {
      datasources: [{
        delegate: 'model', // load all models to app.model and ctx.model
        baseDir: 'model', // load models from `app/model/*.js`
        dialect: 'mysql',
        host: MYSQL_ADMIN_HOST,
        port: 3306,
        database: 'hangjia_test',
        username: 'hangjia_test',
        password: '6IU9IagFhGtvSEjjiFcQ',
      },
      {
        delegate: 'appModel', // load all models to app.appModel and ctx.appModel
        baseDir: 'app_model', // load models from `app/app_model/*.js`
        dialect: 'mysql',
        host: MYSQL_APP_HOST,
        port: 3306,
        username: 'hangjia',
        password: 'test',
        database: 'lifeplus_test',
      },
      ],
    };
    // 配置端口
    config.cluster = {
      listen: {
        path: '',
        port: 7101,
        hostname: '0.0.0.0',
      },
    };
    // 跨域配置
    config.security = {
      csrf: {
        enable: false,
        ignoreJSON: true,
        useSession: true,
      },
      domainWhiteList: [ 'http://127.0.0.1:*', 'http://v1.hangjia.yangguanghaina.com', 'https://v1.hangjia.yangguanghaina.com' ],
    };
    // 跨域配置
    config.cors = {
      origin: 'https://v1.hangjia.yangguanghaina.com',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true,
      maxAge: 3600 * 24 * 100,
    };
    // es同步的mq配置(test)
    config.rabbitmq = {
      protocol: 'amqp',
      hostname: '172.18.243.205',
      port: 5672,
      username: 'test',
      password: 'test',
      locale: 'en_US',
      authMechanism: 'AMQPLAIN',
      vhost: '/test',
    };
  }
  // 本地生产
  if (CONFIG_ENV === 'PRD') {
    // 数据库配置
    config.mysql = {
      clients: {
        // 旅游测试数据库
        travel: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'yghn_hangjia',
          password: 'ZmhnbF9oYW5namlhXzIwMTkK',
          database: 'tourpoi',
        },
        // 测试数据库
        app: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'yghn_hangjia',
          password: 'ZmhnbF9oYW5namlhXzIwMTkK',
          database: 'lifeplus',
        },

        // 正式库同步到测试库上的数据库(只读账号)
        sync_app: {
          host: MYSQL_APP_SYNC_HOST,
          port: '3306',
          user: 'yghn_hangjia',
          password: 'ZmhnbF9oYW5namlhXzIwMTkK',
          database: 'lifeplus',
        },

        //  兴义 xingyi
        xingyi: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'yghn_hangjia',
          password: 'ZmhnbF9oYW5namlhXzIwMTkK',
          database: 'lifeplus',
        },

        //  上海 shanghai
        shanghai: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'yghn_hangjia',
          password: 'ZmhnbF9oYW5namlhXzIwMTkK',
          database: 'lifeplus',
        },

        //  北京 beijing
        beijing: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'yghn_hangjia',
          password: 'ZmhnbF9oYW5namlhXzIwMTkK',
          database: 'lifeplus',
        },

        admin: {
          host: MYSQL_ADMIN_HOST,
          port: '3306',
          user: 'hangjia',
          password: '4aFhAGqfmKF2ez5bb9xQ',
          database: 'hangjia',
        },
        data: {
          host: MYSQL_APP_HOST,
          port: '3306',
          user: 'yghn_hangjia',
          password: 'ZmhnbF9oYW5namlhXzIwMTkK',
          database: 'lifeplus_data',
        },
      },
      // 所有数据库配置的默认值
      default: {},
      app: true,
      agent: false,
    };
    // sequelize
    config.sequelize = {
      datasources: [{
        delegate: 'model', // load all models to app.model and ctx.model
        baseDir: 'model', // load models from `app/model/*.js`
        dialect: 'mysql',
        host: MYSQL_ADMIN_HOST,
        port: 3306,
        database: 'hangjia',
        username: 'hangjia',
        password: '4aFhAGqfmKF2ez5bb9xQ',
      },
      {
        delegate: 'appModel', // load all models to app.appModel and ctx.appModel
        baseDir: 'app_model', // load models from `app/app_model/*.js`
        dialect: 'mysql',
        host: MYSQL_APP_HOST,
        port: 3306,
        username: 'yghn_hangjia',
        password: 'ZmhnbF9oYW5namlhXzIwMTkK',
        database: 'lifeplus',
      },
      ],
    };
    // 配置端口
    config.cluster = {
      listen: {
        path: '',
        port: 7101,
        hostname: '0.0.0.0',
      },
    };
    // 跨域配置
    config.security = {
      csrf: {
        enable: false,
        ignoreJSON: true,
        useSession: true,
      },
      domainWhiteList: [ 'http://127.0.0.1:*'],
    };
    // 跨域配置
    config.cors = {
      origin: 'https://newhangjia.yangguanghaina.com:7443',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true,
      maxAge: 3600 * 24 * 100,
    };
    // es同步的mq配置(test)
    config.rabbitmq = {
      protocol: 'amqp',
      hostname: '172.18.243.205',
      port: 5672,
      username: 'test',
      password: 'test',
      locale: 'en_US',
      authMechanism: 'AMQPLAIN',
      vhost: '/test',
    };
  }
  return config;
};
console.log('读取Local配置');

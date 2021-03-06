const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const configs = {
    'development': {
        'application': {
            'name': 'hotelexpress',
            'domain': 'localhost',
            'port': 3000
        },
        'mongodb': {
            'url': 'mongodb://localhost:27017/hotelexpress'
        },
        'swagger': {
            'path': '/api-docs'
        }
    },
    'production': {
        'application': {
            'name': 'hotelexpress',
            'domain': 'hushtech.co.uk',
            'port': 80
        },
        'mongodb': {
            'url': 'mongodb://localhost:27017/hotelexpress'
        },
        'swagger': {
            'path': '/api-docs'
        }
    },
    'docker': {
        'application': {
            'name': 'hotelexpress',
            'domain': 'localhost',
            'port': 3000
        },
        'mongodb': {
            'url': 'mongodb://mongo:27017/hotelexpress'
        },
        'swagger': {
            'path': '/api-docs'
        }
    }
};

export const config = configs[environment];
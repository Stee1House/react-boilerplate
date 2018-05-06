export const GET = {
    method: 'GET'
};

export const POST = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const PUT = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const domain = process.env.NODE_ENV === 'production' ? process.env.API_URL : '/';
export const SITE_MODE = process.env.NODE_ENV || 'development';

export const MODALS = {
    success: {

    },
    error: {

    }
};

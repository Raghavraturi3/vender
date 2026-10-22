import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  get PORT() {
    return Number(process.env.PORT || 5000);
  },
  get MONGODB_URI() {
    return process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vendersetu';
  },
  get JWT_SECRET() {
    return process.env.JWT_SECRET || 'vendersetu_super_secure_jwt_secret_campus_2026';
  },
  get JWT_EXPIRES_IN() {
    return process.env.JWT_EXPIRES_IN || '7d';
  },
  get RAZORPAY_KEY_ID() {
    return process.env.RAZORPAY_KEY_ID || 'rzp_test_campus_vendersetu';
  },
  get RAZORPAY_KEY_SECRET() {
    return process.env.RAZORPAY_KEY_SECRET || 'rzp_secret_dummy_campus_key';
  },
  get CLIENT_URL() {
    return process.env.CLIENT_URL || 'http://localhost:5173';
  },
  get NODE_ENV() {
    return process.env.NODE_ENV || 'development';
  },
  get SUPABASE_URL() {
    return process.env.SUPABASE_URL || 'https://aaifibfkfzkqkipdolxg.supabase.co';
  },
  get SUPABASE_ANON_KEY() {
    return process.env.SUPABASE_ANON_KEY || 'sb_publishable_xZ603UnH1N8UwS8aRPHpfw_f4HJ9nMP';
  },
  get SUPABASE_SERVICE_ROLE_KEY() {
    return process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  }
};

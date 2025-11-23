import { motion } from 'framer-motion';
import { FaGift, FaCopy } from 'react-icons/fa';
import { weddingConfig } from '../data/weddingConfig';
import { useState } from 'react';

const GiftSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-gradient-to-br from-wedding-cream to-wedding-pink p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <FaGift className="text-4xl text-wedding-rose" />
          </div>
          <h2 className="text-3xl md:text-5xl font-script text-gray-800 mb-4">
            Mừng Cưới
          </h2>
          <div className="w-24 h-1 bg-wedding-rose mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Nếu bạn không thể đến tham dự nhưng vẫn muốn gửi lời chúc, chúng tôi rất cảm kích!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bride Account */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              STK Cô Dâu
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600 block mb-1">Chủ tài khoản</label>
                <div className="flex items-center justify-between bg-wedding-cream rounded-lg p-3">
                  <p className="text-base font-medium text-gray-800">
                    {weddingConfig.bankInfo.brideAccount.ownerName}
                  </p>
                  <button
                    onClick={() => copyToClipboard(weddingConfig.bankInfo.brideAccount.ownerName, 'bride-owner')}
                    className="text-wedding-rose hover:text-wedding-pink transition-colors"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">Số tài khoản</label>
                <div className="flex items-center justify-between bg-wedding-cream rounded-lg p-3">
                  <p className="text-base font-mono text-gray-800">
                    {weddingConfig.bankInfo.brideAccount.accountNumber}
                  </p>
                  <button
                    onClick={() => copyToClipboard(weddingConfig.bankInfo.brideAccount.accountNumber, 'bride-account')}
                    className="text-wedding-rose hover:text-wedding-pink transition-colors"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">Ngân hàng</label>
                <div className="flex items-center justify-between bg-wedding-cream rounded-lg p-3">
                  <p className="text-base font-medium text-gray-800">
                    {weddingConfig.bankInfo.brideAccount.bankName}
                  </p>
                  <button
                    onClick={() => copyToClipboard(weddingConfig.bankInfo.brideAccount.bankName, 'bride-bank')}
                    className="text-wedding-rose hover:text-wedding-pink transition-colors"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>
            </div>
            {copied && copied.startsWith('bride') && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-wedding-rose text-sm mt-2"
              >
                Đã sao chép!
              </motion.p>
            )}
          </motion.div>

          {/* Groom Account */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              STK Chú Rể
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600 block mb-1">Chủ tài khoản</label>
                <div className="flex items-center justify-between bg-wedding-cream rounded-lg p-3">
                  <p className="text-base font-medium text-gray-800">
                    {weddingConfig.bankInfo.groomAccount.ownerName}
                  </p>
                  <button
                    onClick={() => copyToClipboard(weddingConfig.bankInfo.groomAccount.ownerName, 'groom-owner')}
                    className="text-wedding-rose hover:text-wedding-pink transition-colors"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">Số tài khoản</label>
                <div className="flex items-center justify-between bg-wedding-cream rounded-lg p-3">
                  <p className="text-base font-mono text-gray-800">
                    {weddingConfig.bankInfo.groomAccount.accountNumber}
                  </p>
                  <button
                    onClick={() => copyToClipboard(weddingConfig.bankInfo.groomAccount.accountNumber, 'groom-account')}
                    className="text-wedding-rose hover:text-wedding-pink transition-colors"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 block mb-1">Ngân hàng</label>
                <div className="flex items-center justify-between bg-wedding-cream rounded-lg p-3">
                  <p className="text-base font-medium text-gray-800">
                    {weddingConfig.bankInfo.groomAccount.bankName}
                  </p>
                  <button
                    onClick={() => copyToClipboard(weddingConfig.bankInfo.groomAccount.bankName, 'groom-bank')}
                    className="text-wedding-rose hover:text-wedding-pink transition-colors"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>
            </div>
            {copied && copied.startsWith('groom') && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-wedding-rose text-sm mt-2"
              >
                Đã sao chép!
              </motion.p>
            )}
          </motion.div>
        </div>
    </motion.section>
  );
};

export default GiftSection;


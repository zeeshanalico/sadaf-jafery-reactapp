import PropTypes from 'prop-types';

const FloatingWhatsApp = ({ number }: { number: string }) => {
    const handleClick = () => {
        const whatsappUrl = `https://wa.me/${number.replace(/\D/g, '')}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 cursor-pointer" onClick={handleClick}>
            <img
                src='/whatsapplogo.png'
                alt="WhatsApp Logo"
                width={70}
                height={70}
                className="mr-2 mb-5 hover:opacity-80"
            />
        </div>
    );
};

FloatingWhatsApp.propTypes = {
    number: PropTypes.string.isRequired,
};

export default FloatingWhatsApp;

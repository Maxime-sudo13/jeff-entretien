import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export const alt = 'Jeff Entretien - Entretien et Création Paysagère';
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://jeffentretien.fr/images/garden-image.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.8,
          }}
        />
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '1rem',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            maxWidth: '80%',
          }}
        >
          <img
            src="https://jeffentretien.fr/images/logojeffentretien.png"
            alt="Logo Jeff Entretien"
            width={150}
            height={150}
            style={{ marginBottom: '1rem' }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                margin: '0',
                color: '#0A5D36',
              }}
            >
              Jeff Entretien
            </h1>
            <p
              style={{
                fontSize: '1.5rem',
                margin: '0.5rem 0 0',
                color: '#5E2C17',
                fontStyle: 'italic',
              }}
            >
              Au delà du paysage, une expérience
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
import { Inter, Lusitana, Playfair_Display, Whisper } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin']
});
export const playfairDisplay = Playfair_Display({
    weight: ['400', '700'], // Choose weights you want to import
    subsets: ['latin'], // Choose subsets
  });
  export const whisper = Whisper({
    weight: ['400'], // Choose weights you want to import
    subsets: ['latin'], // Choose subsets
  });
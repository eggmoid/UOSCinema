import React, { memo } from 'react';

interface Props {
    size?: number;
}

export default memo(
    ({ size = 32 }: Props): JSX.Element => {
        return (
            <svg
                stroke="currentColor"
                strokeWidth={1}
                width={size}
                height={size}
                viewBox="0 0 207 207"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M47.035,176.023c-0.818,0-1.587-0.506-1.881-1.321c-1.201-3.322-3.624-5.978-6.822-7.478  c-3.197-1.5-6.789-1.665-10.111-0.464c-0.498,0.181-1.049,0.155-1.529-0.07c-0.479-0.225-0.851-0.632-1.031-1.131l-1.822-5.042  h-6.612c-1.104,0-2-0.896-2-2c0-7.292-5.933-13.225-13.226-13.225c-1.104,0-2-0.896-2-2V80.017c0-1.104,0.896-2,2-2  c7.293,0,13.226-5.933,13.226-13.226c0-1.104,0.896-2,2-2h55.943l89.497-32.347c1.038-0.376,2.186,0.162,2.561,1.201  c2.479,6.858,10.077,10.42,16.934,7.942c0.498-0.18,1.049-0.155,1.529,0.07c0.479,0.225,0.851,0.632,1.031,1.131l21.508,59.507  c0.376,1.039-0.162,2.185-1.201,2.561c-6.858,2.479-10.421,10.075-7.942,16.934c0.181,0.499,0.155,1.049-0.07,1.529  c-0.225,0.48-0.632,0.852-1.131,1.032L192,123.755v19.537c0,1.104-0.896,2-2,2c-7.293,0-13.226,5.933-13.226,13.225  c0,1.104-0.896,2-2,2H90.286l-42.571,15.387C47.49,175.985,47.261,176.023,47.035,176.023z M32.699,161.972  c6.412,0,12.477,3.609,15.429,9.53l30.326-10.961H28.1l0.682,1.887C30.086,162.12,31.4,161.972,32.699,161.972z M19.11,156.517  H172.89c0.918-7.903,7.207-14.191,15.11-15.11V81.925c-7.903-0.918-14.192-7.207-15.11-15.11H73.453  c-0.105,0-0.208-0.008-0.31-0.024H19.11C18.192,74.694,11.903,80.983,4,81.902v59.505C11.903,142.326,18.192,148.614,19.11,156.517z   M84.937,62.791h89.838c1.104,0,2,0.896,2,2c0,7.292,5.933,13.226,13.226,13.226c1.104,0,2,0.896,2,2v39.485l0.752-0.271  c-1.823-7.744,1.954-15.797,9.074-19.347L181.6,43.921c-7.746,1.824-15.797-1.955-19.347-9.074L84.937,62.791z M173.468,143.434  H18.531c-1.104,0-2-0.896-2-2V81.922c0-1.104,0.896-2,2-2h154.937c1.104,0,2,0.896,2,2v59.512  C175.468,142.539,174.572,143.434,173.468,143.434z M20.531,139.434h150.937V83.922H20.531V139.434z M42.135,131.376  c-1.104,0-1.999-0.895-2-1.999L40.11,96.069l-7.955,0.006c-0.001,0-0.002,0-0.002,0c-1.104,0-1.999-0.895-2-1.999  c-0.001-1.104,0.894-2,1.999-2.001l9.954-0.007l0,0c0.001,0,0.001,0,0.001,0l9.955-0.007c0.001,0,0.002,0,0.002,0  c1.104,0,1.999,0.895,2,1.999c0.001,1.104-0.894,2-1.999,2.001l-7.955,0.006l0.024,33.309c0.001,1.104-0.894,2-1.998,2.001  C42.136,131.376,42.135,131.376,42.135,131.376z M59.882,131.363c-1.104,0-1.999-0.895-2-1.999l-0.026-35.309  c-0.001-1.104,0.894-2,1.998-2.001c0.001,0,0.002,0,0.002,0c1.104,0,1.999,0.895,2,1.999l0.026,35.309  c0.001,1.104-0.894,2-1.998,2.001C59.883,131.363,59.882,131.363,59.882,131.363z M69.261,131.356L69.261,131.356  c-1.104,0-1.999-0.895-2-1.999l-0.026-35.309l0,0c0-0.002,0-0.004,0-0.006c0-0.003,0-0.004,0-0.006c0-0.001,0-0.002,0-0.002  c0-0.002,0-0.003,0-0.005c0,0,0-0.001,0-0.002c0-0.001,0-0.003,0-0.004c0-0.002,0-0.004,0-0.006c0,0,0,0,0,0  c0-0.002,0-0.003,0-0.005c0,0,0-0.001,0-0.001c0-0.001,0-0.002,0-0.004c0-0.001,0-0.002,0-0.003  c0.001-0.001,0.001-0.003,0.001-0.005v-0.001c0-0.001,0-0.003,0-0.004c0,0,0-0.001,0-0.001c0-0.004,0-0.008,0-0.012c0,0,0,0,0,0  c0.001-0.016,0.001-0.03,0.002-0.045l0,0c0-0.001,0-0.003,0.001-0.005v-0.001c0-0.01,0.001-0.021,0.002-0.031c0,0,0,0,0,0  c0-0.002,0-0.003,0-0.005c0,0,0-0.001,0-0.001c0.001-0.002,0.001-0.004,0.001-0.006c0,0,0,0,0,0c0-0.001,0-0.003,0-0.005  c0.002,0,0.001-0.003,0.001-0.005c0-0.001,0-0.002,0-0.002c0-0.002,0-0.004,0-0.006c0,0,0.001-0.001,0.001-0.001  c0-0.001,0-0.003,0-0.004c0,0,0-0.001,0-0.001c0-0.002,0.001-0.004,0.001-0.007l0,0c0-0.001,0-0.003,0-0.005c0,0,0-0.001,0-0.001  c0.001-0.004,0.001-0.008,0.002-0.012c0,0,0,0,0-0.001c0-0.003,0-0.005,0-0.006c0.001-0.002,0.001-0.004,0.001-0.006v0  c0.001-0.008,0.002-0.016,0.003-0.023c0-0.002,0.001-0.002,0.001-0.004c0-0.001,0-0.002,0-0.004v-0.001  c0.002-0.016,0.005-0.032,0.007-0.049c0,0,0,0,0,0c0.147-0.946,0.959-1.673,1.942-1.689c0.001,0,0.001,0,0.001,0  c0.008,0,0.021-0.001,0.02,0c0.002,0,0.005,0,0.009,0c0.001,0,0.002,0,0.003,0l15.055-0.011h0.001c1.104,0,1.999,0.895,2,1.998  l0.005,5.637c0.001,1.105-0.894,2.001-1.998,2.002c-0.001,0-0.002,0-0.002,0c-1.104,0-1.999-0.894-2-1.998l-0.003-3.637  l-11.054,0.008l0.022,31.309l11.054-0.008l-0.002-2.905c-0.001-1.104,0.894-2,1.998-2.001c0.001,0,0.001,0,0.002,0  c1.104,0,1.999,0.895,2,1.999l0.004,4.905c0,0.53-0.21,1.039-0.585,1.415s-0.883,0.586-1.413,0.587l-15.054,0.011  C69.262,131.356,69.261,131.356,69.261,131.356z M92.587,131.339c-1.104,0-1.999-0.895-2-1.999l-0.026-35.309  c-0.001-1.104,0.894-2,1.998-2.001c0.001,0,0.002,0,0.002,0c1.104,0,1.999,0.895,2,1.999l0.01,12.462l12.474-13.813  c0.739-0.82,2.003-0.885,2.825-0.144c0.819,0.74,0.884,2.005,0.144,2.825l-14.742,16.324l14.767,16.302  c0.741,0.819,0.679,2.083-0.14,2.825c-0.819,0.742-2.085,0.678-2.825-0.14l-12.495-13.794l0.01,12.462  c0.001,1.104-0.894,2-1.998,2.001C92.588,131.339,92.587,131.339,92.587,131.339z M117.597,131.32c-1.104,0-1.999-0.895-2-1.999  l-0.026-35.309c-0.001-1.062,0.825-1.93,1.87-1.997c0.042-0.003,0.085-0.004,0.128-0.004L132.622,92c0.001,0,0.002,0,0.002,0  c1.104,0,1.999,0.895,2,1.999c0.001,1.104-0.894,2-1.998,2.001l-13.054,0.01l0.01,13.654l13.054-0.01c0.001,0,0.002,0,0.002,0  c1.104,0,1.999,0.895,2,1.999c0.001,1.104-0.894,2-1.998,2.001l-13.055,0.01l0.01,13.655l13.054-0.01c0.001,0,0.002,0,0.002,0  c1.104,0,1.999,0.895,2,1.999c0.001,1.104-0.894,2-1.998,2.001l-15.054,0.011C117.598,131.32,117.597,131.32,117.597,131.32z   M149.917,131.296c-1.104,0-1.999-0.895-2-1.999l-0.024-33.309l-7.956,0.006c-0.001,0-0.002,0-0.002,0c-1.104,0-1.999-0.895-2-1.999  c-0.001-1.104,0.894-2,1.998-2.001l19.912-0.015c0.001,0,0.002,0,0.002,0c1.104,0,1.999,0.895,2,1.999  c0.001,1.104-0.894,2-1.998,2.001l-7.956,0.006l0.024,33.31c0.001,1.104-0.894,2-1.998,2.001  C149.918,131.296,149.917,131.296,149.917,131.296z" />
            </svg>
        );
    },
);

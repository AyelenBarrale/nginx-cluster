##adjunto archivo .env para que pueda testearse la entrega.

##archivo nginx.conf tambien adjuntado en el proyecto para que pueda verse la configuración establecida para trabajar con un balanceador de carga mediante nginx

##a continuación se adjuntan muestras con comandos solicitados para la entrega para activar pm2, cluster y más.

#se añadió en vista info el número de procesadores
![Captura de Pantalla 2021-11-02 a la(s) 12 58 44](https://user-images.githubusercontent.com/79757893/140394724-ae4d90ce-4226-40b5-afd5-3d0e441fa967.png)

#ejecución de servidor con forever (listado y detención)
![Captura de Pantalla 2021-11-02 a la(s) 13 26 57](https://user-images.githubusercontent.com/79757893/140395118-d3ad9e7c-efda-424f-8c98-7c6fc5278435.png)
![Captura de Pantalla 2021-11-02 a la(s) 13 27 52](https://user-images.githubusercontent.com/79757893/140395127-796324cd-f1d5-45ac-8571-d6fa0e81a13f.png)
![Captura de Pantalla 2021-11-02 a la(s) 13 28 07](https://user-images.githubusercontent.com/79757893/140395204-306894eb-6243-404f-b3a0-7764e6118117.png)

#ejecución de servidor con pm2 modo cluster y fork
![Captura de Pantalla 2021-11-02 a la(s) 13 30 33](https://user-images.githubusercontent.com/79757893/140395303-a3697c87-8f19-44ab-ab23-59e66fdffc0a.png)
![Captura de Pantalla 2021-11-02 a la(s) 13 29 35](https://user-images.githubusercontent.com/79757893/140395331-b1ac527e-6cbb-443c-9e58-cfa763b28936.png)

#detención de modo cluster y fork con pm2
![Captura de Pantalla 2021-11-02 a la(s) 13 32 10](https://user-images.githubusercontent.com/79757893/140395420-662416bc-3b4e-4e4d-b4ea-35c4606df05e.png)
![Captura de Pantalla 2021-11-02 a la(s) 13 32 56](https://user-images.githubusercontent.com/79757893/140395468-c6ac855e-8be5-42c9-8af9-5aa3d543b3eb.png)


#ejecución de módulo cluster nativo
![Captura de Pantalla 2021-11-02 a la(s) 14 44 24](https://user-images.githubusercontent.com/79757893/140395549-3dfa27bb-41a7-4f25-a5ff-4cc3bdb2d6d0.png)

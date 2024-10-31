1. Clonar el proyecto

1.1 dirigite a boton verde Copiar la url de https (copy url to clipboard) 

![{6437064E-0C6F-4458-A91E-3EF6554F8463}](https://github.com/user-attachments/assets/410bcaf1-a77a-44f4-9061-88bbfc49cb60)

   
1.3 dirigirte a tu terminal y colocar el comando git clone (importante!!! tener git instalado) ![{25A3ED18-0FF9-459E-9D59-7684F1C60720}](https://github.com/user-attachments/assets/ae5d1e34-e622-48cf-b641-e253d10761d0)

o descargar directamente 

![{5D6D13BF-29A7-4E51-87CB-75C541582F45}](https://github.com/user-attachments/assets/7c3199f1-bc4c-4f9c-97e1-6bce4d254b9b)


2. Una vez ya clonado en el computador colocar en la terminal del proyecto npm install, para descargar todas las dependencias que necesita el proyecto para ejecutarse

3. Borrar la carpeta prisma

4. Una vez borrada la carpeta prisma, inicializar la base de datos
4.1 colocar en la terminal el comando npx prisma init (despues de eso se creara un .env con una cadena de conexion de prueba)

   ![{9926D4CF-9040-4901-8802-BEB58646CC25}](https://github.com/user-attachments/assets/0bc217e6-fed0-4b13-91bc-c60467d86d25)

   Saldra algo asi parecido a la imagen y colocar el esquema de la base de datos abajo de la imagen:

```
model User {
  id             String   @id @default(auto()) @map("_id") @db.ObjectId
  name           String?
  username       String?  @unique
  email          String?  @unique
  image          String?
  coverImage     String?
  profileImage   String?
  hashedPassword String?
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  elements Element[]
}

model Element {
  id          String  @id @default(auto()) @map("_id") @db.ObjectId
  name        String?
  typeElement String 
  isFavourite Boolean
  urlWebsite  String?
  username    String?
  password    String?
  notes       String?
  userId      String  @db.ObjectId
  directory   String?

  user User? @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

4.2 colocar despues en la terminal npx prisma generate (profe no coloco mi cadena de conexion por que es una variable de entorno a mongo atlas)

formato de conexion a la base de datos local 

![{AE0939A7-9B90-49EE-864B-3DF5E3A63F67}](https://github.com/user-attachments/assets/669098bd-9cd9-4f1f-8b5e-1e144e57238f)

4.3 colocar despues npx prisma db push y listo 

abajo de la cadena de conexion colocar estas 2 variables de entorno en el .env y con esto ya el proyecto funciona 

```
NEXTAUTH_JWT_SECRET="NEXT_AUTH_JWT_SECRET"
NEXTAUTH_SECRET="NEXT_AUTH_SECRET"
```


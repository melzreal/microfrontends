### All apps were created with pnpx create-mf-app

- Using react + tailwind for home and pdp
- Using api server type with nestjs-auth template for server

#### Module federation

Module federation can be applied to every popular view framework. It ships by default with the latest webpack config.

You get the dynamic behaviour whenever the application pushes, you're not dependent on an extra library - as long as you update one app, the other one updates. Less context switching when sharing component code.

#### You deploy federation to a static asset store like s3

To protect against the component being changed in one library, you should use error boundaries - these will wrap your component so it doesn't crash
import { ExamplesService } from '../../services/examples.service';
import { Request, Response } from 'express';

const examplesService = new ExamplesService();
export class Controller {
  public all(req:Request, res:Response) : void {
    examplesService.all().then((r) => res.json(r));
  }

  public byId(req:Request, res:Response) : void {
    examplesService.byId(req.params.id).then((r) => {
      if (r) {
        res.json(r);
      } else {
        res.status(404).end();
      }
    });
  }

  public create(req:Request, res:Response) : void {
    examplesService.create(req.body.name).then((r) =>
      res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r),
    );
  }
}

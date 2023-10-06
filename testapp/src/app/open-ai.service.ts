
import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor() { }

  readonly configuration = new Configuration({
    apiKey:process.env['OPENAI_API_KEY']
  });

  readonly openai = new OpenAIApi(this.configuration);

  getDataFromOpenAI(text: string) {
    from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 32,
      temperature: 0.7
    })).pipe().subscribe(data => {
        console.log(data);
    });
    
  }
    
  
}





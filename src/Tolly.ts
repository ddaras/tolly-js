/**
 * Main Tolly class
 */
export class Tolly {
  private name: string;
  private version: string;
  private baseUrl: string;
  private apiKey: string | null;

  /**
   * Creates a new instance of Tolly
   * @param name - The name identifier for this Tolly instance
   */
  constructor({
    name = "Tolly",
    apiKey = null,
    baseUrl = "https://tolly.dev/api/v1",
  }: {
    name?: string;
    apiKey?: string | null;
    baseUrl?: string;
  }) {
    this.name = name;
    this.version = "1.0.0";
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  /**
   * Gets the name of this Tolly instance
   * @returns The name of the instance
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Sets the name of this Tolly instance
   * @param name - The new name to set
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Gets the version of Tolly
   * @returns The version string
   */
  public getVersion(): string {
    return this.version;
  }

  public async resolve(
    func: string,
    options: {
      input: any;
      description?: string;
      schema?: any;
    }
  ): Promise<any> {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${this.apiKey}`);
    headers.set("Content-Type", "application/json");

    const response = await fetch(`${this.baseUrl}/resolve/${func}`, {
      method: "POST",
      headers,
      body: JSON.stringify(options),
    });

    return response.json();
  }
}

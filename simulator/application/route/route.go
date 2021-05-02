package route

import (
	"bufio"
	"encoding/json"
	"errors"
	"os"
	"strconv"
	"strings"
)

type Route struct {
	ID        string     `json:"routeId"`
	ClientID  string     `json:"clientId"`
	Positions []Position `json:"position"`
}

type Position struct {
	Lat  float64 `json:"lat"`
	Long float64 `json:"long"`
}

type PartialRoutePosition struct {
	ID       string    `json:"routeId"`
	ClientID string    `json:"clientId"`
	Position []float64 `json:"position"`
	Finished bool      `json:"finished"`
}

func NewRoute() *Route {
	return &Route{}
}

func (route *Route) LoadPositions() error {
	if route.ID == "" {
		return errors.New("route id not informed")
	}

	file, erro := os.Open("destinations/" + route.ID + ".txt")

	if erro != nil {
		return erro
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		data := strings.Split(scanner.Text(), ",")
		lat, erro := strconv.ParseFloat(data[1], 64)
		if erro != nil {
			return nil
		}

		long, erro := strconv.ParseFloat(data[0], 64)
		if erro != nil {
			return nil
		}

		route.Positions = append(route.Positions, Position{
			Lat:  lat,
			Long: long,
		})
	}
	return nil
}

func (r *Route) ExportJsonPositions() ([]string, error) {
	var route PartialRoutePosition
	var result []string
	total := len(r.Positions)

	for k, v := range r.Positions {
		route.ID = r.ID
		route.ClientID = r.ClientID
		route.Position = []float64{v.Lat, v.Long}
		route.Finished = false
		if total-1 == k {
			route.Finished = true
		}

		jsonRoute, erro := json.Marshal(route)

		if erro != nil {
			return nil, erro
		}

		result = append(result, string(jsonRoute))
	}
	return result, nil
}
